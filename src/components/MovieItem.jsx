import { Image, StyleSheet, Text, Pressable, Dimensions, View } from 'react-native'
import React from 'react'
import Card from './Card'
import { colors } from '../constants/colors'
import { useDispatch } from 'react-redux'
import { setIdSelected } from "../features/Shop/shopSlice"

const { width: screenWidth } = Dimensions.get('window');

const MovieItem = ({
  movie,
  setMovieSelected = () => {},
  navigation,
}) => {

  const dispatch = useDispatch()
  const handleNavigate = () => {
    dispatch(setIdSelected(movie.title))
    navigation.navigate('ItemDetail', {movieId: movie.rank})
  }

  return (
      <Card style={styles.cardContainer}>   
          <Pressable style={styles.pressable} 
          onPress={handleNavigate}>
              <View style={styles.ratingContainer}>
                <Text style={styles.rating}>{movie.rating}</Text>
              </View>
              <Image 
                  resizeMode='cover'
                  style = {styles.image}
                  source={{uri: movie.image}}
                />                
              <Text style={styles.title} numberOfLines={1} ellipsizeMode='tail'>{movie.title}</Text>
          </Pressable>
      </Card>
  )
}


export default MovieItem

const styles = StyleSheet.create({
  cardContainer: {        
    flexDirection: 'column',
    height: 220,
    width: screenWidth / 3.25,
    justifyContent: 'flex-start',
    alignContent: 'center',
    borderWidth: 0.5,
    borderBottomColor: colors.platinum,
    borderEndColor: colors.platinum,                
    overflow: 'hidden',    
    margin: 2.2,
  },
  image: {    
    height: 180,
    width: '100%',
    borderRadius: 8,
    justifyContent: 'center',
    alignContent: 'center',
  },
  textCategory: {
    color: colors.gray4,
    fontSize: 18, 
    width: 200,    
  },
  pressable: {
    width: "100%",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  title: {
    color: '#fff',
    padding: 10,
    fontSize: 16,
    textAlign: 'center',
    width: '100%',
  },
  ratingContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#ff5500',
    borderRadius: 4,
    padding: 5,
    zIndex: 1,
  },
  rating: {
    color: '#fff',
    fontWeight: 'bold',
  },
})