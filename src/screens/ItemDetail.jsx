import { Image, StyleSheet, Text, View, ImageBackground, Pressable} from "react-native"
import React, { useEffect, useState } from "react"
import { colors } from '../constants/colors'
import { Entypo } from '@expo/vector-icons';
import Counter from "../components/Counter"
import { useGetMoviesByIdQuery } from "../services/shopService"
import Loader from "../components/Loader"

const ItemDetail = ({ route, navigation }) => {

  const {movieId: idSelected} = route.params

  const {data: movie, error, isLoading} = useGetMoviesByIdQuery(idSelected)

  return (

    <View style={ styles.containerPrincipal}>
          {movie ? (
              <ImageBackground source={require('../images/Metallic-texture.jpg')} style={styles.background} >
                  <Pressable title="Go back" style={ styles.goBack} onPress={() => navigation.goBack()}>                      
                        <Entypo name="back" size={36} color="white" />
                        <Text style={styles.goBackText}>Go Back</Text>
                  </Pressable>
                  <View style={ styles.container} >
                      <View style={ styles.containerImage} >    
                          <Image
                            source={{ uri: movie.image }}
                            style={styles.image}                          
                            resizeMode="contain"
                          />    
                      </View>    
                      <View style={styles.textContainer}>
                        <Text style={styles.textTitle}>{movie.title}</Text>
                        <Text style={styles.text}>Ranking: {movie.id}    Rating: {movie.rating}    Year: {movie.year}</Text>
                        <Text style={styles.text}>Trailer: {movie.trailer}</Text>
                        <Text></Text>
                        <Text style={styles.price}>Price : $ {movie.price}</Text>                      
                      </View>
                  </View>
                  <Counter style={styles.counter} movie={movie} />                                 
                </ImageBackground>          
            ) : <Loader />}             
  </View>
  )
}

export default ItemDetail
const styles = StyleSheet.create({
  containerPrincipal: {
    flex: 1,
    width: '100%',
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: "cover", 
    justifyContent: 'center'
  },
  goBack: {
    flexDirection: "row",
    alignItems: "center",
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 20,    
    backgroundColor: colors.dark,
    borderRadius: 5,
    marginBottom: 10,    
  },  
  goBackText: {
    color: colors.white,
    fontSize: 25,
    marginRight: 10,    
    marginLeft: 80
  },
  container: {    
    height: '80%',
  },
  containerImage: {
    backgroundColor: colors.dark,
    width: '95%',
    height: 280,
    borderWidth: 2,
    borderBottomColor: colors.platinum,
    borderEndColor: colors.platinum,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,    
    marginLeft: 10
  },
  image: {
    width: '90%',
    height: 250,
    borderRadius: 8
  },
  textContainer: {
    flexDirection: "column",
  },
  textTitle: {    
    color: colors.lightgray,  
    fontSize: 28,
    textDecorationLine: 'underline',
    fontFamily: 'LoraBold',
    marginLeft: 10,
  },
  text: {    
    color: colors.lightgray,  
    fontSize: 18,
    fontFamily: 'Josefin',
    marginHorizontal: 10
  },  
  price: {
    justifyContent: "center",
    textAlign: 'center',
    width: '100%',
    color: colors.gray4 ,
    fontSize: 35,
    fontFamily: 'PlayFair',
    marginBottom: 5
  }
})