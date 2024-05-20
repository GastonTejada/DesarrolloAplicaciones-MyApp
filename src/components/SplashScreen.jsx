import { StyleSheet, View, Image, Text, ActivityIndicator,ImageBackground } from 'react-native'
import React from 'react'
import { colors } from '../constants/colors'


const SplashScreen = () => (
  <ImageBackground source={require('../images/Metallic-texture.jpg')}
  style={styles.background} >
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
  </ImageBackground>  
);

export default SplashScreen

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    width: '100%'
  },
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
