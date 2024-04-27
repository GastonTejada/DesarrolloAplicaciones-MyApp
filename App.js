import { StyleSheet, View } from "react-native"
import Home from "./src/screens/Home"
import { colors } from "./src/constants/colors"
import Header from "./src/components/Header"
import { useState } from "react"
import ItemListCategory from "./src/screens/ItemListCategory"
import ItemDetail from "./src/screens/ItemDetail"
import { useFonts } from "expo-font"

const App = () => {
  const [fontsLoaded, fontError] = useFonts({
    Josefin : require("./assets/JosefinSans-Regular.ttf"),
    Lobster : require("./assets/LobsterTwo-Regular.ttf"),
    PlayFair: require("./assets/Playfair_9pt-Regular.ttf"),
  })

  const [genreSelected, setGenreSelected]     = useState("")
  const [movieIdSelected, setMovieIdSelected] = useState("")
  
  return (

    <View style={styles.container}>
      <Header title={"Tienda de Peliculas"} style={styles.textContainer}/>      
      {!genreSelected ? (
        <Home setGenreSelected={setGenreSelected} />
        ) : (
        !movieIdSelected ?        
          <ItemListCategory
          genreSelected={genreSelected}
          setGenreSelected ={setGenreSelected}
          setMovieIdSelected={setMovieIdSelected}
          />
          :
          <ItemDetail 
            idSelected={movieIdSelected}
            setMovieIdSelected={setMovieIdSelected}
          />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      marginTop: 40,
      flex: 1,
      alignItems: 'center',
      backgroundColor: colors.dark
      ,      
    },
    textContainer: {
      color: colors.white,
      fontSize: 44
    }
  })

export default App