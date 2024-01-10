import React from 'react'
import { StyleSheet, Text, View,Dimensions, TouchableOpacity} from 'react-native'
import colors from '../constants/colors'

const {height,width}= Dimensions.get('screen')
const setWidth =(w)=>(width/100)*w
function GenreCrads({genrename,Active,onPress}) {
  return (
    <TouchableOpacity 
    style={{...Styles.container,backgroundColor: Active ? colors.Active : colors.White}} 
    activeOpacity={0.5} onPress={()=> onPress(genrename)}
    >
        <Text style={{...Styles.generText,color:Active ? colors.White : colors.Black}}>{genrename}</Text>
    </TouchableOpacity>
  )
}

const Styles = StyleSheet.create({
    container:{
        justifyContent:"center",
        alignItems:"center",
        borderRadius:5,
        backgroundColor:colors.White,
        paddingVertical:8,
        elevation:3,
        marginVertical:2,
        width:setWidth(25),
    },
    generText:{
        fontSize:13,
        color:colors.Active
    },
})

export default GenreCrads