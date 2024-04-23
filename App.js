import { StyleSheet, View } from "react-native"
import Home from "./src/screens/home"
import { colors } from "./src/constants/colors"
import Header from "./src/components/header"

const App = () => {
  return (
    <View style={styles.container}>
      <Header title={"Tienda de Peliculas"} style={styles.textContainer}/>
      <Home />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      marginTop: 40,
      flex: 1,
      alignItems: "center",
      backgroundColor: colors.dark
      ,      
    },
    textContainer: {
      color: colors.white,
      fontSize: 44,
    }
  })

export default App