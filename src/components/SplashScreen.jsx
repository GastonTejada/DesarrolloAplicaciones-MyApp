
import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { colors } from '../constants/colors'

const SplashScreen = ({ navigation }) => {

  console.log(navigation);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Home'); // Reemplaza la pantalla actual con la pantalla Home después de 3 segundos
    }, 3000); // 3000 milisegundos = 3 segundos
      }, []);

  return (
    <View style={styles.container}>
      <Image
          source={require('../images/logo.png')}
          style={styles.logo}
      />
      <Text style={styles.nameShop}>PopCorn Time</Text>      
      <Text style={styles.subtitle}>Movie's  Shop</Text>      
    </View>
  );
};

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

export default SplashScreen;