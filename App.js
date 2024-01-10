import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import{createStackNavigator} from "@react-navigation/stack"
import Homescreen from './src/Screens/Homescreen';
import Moviescreen from './src/Screens/Moviescreen';
import {useFonts} from 'expo-font';
import AppLoading from 'expo-app-loading';

const Stack = createStackNavigator();
const App = () => {

  const [fontLoaded]=useFonts({
    Regular:require("./assets/Fonts/NunitoSans_10pt-Regular.ttf"),
    Bold:require("./assets/Fonts/NunitoSans_10pt-Bold.ttf"),
    Black:require("./assets/Fonts/NunitoSans_10pt-Black.ttf"),
    ExtraBold:require("./assets/Fonts/NunitoSans_10pt-ExtraBold.ttf"),
    ExtraLight:require("./assets/Fonts/NunitoSans_10pt-ExtraLight.ttf"),
    Light:require("./assets/Fonts/NunitoSans_10pt-Light.ttf"),
    SemiBold:require("./assets/Fonts/NunitoSans_10pt-SemiBold.ttf"),
  })
  return fontLoaded? (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="home" component={Homescreen} options={{headerShown:false}}/>  
      <Stack.Screen name="movie" component={Moviescreen} />   
      </Stack.Navigator>
    </NavigationContainer>
  ) : (
  <AppLoading/>
  )
}
export default App;

