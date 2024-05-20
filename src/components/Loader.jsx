import React from 'react';
import { View, ActivityIndicator, StyleSheet, Text, ImageBackground } from 'react-native';
import { colors } from '../constants/colors';

const Loader = () => {
  return (
    <ImageBackground source={require('../images/Metallic-texture.jpg')}
    style={styles.background} >
      <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color="#FF0000" />
          <Text style={styles.textLoader}>Loading...</Text>
      </View>
    </ImageBackground>  
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    width: '100%'
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.dark,
  },
  textLoader:{
    color: colors.white,
    fontSize: 18,
  },
});

export default Loader;