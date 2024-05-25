import { StyleSheet, Platform, SafeAreaView, StatusBar } from "react-native"
import { colors } from "./src/constants/colors"
import { useFonts } from "expo-font"
import Navigator from "./src/navigation/Navigator"
import { Provider } from "react-redux"
import store  from "./src/store/index"
import { initSQLiteDB } from "./src/persistence"
import ToastManager, { Toast } from 'toastify-react-native'

(async ()=> {
  try {
      if (Platform.OS !== 'web') {
          const response = await initSQLiteDB()
      }
  } catch (error) {
  }
})()

const App = () => {
  const [fontsLoaded, fontError] = useFonts({
    Josefin : require("./assets/JosefinSans-Regular.ttf"),
    Lobster : require("./assets/LobsterTwo-Regular.ttf"),
    PlayFair: require("./assets/Playfair_9pt-Regular.ttf"),
    LoraBold: require("./assets/Lora-Bold.ttf"),
  })

  if (!fontsLoaded || fontError) {
    return null
  }

  return (
    <SafeAreaView style={styles.container}>
      <ToastManager />
      <Provider store={store}>
        <Navigator/>
      </Provider>        
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
      marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      flex: 1,    
      backgroundColor: colors.dark
    },
    textContainer: {
      color: colors.white,
      fontSize: 44
    }
  })

export default App