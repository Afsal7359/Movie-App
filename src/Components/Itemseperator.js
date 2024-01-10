import React from 'react'
import { View } from 'react-native'

const Itemseperator = ({height,width}) => {
  return (
    <View style={{height,width}}/>
  )
}


export default Itemseperator

Itemseperator.defaultProps={
    height:0,
    width:0,
}
