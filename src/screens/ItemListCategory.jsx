import { FlatList, StyleSheet, View, ImageBackground } from "react-native"
import movies from "../data/movies.json"
import MovieItem from "../components/MovieItem"
import Search from "../components/Search"
import { useState, useEffect } from "react"

const ItemListCategory = ({genreSelected = "", setGenreSelected = ()=> {},setMovieIdSelected = () => {}}) => {

  const [keyWord, setKeyword] = useState("")
  const [moviesFiltered, setMoviesFiltered] = useState([])
  const [error, setError] = useState("")

  useEffect(()=> {
    
    const moviesFilter = movies.filter(element =>
       element.title.toLowerCase().includes(keyWord.toLowerCase()) &&
       element.genre.includes(genreSelected)
      );
    
    setMoviesFiltered(moviesFilter)
    setError("")
  }, [keyWord, genreSelected])

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../images/Metallic-texture.jpg')}
      style={styles.background} >
        <View style={styles.flatListContainer}>
          <Search error = {error} onSearch={setKeyword} goBack={()=> setGenreSelected("")}/>
          <FlatList
            data = {moviesFiltered}
            renderItem = {({item})=> <MovieItem movie={item} setMovieIdSelected= {setMovieIdSelected}/>}
            keyExtractor = {(producto) => producto.id}            
          />
        </View>
      </ImageBackground>
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