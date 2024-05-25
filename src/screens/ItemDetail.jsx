
import { Image, StyleSheet, Text, View, ImageBackground, Pressable} from "react-native"
import React  from "react"
import { colors } from '../constants/colors'
import { FontAwesome } from '@expo/vector-icons';
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
                  <Pressable style={ styles.goBack} onPress={() => navigation.goBack()}>      
                    <FontAwesome name="arrow-circle-left" size={36} color="red" />
                  </Pressable>      
                  <View style={ styles.container} >
                      <View style={ styles.containerImage} >    
                         <View style={styles.ratingContainer}>
                           <Text style={styles.rating}>{movie.rating}</Text>
                         </View>                      
                          <Image
                            source={{ uri: movie.image }}
                            style={styles.image}                          
                            resizeMode="contain"
                          />
                          <View style={styles.yearContainer}>
                            <Text style={styles.textYear}>Year: {movie.year}</Text>    
                          </View>
                      </View>    
                      <View style={styles.textContainer}>
                        <Text style={styles.textTitle}>{movie.title}</Text>
                        <Text style={styles.text} numberOfLines={5} ellipsizeMode='tail'>Description: {movie.description}</Text>
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
    width: '30%',
    paddingVertical: 5,
    paddingHorizontal: 20,    
    borderRadius: 5,
    marginBottom: 5,    
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
  ratingContainer: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: '#ff5500',
    borderRadius: 4,
    padding: 5,
    zIndex: 1,
  },
  rating: {
    color: '#fff',
    fontWeight: 'bold',
  },
  image: {
    width: '90%',
    height: 250,
    borderRadius: 8
  },
  yearContainer: {
    position: 'absolute',
    top: 230,
    left: 10,
    backgroundColor: '#ff5500',
    borderRadius: 4,
    padding: 5,
    zIndex: 1,
  },
  textYear: {
    color: '#fff',
    fontWeight: 'bold',
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
    marginHorizontal: 10,
    width: '95%'
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