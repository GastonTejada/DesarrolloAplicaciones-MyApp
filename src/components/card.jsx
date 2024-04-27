import { StyleSheet, View } from 'react-native'
import React from 'react'
import { colors } from '../constants/colors'

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
        width: 200,
        height: 40,
        marginRight: 10,
        marginBottom:  10,
        borderWidth: 1,
        borderBottomColor: colors.platinum,
        borderEndColor: colors.platinum,
        shadowOpacity: 0.5,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',              
    }
})
