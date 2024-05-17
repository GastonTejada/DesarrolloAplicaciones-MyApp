import { FlatList, StyleSheet, View, ImageBackground} from 'react-native'
import React from 'react'
import OrderData from '../data/orders.json'
import OrderItem from '../components/OrderItem'

const OrderScreen = () => {
  return (
    <ImageBackground source={require('../images/Metallic-texture.jpg')} style={styles.background} >
        <View>        
          <FlatList
              data={OrderData}
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
    // justifyContent: 'center'
  },
})