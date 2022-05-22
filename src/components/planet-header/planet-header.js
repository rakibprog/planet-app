import { View,StyleSheet } from 'react-native'
import React from 'react'
import Text from '../text'
import { spacing } from './../../theme/spacing';
import { colors } from './../../theme/color';

export default function PlanetHeader() {
  return (
    <View style={styles.container}>
      <Text preset='h2'>THE PLANET</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        padding:spacing[5],
        borderBottomWidth:0.5,
        borderBottomColor:colors.white,
        
    }
})