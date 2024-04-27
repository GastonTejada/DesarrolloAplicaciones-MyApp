import { Pressable, StyleSheet, Text, TextInput, View } from "react-native"
import React, { useState } from "react"
import { colors } from "../constants/colors"
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


const Search = ({ onSearch = () => {}, error = "", goBack = () => {} }) => {
  const [keyword, setKeyword] = useState("")  
  return (
    <View style={styles.container}>
      <Pressable onPress={() => onSearch(keyword)}>
        <MaterialIcons name="saved-search" size={26} color="white" />
      </Pressable>
      <TextInput
        style={styles.input}
        placeholder="Search..."
        value={keyword}
        onChangeText={setKeyword}
      />      
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
      
      <Pressable onPress={() => setKeyword("")}>        
        <MaterialCommunityIcons name="eraser-variant" size={26} color="white" />
      </Pressable>
      <Pressable onPress={goBack}>
      <Ionicons name="arrow-back" size={26} color="white" />
      </Pressable>
      {error ? <Text>{error}</Text> : null}
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 18,
  },
  input: {
    width: 250,
    padding: 8,
    fontSize: 18,
    backgroundColor: colors.transparent,
    color: colors.white,
    borderRadius: 10,
  },
})
