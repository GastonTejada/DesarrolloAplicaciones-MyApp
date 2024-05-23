import { StyleSheet, View, Dimensions } from 'react-native'
import React from 'react'
import { colors } from '../constants/colors'

const { width: screenWidth } = Dimensions.get('window');

const Card = ({children, style}) => {
  return (
    <View style={{...styles.container, ...style}}>
        {children}
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.dark,
        width: screenWidth,
        height: 208,        
        marginBottom:  10,
        marginHorizontal: 0, 
        borderWidth: 1,
        borderBottomColor: colors.platinum,        
        shadowOpacity: 0.5,      
        justifyContent: 'center',
        alignItems: 'center',              
    }
})
