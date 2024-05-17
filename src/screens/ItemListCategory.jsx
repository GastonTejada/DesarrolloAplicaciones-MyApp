import { FlatList, StyleSheet, View, ImageBackground } from "react-native"
import MovieItem from "../components/MovieItem"
import Search from "../components/Search"
import { useState, useEffect } from "react"
import { useGetMoviesByCategoryQuery } from "../services/shopService"
import Loader from "../components/Loader"

const ItemListCategory = ({ setGenreSelected = ()=> {},
navigation,
route}) => {

  const [keyWord, setKeyword] = useState("")
  const [moviesFiltered, setMoviesFiltered] = useState([])
  const [error, setError] = useState("")

  const { genre: genreSelected} = route.params

  const {data: moviesFetched, error: errorFromFetch, isLoading} = useGetMoviesByCategoryQuery(genreSelected)
  
  useEffect(()=> {
        
    if (!isLoading) {
      const moviesFilter = moviesFetched.filter(element =>
        element.title.toLowerCase().includes(keyWord.toLowerCase()) &&
        element.genre.includes(genreSelected)
      )
    setMoviesFiltered(moviesFilter)
    setError("")
    }  
  }, [keyWord, genreSelected, moviesFetched, isLoading])

  return (
    <View style={styles.container}>
      {isLoading ? (
        <Loader />
      ) : (
        <ImageBackground source={require('../images/Metallic-texture.jpg')}
        style={styles.background} >
          <View style={styles.flatListContainer}>
            <Search error = {error} onSearch={setKeyword} goBack={()=> navigation.goBack()}/>
            <FlatList
              data = {moviesFiltered}
              renderItem = {({item})=> <MovieItem movie={item} navigation={navigation}/>}
              keyExtractor = {(producto) => producto.id}            
            />
          </View>
        </ImageBackground>
      )}  
    </View>            
  )
}

export default ItemListCategory

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%'
  },
  background: {    
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center'
  },
  flatListContainer: {
    width: '100%',    
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  },
})