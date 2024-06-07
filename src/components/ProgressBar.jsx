import React from 'react';
import { View, StyleSheet, Text, ImageBackground } from 'react-native';
import ProgressBar from 'react-native-progress/Bar';
import { colors } from '../constants/colors';

const ProgressBarComponent = ({ progress }) => {
  return (
    <ImageBackground source={require('../images/Metallic-texture.jpg')} style={styles.background}>
      <View style={styles.loaderContainer}>
        <ProgressBar 
          progress={progress} 
          width={200} 
          color="#FF0000" 
          borderWidth={2} 
          borderColor={colors.white}
        />
        <Text style={styles.textLoader}>Loading... {Math.round(progress * 100)}%</Text>
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
  textLoader: {
    color: colors.white,
    fontSize: 18,
    marginTop: 10,
  },
});

export default ProgressBarComponent;
