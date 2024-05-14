import { StyleSheet, Text, Pressable } from 'react-native'
import React from 'react'
import { colors } from '../constants/colors';
import Card from './Card';

const CategoryItem = ({ genre, navigation }) => {

  return (
    <Card style={{ marginVertical: 10, marginHorizontal: 10 }}>
      <Pressable onPress={()=>navigation.navigate('ItemListCategory', {genre})}>    
        <Text style={styles.text}>{genre}</Text>
      </Pressable>
    </Card>
  )
}

export default CategoryItem

const styles = StyleSheet.create({  
    text: {
        color: colors.platinum,
        textAlign: 'center',
        fontSize: 22
    }
})