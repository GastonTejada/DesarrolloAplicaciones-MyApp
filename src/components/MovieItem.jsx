import { Image, StyleSheet, Text, Pressable } from 'react-native'
import React from 'react'
import Card from './Card'
import { colors } from '../constants/colors'

const MovieItem = ({
  movie,
  setMovieSelected = () => {},
  navigation,
}) => {
  return (

      <Card style={styles.cardContainer}>   
          <Pressable style={styles.pressable} 
          onPress={() => navigation.navigate('ItemDetail', {movieId: movie.id})}>
              <Image 
                  resizeMode='cover'
                  style = {styles.image}
                  source={{uri: movie.image}}
                />                
              <Text style={styles.textCategory}>{movie.title}</Text>
          </Pressable>
      </Card>


  )
}


export default MovieItem

const styles = StyleSheet.create({
  cardContainer: {
    paddingLeft: 10,
    flexDirection: 'row',
    height: 120,
    width: 320,
    justifyContent: 'flex-start',
    margin: 10,
    borderWidth: 2,
    backgroundColor: colors.dark,
    borderBottomColor: colors.platinum,
    borderEndColor: colors.platinum,
  },
  image: {
    height: 100,
    width: 80,
    borderRadius: 8,
    marginRight: 20
  },
  textCategory: {
    color: colors.gray4,
    fontSize: 18, 
    width: 200    
  },
  pressable: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 10,
  },
})