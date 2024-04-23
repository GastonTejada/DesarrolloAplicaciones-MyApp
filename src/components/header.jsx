import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../constants/colors'

const Header = ({title}) => {
  return (
    <View style = {styles.container}>
      <Text style = {styles.text}>{title}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 65,
    backgroundColor: colors.dark,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: colors.white,
    fontSize: 30
  }
})