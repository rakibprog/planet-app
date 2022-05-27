import { View, SafeAreaView, StyleSheet, ScrollView, Pressable, Linking  } from 'react-native'
import React from 'react'
import Text from '../components/text'
import PlanetHeader from '../components/planet-header/planet-header'
import { colors } from './../theme/color';
import { spacing } from './../theme/spacing';
import { EarthSvg, JupiterSvg, MarsSvg, MercurySvg, NeptuneSvg, SaturnSvg, UranusSvg, VenusSvg } from '../svg';

const PlanetSection = ({title,value}) => {
    return(
          <View style={styles.planetSection}>
              <Text>{title}</Text>
              <Text>{value}</Text>
          </View>
    )
}


export default function Details({navigation, route}) {
  const planet = route.params.planet;
  const {name,description,rotationTime,revolutionTime,radius,avgTemp,wikiLink} = planet;
  console.log(name);
  const renderImage = (name) => {
      switch(name) {
        case "mercury":
        return <MercurySvg/>;
        case "earth":
          return <EarthSvg/>;
        case "jupiter":
          return <JupiterSvg/>;
        case "mars":
          return <MarsSvg/>;
        case "neptune":
          return <NeptuneSvg/>;
        case "saturn":
          return <SaturnSvg/>;
        case "uranus":
          return <UranusSvg/>;
        case "venus":
          return <VenusSvg/>;
      }

  }
 // wikiLink
  const onPressLink = () =>{
    Linking.openURL(wikiLink);
 }
  return (
      <SafeAreaView style={styles.container}>
            <PlanetHeader backBtn={true}></PlanetHeader>
            <ScrollView>
                <View style={styles.imageView}>
                  {renderImage(name)} 
                </View> 
                <View style={styles.detailsView}>
                    <Text preset="h1" style={styles.name}>{name}</Text>
                    <Text style={styles.description}>{description}</Text>
                    <Pressable style={styles.source} onPress={onPressLink}>
                         <Text>Source:</Text>
                         <Text style={styles.wikipedia}>wikipedia</Text>
                    </Pressable>
                </View>
                <PlanetSection title="ROTATION TIME" value={rotationTime}/>
                <PlanetSection title="REVOULATION TIME" value={ revolutionTime}/>
                <PlanetSection title="RADIUS" value={radius}/>
                <PlanetSection title="AVERAGE TEMP." value={avgTemp}/>
                
            </ScrollView>   
      </SafeAreaView>
    
  )
}

const styles = StyleSheet.create({
     container:{
         flex: 1,
         backgroundColor:colors.black,
     },
    
     imageView:{
       alignItems:'center',
       justifyContent:'center',
       padding:spacing[5],
       marginTop:spacing[5],
     },

     detailsView:{
          alignItems:'center',
          marginTop:10,
          padding:spacing[5],
     },
     name:{
         textTransform:'uppercase',
         textAlign:'center',
     },
     description:{
          lineHeight:21,
          paddingTop:10,
          textAlign:'center',
          fontSize:16,
     },
     source: {
      flexDirection:'row',
      alignItems:'center',
      paddingTop:spacing[5],
     },
      wikipedia:{
        paddingLeft:5,
        fontWeight:'bold',
        textDecorationLine:'underline', 
     },
     planetSection:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal:spacing[5],
        paddingVertical:spacing[5],
        borderColor:colors.grey,
        borderWidth:1,
        marginHorizontal:spacing[5],
        marginBottom:spacing[5],
     }
});