import { FlatList, StyleSheet, View, ImageBackground} from 'react-native'
import React, {useState, useEffect} from 'react'
import OrderItem from '../components/OrderItem'
import { useGetOrdersQuery } from '../services/shopService'
import { useSelector } from 'react-redux'

const OrderScreen = () => {

  const {localId} = useSelector(state => state.auth.value)
  const {data: orders, isSuccess} = useGetOrdersQuery(localId)
  const [ordersFiltered, setOrdersFiltered] = useState()

  useEffect(()=> {
    if (isSuccess) {
      const responseTransformed = Object.values(orders)      
      const ordersFiltered = responseTransformed.filter(order => order.user === localId)
      setOrdersFiltered(ordersFiltered)
    }
  }, [orders, isSuccess, localId])

  return (
    <ImageBackground source={require('../images/Metallic-texture.jpg')} style={styles.background} >
        <View>        
          <FlatList
              data={ordersFiltered}
              keyExtractor={orderItem => orderItem.id}
              renderItem={({item}) => {
                  return (
                      <OrderItem order={item} />
                  )
              }}
          />
        </View>
    </ImageBackground>    
  )
}

export default OrderScreen

const styles = StyleSheet.create({
  background: {    
    flex: 1,
    resizeMode: 'cover',    
    width: '100%',
  },
})