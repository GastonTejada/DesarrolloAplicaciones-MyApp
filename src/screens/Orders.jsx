import { FlatList, StyleSheet, Text, View, ImageBackground, Image, ActivityIndicator} from 'react-native'
import React, {useState, useEffect} from 'react'
import { colors } from '../constants/colors'
import OrderItem from '../components/OrderItem'
import { useGetOrdersQuery } from '../services/shopService'
import { useSelector } from 'react-redux'
import ProgressBar from '../components/ProgressBar'

const OrderScreen = () => {

  const {localId}                           = useSelector(state => state.auth.value)
  const {data: orders, isSuccess}           = useGetOrdersQuery(localId)
  const [ordersFiltered, setOrdersFiltered] = useState([])
  const [isOrdersEmpty, setIsOrdersEmpty]   = useState(true);
  const [isLoading, setIsLoading]           = useState(true)
  const [progress, setProgress]             = useState(0)

  useEffect(()=> {
    if (isSuccess) {
      const responseTransformed = Object.values(orders)      
      const ordersFiltered = responseTransformed.filter(order => order.user === localId)
      setOrdersFiltered(ordersFiltered)
      setIsOrdersEmpty(ordersFiltered.length === 0)
      setIsLoading(false)
    } else {      
      const timer = setInterval(() => {
        setProgress(oldProgress => {
          if (oldProgress >= 1) {
            clearInterval(timer)
            return 1
          }
          return oldProgress + 0.1
        })
      }, 500)
    }
  }, [orders, isSuccess, localId])

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ProgressBar progress={progress}/>
      </View>
    )
  }

  return (
    <ImageBackground source={require('../images/Metallic-texture.jpg')} style={styles.background} >
        {!isOrdersEmpty ? (  
            <View>        
              <FlatList
                  data={ordersFiltered}                  
                  keyExtractor={(orderItem, index) => String(index)}
                  renderItem={({item}) => {
                      return (
                          <OrderItem order={item} />
                      )
                  }}
              />              
            </View>
        ) : (            
            <View style={styles.card}>
                <Image 
                    resizeMode='cover'                        
                    source={require('../images/NoOrder.png')} 
                    style = {styles.image}                        
                />                                     
                <Text style={styles.emptyText}>Without orders for the user</Text>
            </View>                            
        )}  
    </ImageBackground>    
  )
}

export default OrderScreen

const styles = StyleSheet.create({
  background: {    
    flex: 1,
    resizeMode: 'cover',    
    width: '100%',
    justifyContent: 'center'
  },
  card: {
      height: '60%',
      backgroundColor: colors.dark,
      padding: 10,
      margin: 10,
      borderWidth: 2,
      borderRadius: 10,        
      justifyContent: "space-between",
      alignItems: "center",
  },
  image: {
      width: '80%',
      height: 280,
      borderRadius: 8,
      marginTop:20,
      marginRight:5,
      justifyContent: "center",
    },
  emptyText: {
      color: colors.white,
      fontSize: 26,
      fontFamily: 'Josefin',
      marginBottom: 20
    },
    loadingContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }
})