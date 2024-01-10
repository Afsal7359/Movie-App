import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import colors from '../constants/colors';
import GenreCrads from '../Components/GenreCrads';
import Itemseperator from '../Components/Itemseperator';
import MovieCard from '../Components/MovieCard';

const Genres = ["All","Action","Comedy","Romance","Horror","Sci-Fi"];

const Homescreen = ()=> {
   
    const [activeGenre,setActiveGenre]=useState("All")

  return (
    <ScrollView style={styles.container}>
      <StatusBar style="auto" translucent={false} backgroundColor={colors.Yellow}/>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Now Playing</Text>
        <Text style={styles.headersubtitle}>VIEW ALL</Text>
      </View>
      <View style={styles.genrelistcontainer}>
        <FlatList
         data={Genres}
         horizontal
         keyExtractor={(item)=> item}
         ItemSeparatorComponent={()=><Itemseperator width={20} />}
         ListHeaderComponent={()=> <Itemseperator width={20}/>}
         ListFooterComponent={()=><Itemseperator width={20}/>}
         showsHorizontalScrollIndicator={false}
          renderItem={({item})=> (
          <GenreCrads 
          genrename={item}
          Active={item === activeGenre ? true :false}
          onPress ={(genrename)=> setActiveGenre(genrename)}
          />)}>

        </FlatList>
      </View>
      <View>
        <FlatList
        data={Genres}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) =>item}
        ItemSeparatorComponent={()=><Itemseperator width={20}/>}
        ListHeaderComponent={()=><Itemseperator width={20}/>}
        ListFooterComponent={()=><Itemseperator width={20}/>}
        renderItem = {({item})=> <MovieCard/>}
        />
      </View>
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:colors.Basic_Background
  },
  headerContainer:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    paddingHorizontal:20,
    paddingVertical:10,
  },
  headerTitle:{
    fontSize:28,
    fontFamily:"Regular"
  },
  headersubtitle:{
    fontSize:13 ,
    color:colors.Active,
    fontFamily:"Bold"
  },
  genrelistcontainer:{
    paddingVertical:10
  }
});
export default Homescreen