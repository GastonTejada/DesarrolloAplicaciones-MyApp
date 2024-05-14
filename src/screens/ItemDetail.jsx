import { Button, Image, StyleSheet, Text, View, ImageBackground, Pressable} from "react-native"
import React, { useEffect, useState } from "react"
import MoviesJson from "../data/movies.json"
import { colors } from '../constants/colors'
import { Entypo } from '@expo/vector-icons';
import Counter from "../components/Counter"

const ItemDetail = ({ route, navigation }) => {

  const [movie, setMovie] = useState(null)

  const {movieId: idSelected} = route.params
    
  useEffect(() => {
    const movieSelected = MoviesJson.find(
      (movie) => movie.id === idSelected
    )
    setMovie(movieSelected)
  }, [idSelected])

  return (
    <View style={ styles.containerPrincipal}>      
        {movie ? (
            <ImageBackground source={require('../images/Metallic-texture.jpg')} style={styles.background} >
                <View style={ styles.container} >                        
                    <Pressable title="Go back" style={ styles.goBack} onPress={() => navigation.goBack()}>                      
                      <Entypo name="back" size={36} color="white" />
                      <Text style={styles.goBackText}>Go Back</Text>
                    </Pressable>
                    <View style={ styles.containerImage} >    
                        <Image
                          source={{ uri: movie.image }}
                          style={styles.image}                          
                          resizeMode="contain"
                        />    
                    </View>    
                    <View style={styles.textContainer}>
                      <Text style={styles.textTitle}>{movie.title}</Text>
                      <Text style={styles.text}>{movie.description}</Text>
                      <Text></Text>
                      <Text style={styles.text}>Directors : {movie.director}</Text>
                      <Text></Text>
                      <Text style={styles.price}>Price : $ {movie.price}</Text>                      
                    </View>
                    {/* <Counter style={styles.counter}></Counter> */}
                    {/* <View style={styles.textContainer}>
                      <Button title="Add cart"></Button>
                    </View>   */}
                </View>
              </ImageBackground>          
      ) : null}
  </View>
  )
}

export default ItemDetail



const styles = StyleSheet.create({
  containerPrincipal: {
    flex: 1,
    width: '100%',
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
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: "cover", 
    justifyContent: 'center'
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
    color: colors.lightgray,
    fontSize: 30,
    fontFamily: 'PlayFair'
  }
})