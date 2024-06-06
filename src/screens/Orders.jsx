import { FlatList, StyleSheet, Text, View, ImageBackground, Image} from 'react-native'
import React, {useState, useEffect} from 'react'
import { colors } from '../constants/colors'
import OrderItem from '../components/OrderItem'
import { useGetOrdersQuery } from '../services/shopService'
import { useSelector } from 'react-redux'

const OrderScreen = () => {

  const {localId} = useSelector(state => state.auth.value)
  const {data: orders, isSuccess} = useGetOrdersQuery(localId)
  const [ordersFiltered, setOrdersFiltered] = useState([])
  const [isOrdersEmpty, setIsOrdersEmpty] = useState(true);

  useEffect(()=> {
    if (isSuccess) {
      const responseTransformed = Object.values(orders)      
      const ordersFiltered = responseTransformed.filter(order => order.user === localId)
      setOrdersFiltered(ordersFiltered)
    }
  }, [orders, isSuccess, localId])

  useEffect(() => {
    setIsOrdersEmpty(ordersFiltered.length === 0);
  }, [ordersFiltered]);  

  return (
    <ImageBackground source={require('../images/Metallic-texture.jpg')} style={styles.background} >
        {isOrdersEmpty ? (  
                <View style={styles.card}>
                <Image 
                    resizeMode='cover'                        
                    source={require('../images/NoOrder.png')} 
                    style = {styles.image}                        
                />                                     
                <Text style={styles.emptyText}>Without orders for the user</Text>
            </View>                
        ) : (  
            <View>        
              <FlatList
                  data={ordersFiltered}
                  keyExtractor={orderItem => orderItem.index}
                  renderItem={({item}) => {
                      return (
                          <OrderItem order={item} />
                      )
                  }}
              />
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
})