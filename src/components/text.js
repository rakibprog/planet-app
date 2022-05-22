import { View, Text as RnText, StyleSheet } from 'react-native'
import React from 'react'
import { preset, presets } from './text.preset';

export default function text({children, preset="default", style}) {
   const textStyles = StyleSheet.compose(presets[preset],style)
   return (
    <RnText style={textStyles}>
        {children}
    </RnText>
  )
}