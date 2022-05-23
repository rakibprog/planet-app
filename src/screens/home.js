import { View,SafeAreaView,FlatList,StyleSheet,Pressable} from 'react-native';
import React from 'react';
import Text from '../components/text';
import PlanetHeader from '../components/planet-header/planet-header';
import { colors } from './../theme/color';
import { PLANET_LIST } from './../data/planet-list';
import { spacing } from './../theme/spacing';
import { AntDesign } from '@expo/vector-icons'



export default function Home({navigation}) {
  return (
   <SafeAreaView style={styles.container}>
         <PlanetHeader></PlanetHeader>
        <FlatList contentContainerStyle={styles.list} ItemSeparatorComponent={()=> <View style={styles.separator}/>} data = {PLANET_LIST}
          renderItem ={({item})=>{
              return (
                <Pressable onPress={()=>{
                    navigation.navigate("Details");
                }} style={styles.item}>
                  <View style={{flexDirection:'row',alignItems:'center'}}>
                      <View style={[styles.circle,{backgroundColor:item.color}]}/>
                      <Text style={styles.itemName} preset="h3">{item.name}</Text>
                  </View>
                  <View>
                    <AntDesign name="right" size={18} color="white" />
                  </View>              
              </Pressable>
              );
          }}
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
      }
});