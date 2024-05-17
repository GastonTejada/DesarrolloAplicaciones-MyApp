import { StyleSheet, Text, Pressable } from 'react-native'
import React from 'react'
import { colors } from '../constants/colors';
import Card from './Card';
import { useDispatch } from 'react-redux';
import { setCategorySelected } from "../features/Shop/shopSlice"

const CategoryItem = ({ genre, navigation }) => {

  const dispatch = useDispatch()

  const handleNavigate = () => {
    dispatch(setCategorySelected(genre))
    navigation.navigate('ItemListCategory', {genre})
  }

  return (
    <Card style={{ marginVertical: 10, marginHorizontal: 10 }}>
      <Pressable onPress={handleNavigate}>    
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