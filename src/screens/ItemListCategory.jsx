import { FlatList, StyleSheet, View, ImageBackground, TouchableOpacity, ScrollView } from "react-native"
import MovieItem from "../components/MovieItem"
import Search from "../components/Search"
import { useState, useEffect, useRef } from "react"
import { useGetMoviesByCategoryQuery } from "../services/shopService"
import Loader from "../components/Loader"
import { FontAwesome } from '@expo/vector-icons'
import { colors } from "../constants/colors"

const ItemListCategory = ({ setGenreSelected = ()=> {},
navigation,
route}) => {

  const [keyWord, setKeyword] = useState("")
  const [moviesFiltered, setMoviesFiltered] = useState([])
  const [error, setError] = useState("")
  const [showArrow, setShowArrow] = useState(false);
  const [hideFirstTwo, setHideFirstTwo] = useState(false);

  const { genre: genreSelected} = route.params

  const {data: moviesFetched, error: errorFromFetch, isLoading} = useGetMoviesByCategoryQuery(genreSelected)

  const scrollViewRef = useRef(null);

  const scrollToTop = () => {
    scrollViewRef.current.scrollTo({ y: 0, animated: true });
  };  

  const handleScroll = (event) => {
    const yOffset = event.nativeEvent.contentOffset.y;
    setShowArrow(yOffset > 200);
    setHideFirstTwo(yOffset > 200);
  };

  useEffect(() => {
    if (!isLoading && moviesFetched) {
      const moviesFilter = keyWord
        ? moviesFetched.filter((element) =>
            element.title.toLowerCase().includes(keyWord.toLowerCase())
          )
        : moviesFetched;
      setMoviesFiltered(moviesFilter);
      setError("");
    }
  }, [keyWord, genreSelected, moviesFetched, isLoading]);


  return (
    <View style={styles.container}>
      {isLoading ? (
        <Loader />
      ) : (
        <ImageBackground source={require('../images/Metallic-texture.jpg')}
        style={styles.background} >          
          <ScrollView
           ref={scrollViewRef}
           contentContainerStyle={styles.scrollViewContent}
           onScroll={handleScroll}
           scrollEventThrottle={16}
           >
            <View style={styles.flatListContainer}>
              <Search error = {error} onSearch={setKeyword} goBack={()=> navigation.goBack()}/>
              <FlatList
                data = {hideFirstTwo ? moviesFiltered.slice(2) : moviesFiltered}
                renderItem = {({item})=> <MovieItem movie={item} navigation={navigation}/>}
                keyExtractor={(item) => item.id}
                numColumns={3}
              />
            </View>
          </ScrollView>

          {showArrow && (
            <TouchableOpacity style={styles.arrow} onPress={scrollToTop}>
              <FontAwesome name="arrow-up" size={24} color="white" />
            </TouchableOpacity>
          )}
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
  scrollViewContent: {
    paddingBottom: 100,
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
  flatListContent: {
    alignItems: 'center',
  },
  arrow: {
    position: 'absolute',
    bottom: 30,
    right: 20,
    backgroundColor: colors.violet,
    padding: 10,
    borderRadius: 30,
  },
})