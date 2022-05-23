import { View, SafeAreaView, StyleSheet  } from 'react-native'
import React from 'react'
import Text from '../components/text'
import PlanetHeader from '../components/planet-header/planet-header'
import { colors } from './../theme/color';

export default function Details() {
  return (
      <SafeAreaView style={styles.container}>
            <PlanetHeader backBtn={true}></PlanetHeader>      
      </SafeAreaView>
    
  )
}

const styles = StyleSheet.create({
     container:{
         flex: 1,
         backgroundColor:colors.black,
     }
});