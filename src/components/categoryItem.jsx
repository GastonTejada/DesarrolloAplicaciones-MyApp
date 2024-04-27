import { StyleSheet, Text, Pressable, View } from 'react-native'
import React from 'react'
import { colors } from '../constants/colors';
import Card from './Card';

const CategoryItem = ({ genre, selectGenre = () => {} }) => {

  return (
    <Card style={{ marginVertical: 10, marginHorizontal: 10 }}>
      <Pressable onPress={()=>selectGenre(genre)}>
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