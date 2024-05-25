import React from "react";
import { FlatList, StyleSheet, View, ImageBackground, Text } from "react-native"
import CategoryItem from "../components/CategoryItem"
import { useGetGenresQuery } from "../services/shopService"
import { colors } from '../constants/colors';


const Home = ({ route, navigation}) => {

    const {data: genres , error, isLoading} = useGetGenresQuery()
 
    return (
      <View style={styles.container}>
          <ImageBackground source={require('../images/Metallic-texture.jpg')}
           style={styles.background} >
              <Text style={styles.textTitulo}>Selection of Categories</Text>
              <View style={styles.flatListContainer}>
                  <FlatList
                    keyExtractor = {(item) => item}
                    data={genres}                    
                    renderItem = {({item}) => (
                      <CategoryItem
                        navigation={navigation}
                        genre={item}
                      />
                      
                    )}
                    numColumns={2}
                    columnWrapperStyle={styles.row}
                  />

              </View>
          </ImageBackground>
      </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%'    
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    width: '100%'
  },
  textTitulo: {
    fontSize: 28,
    color: colors.lightgray,
    textAlign: 'center',
    marginTop: 50,
  },
  flatListContainer: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  row: {
    justifyContent: 'space-between',
  },
})