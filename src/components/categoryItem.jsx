import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../constants/colors';
import Card from './card';

const CategoryItem = ({category}) => {
  
  return (
    <Card>
        <Text style = {styles.text}>{category}</Text>
    </Card>

  )
}

export default CategoryItem

const styles = StyleSheet.create({
    categoryContainer: {
        backgroundColor: colors.darkgray,
        width: 250,
        height: 40,
        shadowColor: "#000",
        shadowOffset:{
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    },
    text: {
        color: colors.lightgray,
        textAlign: 'center',
        fontSize: 20
    }
})