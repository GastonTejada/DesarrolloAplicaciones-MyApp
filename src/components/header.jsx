import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { colors } from '../constants/colors'

const Header = ({route}) => {

  return (
    <View style = {styles.container}>
      <Image
          source={require('../images/logo.png')}
          style={styles.logo}
      />
      <Text style = {styles.text}>{route.name}</Text>  
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: '100%',
    height: 65,
    backgroundColor: colors.dark,    
    alignItems: 'center',
    borderBottomColor: colors.orange2,
    borderBottomWidth: 2,
  },
  logo:{
    width: 50,
    height: 50,
    marginLeft: 15,
    marginRight: 75,
    justifyContent: 'flex-start',
  },
  text: {    
    color: colors.white,
    fontSize: 30,
  
  }
})