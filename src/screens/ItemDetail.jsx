import { Button, Image, StyleSheet, Text, View, ImageBackground} from "react-native"
import React, { useEffect, useState } from "react"
import MoviesJson from "../data/movies.json"
import { colors } from '../constants/colors'

const ItemDetail = ({ idSelected, setMovietSelected }) => {

  const [movie, setMovie] = useState(null)
  const [orientation, setOrientation] = useState("portrait")
  
  useEffect(() => {
    const movieSelected = MoviesJson.find(
      (movie) => movie.id === idSelected
    )
    setMovie(movieSelected)
  }, [idSelected])

  return (
    <View>
      {/* <Button onPress={() => setMovietSelected("")} title="Go back" /> */}
      <Pressable title="Go back" onPress={() => setMovietSelected("")}>        
        <MaterialCommunityIcons name="eraser-variant" size={26} color="white" />
      </Pressable>
      {movie ? (
        <View style={ styles.containerPrincipal} >    
            <ImageBackground source={require('../images/Metallic-texture.jpg')}
            style={styles.background} >
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
                      <Text style={styles.text}>{movie.description}</Text>
                      <Text></Text>
                      <Text style={styles.text}>Directors : {movie.director}</Text>
                      <Text></Text>
                      <Text style={styles.text}>Writers : {movie.writers}</Text>
                      <Text></Text>
                      <Text style={styles.price}>Price : $ {movie.price}</Text>                      
                    </View>
                    <Button title="Add cart"></Button>
                </View>
              </ImageBackground>
          </View>
      ) : null}
    </View>
  )
}

export default ItemDetail

const styles = StyleSheet.create({
  containerPrincipal: {
    flex: 1,
    width: '100%',
    height: '100%'
  },
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: 10
  },
  containerImage: {
    backgroundColor: colors.dark,
    width: '100%',
    height: 280,
    borderWidth: 2,
    borderBottomColor: colors.platinum,
    borderEndColor: colors.platinum,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15
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
    fontFamily: 'Lobster'
  },
  text: {    
    color: colors.lightgray,  
    fontSize: 15,
    fontFamily: 'Josefin'
  },  
  price: {
    justifyContent: "center",
    textAlign: 'right',
    width: '100%',
    color: colors.lightgray,
    fontSize: 30,
    fontFamily: 'PlayFair'
  }
})