import React from 'react'
import { Image, StyleSheet, Text, Touchable, TouchableNativeFeedback, TouchableOpacity, View } from 'react-native'
import colors from '../constants/colors'
import { Ionicons } from '@expo/vector-icons';
import Images from '../constants/Images';


const MovieCard = () => {
  return (
    <TouchableOpacity>
    <View style={styles.container}>
        <View style={styles.imdbcontainer}>
          <Image source={Images.IMDB} resizeMode='cover' style={styles.imdbImage}/>
          <Text style={styles.imdbRating}>9.4</Text>
        </View>
        <TouchableNativeFeedback>
         <Ionicons name="heart-outline" size={25} color="white" style={{position:"absolute",bottom:10,left:10}}/>
       </TouchableNativeFeedback>
    </View>
    <View>
      <Text style={styles.Movietitle} numberOfLines={5}>URI - Surgical Strike  </Text>
      <View style={styles.movieSubTitleContainer}>
        <Text style={styles.MovieSubTitle}>Hindi | (U/A)</Text>
        <View style={styles.heart_percentage}>
        <Ionicons name="heart" size={17} color={colors.Heart} style={{marginRight:5}} />
          <Text style={styles.MovieSubTitle}>90%</Text>
        </View>
      </View>
    </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.Active,
        height:340,
        width:230,
        borderRadius:12,
        elevation:5,
        marginVertical:2,
    },
    heart_percentage:{
      flexDirection:"row",
      alignItems:"center",
    },
    movieSubTitleContainer:{
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"space-between",
    },
    MovieSubTitle:{
      fontSize:12,
      fontFamily:"Regular"
    },
    Movietitle:{
      fontFamily:"ExtraBold",
      color:colors.Gray,
      paddingVertical:2,
      marginTop:5,
      width:230,
    },
    imdbcontainer:{
      flexDirection:"row",
      alignItems:"center",
      alignSelf:"flex-end",
      backgroundColor:colors.Yellow,
      borderBottomLeftRadius:5,
      borderTopRightRadius:12,
      paddingVertical:3,
    },
    imdbImage:{
      height:20,
      width:50,
      borderBottomLeftRadius:5, 
    },
    imdbRating:{
      margin:5,
      color:colors.Heart,
      fontFamily:"ExtraBold"
    }
})

export default MovieCard