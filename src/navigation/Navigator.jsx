import { StyleSheet, View, Image, Text, ActivityIndicator } from 'react-native'
import React, { useState , useEffect} from 'react'
import { NavigationContainer } from '@react-navigation/native'
import BottomTabNavigator from './BottomTabNavigator'
import { colors } from '../constants/colors'
import AuthStackNavigator from './AuthStackNavigator'
import { useSelector } from 'react-redux'

const SplashScreen = () => (
  <View style={styles.container}>
      <Image
          source={require('../images/logo.png')}
          style={styles.logo}
      />
      <Text style={styles.nameShop}>PopCorn Time</Text>      
      <Text style={styles.subtitle}>Movie's  Shop</Text>
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#FF0000" />
        <Text style={styles.textLoader}>Loading...</Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2024 PopCorn Time. Todos los derechos reservados.</Text>
        <Text style={styles.footerText}>Gaston Tejada - Entrega Final Desarrollo Aplicaciones.</Text>
      </View>    
  </View>
);

const Navigator = () => {

  const [loading, setLoading] = useState(true);
  const {user} = useSelector(state => state.auth.value)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <NavigationContainer>
        {loading ? <SplashScreen /> : user ? <BottomTabNavigator/> : <AuthStackNavigator/>}
    </NavigationContainer>
  )
}

export default Navigator

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.dark,
  },
  logo:{
    width: 150,
    height: 150,
    justifyContent: 'center',
  },
  nameShop: {    
    color: colors.white,
    fontSize: 40,
    marginBottom:30,
  },
  subtitle:{
    color: colors.white,
    fontSize: 20,
  },
  loaderContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 30,
  },
  textLoader:{
    color: colors.white,
    fontSize: 16,
  },
  footer: {
    position: 'absolute',
    bottom: 20,
  },
  footerText: {
    color: colors.white,    
    fontSize: 14,
  },
});