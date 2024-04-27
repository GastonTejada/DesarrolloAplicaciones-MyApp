import React from "react";
import { FlatList, StyleSheet, View, ImageBackground } from "react-native"
import CategoryItem from "../components/CategoryItem"
import geners from "../data/genre.json"

const Home = ({ setGenreSelected }) => {

    return (    
      <View style={styles.container}>
          <ImageBackground source={require('../images/Metallic-texture.jpg')}
           style={styles.background} >
              <View style={styles.flatListContainer}>

                  <FlatList          
                    keyExtractor = {(item) => item}
                    data={geners}
                    renderItem = {({item}) => (
                      <CategoryItem 
                        selectGenre={setGenreSelected} 
                        genre={item} 
                      />      
                    )}
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
  flatListContainer: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
})