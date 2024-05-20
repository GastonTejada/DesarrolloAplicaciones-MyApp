import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { colors } from '../constants/colors'
import { useSelector } from 'react-redux'
import Avatar from './Avatar'

const Header = ({route}) => {

  const categorySelected = useSelector(state => state.shop.value.categorySelected)
  
  return (
    <View style = {styles.container}>
      <Image
          source={require('../images/logo.png')}
          style={styles.logo}
      />
      <Text style = {styles.text}>{route.name}</Text>  
      <Avatar/>
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
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  logo:{
    width: 50,
    height: 50,
    marginLeft: 15,    
    justifyContent: 'flex-start',
  },
  text: {    
    color: colors.white,
    fontSize: 30,    
  }
})