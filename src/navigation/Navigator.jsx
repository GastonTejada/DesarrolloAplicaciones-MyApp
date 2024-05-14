import { StyleSheet, View, Image, Text } from 'react-native'
import React, { useState , useEffect} from 'react'
import { NavigationContainer } from '@react-navigation/native'
import BottomTabNavigator from './BottomTabNavigator'
import { colors } from '../constants/colors'

const SplashScreen = () => (
  <View style={styles.container}>
      <Image
          source={require('../images/logo.png')}
          style={styles.logo}
      />
      <Text style={styles.nameShop}>PopCorn Time</Text>      
      <Text style={styles.subtitle}>Movie's  Shop</Text>
  </View>
);

const Navigator = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);


  return (
    <NavigationContainer>
        {loading ? <SplashScreen /> : <BottomTabNavigator />}
    </NavigationContainer>
  )
}

export default Navigator

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.dark
  },
  logo:{
    width: 150,
    height: 150,
    justifyContent: 'center',
  },
  nameShop: {    
    color: colors.white,
    fontSize: 40,
    marginBottom:30
  },
  subtitle:{
    color: colors.white,
    fontSize: 20,
  }
});