import { View,SafeAreaView,FlatList,StyleSheet,Pressable, TextInput} from 'react-native';
import { useState } from 'react';
import Text from '../components/text';
import PlanetHeader from '../components/planet-header/planet-header';
import { colors } from './../theme/color';
import { PLANET_LIST } from './../data/planet-list';
import { spacing } from './../theme/spacing';
import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';


const PlanetItem =  ({item}) => {
    const {name,color} = item;
    const navigation = useNavigation();   
  return(
        <Pressable onPress={()=>{
          navigation.navigate("Details", {planet: item});
      }} style={styles.item}>
        <View style={{flexDirection:'row',alignItems:'center'}}>
            <View style={[styles.circle,{backgroundColor:color}]}/>
            <Text style={styles.itemName} preset="h3">{name}</Text>
        </View>
        <View>
          <AntDesign name="right" size={18} color="white" />
        </View>              
      </Pressable>
      );
}

export default function Home({navigation}) {
  const  [list,setList] = useState(PLANET_LIST);
  const renderItem = ({item})=>{
    return (
       <PlanetItem item = {item}/>
    );
  }
  
  const searchFilter = (text) => {
    const filteredList =  PLANET_LIST.filter( (item) =>{
        const itemName = item.name.toLowerCase();
        const userTypedText = text.toLowerCase();
        return itemName.indexOf(userTypedText) > -1;
    });
    setList(filteredList);
  }
  return (
   <SafeAreaView style={styles.container}>
         <PlanetHeader></PlanetHeader>
         <TextInput
          placeholder='Type the planet name' 
          placeholderTextColor={colors.white}
          autoComplete={false} 
          style={styles.searchInput}
          onChangeText={(text) => searchFilter(text)}
          />
        <FlatList contentContainerStyle={styles.list} ItemSeparatorComponent={()=> <View style={styles.separator}/>} data = {list}
          renderItem ={renderItem}
          keyExtractor={(item)=>item.name}
        />
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
      container:{
        flex:1, 
        backgroundColor:colors.black,
      },

      item:{
          flexDirection:'row',
          alignItems:'center',
          padding:spacing[4],
          justifyContent:'space-between',
      },

      list:{
        padding:spacing[4],
      },
      circle:{
          width:30,
          height:30,
          borderRadius:15,
      },

      itemName:{
          textTransform:'uppercase',
          marginLeft:16,
      },
      separator:{
         borderBottomColor:colors.white,
         borderBottomWidth:0.5,
      },
      searchInput:{
        color:colors.white,
        fontSize:spacing[4],
        borderBottomColor:colors.white,
        borderBottomWidth:0.5,
        padding:spacing[4],
        margin:spacing[5],
      }
});