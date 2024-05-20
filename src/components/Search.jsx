import { Pressable, StyleSheet, Text, TextInput, View, FlatList } from "react-native"
import React, { useState } from "react"
import { colors } from "../constants/colors"
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';


const Search = ({ onSearch = () => {}, error = "", goBack = () => {} }) => {
  const [keyword, setKeyword] = useState("")  

  const handleSearch = (text) => {
    setKeyword(text);
    onSearch(text);
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={goBack}>      
        <FontAwesome name="arrow-circle-left" size={36} color="red" />
      </Pressable>      
      <TextInput
        style={styles.input}
        placeholder="Search..."
        placeholderTextColor={colors.white}
        value={keyword}
        onChangeText={handleSearch}      
      />      
      {error ? <Text style={styles.errorText}>{error}</Text> : null}

      {keyword.length > 0 && (
        <Pressable onPress={() => setKeyword("")} style={styles.closeButton}>
            <AntDesign name="closecircle" size={26} color={colors.lightgray} />
        </Pressable>
      )}
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
    paddingBottom: 10
  },
  input: {
    width: 250,
    padding: 8,
    fontSize: 18,
    backgroundColor: colors.transparent,
    color: colors.white,
    borderRadius: 10,
  },
  errorText: {
    color: 'red',
    marginTop: 5,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.white,
    color: colors.white,
  },
  closeButton: {    
    right: 0,
    top: 0,
  }
})
