import { View,SafeAreaView  } from 'react-native'
import React from 'react'
import Text from '../components/text'
import PlanetHeader from '../components/planet-header/planet-header'
import { colors } from './../theme/color';


export default function Home() {
  return (
   <SafeAreaView style={{flex:1, backgroundColor:colors.black}}>
         <PlanetHeader></PlanetHeader>
   </SafeAreaView>
  )
}