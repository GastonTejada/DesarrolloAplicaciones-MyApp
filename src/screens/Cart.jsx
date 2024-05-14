import { FlatList, Pressable, StyleSheet, Text, View, ImageBackground } from 'react-native'
import React from 'react'
import CartData from '../data/cart.json'
import CartItem from '../components/CartItem';
import { colors } from '../constants/colors'

const Cart = () => {

    const total = CartData.reduce((acumulador, currentItem) => acumulador += currentItem.price * currentItem.quantity, 0)

    let total2 = 0
    for (const currentItem of CartData) {
        total2 += currentItem.price * currentItem.quantity
    }

    return (
    <View style={styles.container}>
        <ImageBackground source={require('../images/Metallic-texture.jpg')} style={styles.background} >
            <FlatList
                data={CartData}
                keyExtractor={movie => movie.id}
                renderItem={({item})=> {
                    return (
                        <CartItem
                            cartItem={item}
                        />
                    )
                }}
            />
            <View style={styles.totalContainer}>
                <Text style={styles.textTotal}>Total: $ {total}</Text>
                            
                <Pressable style={styles.pressBuy}>
                    <Text style={styles.textBuy}>
                        Buy
                    </Text>
                </Pressable>
            </View>
        </ImageBackground>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        flex: 1,
        // marginBottom: 20,
    },
    background: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: "cover",
        justifyContent: 'center'
      },
    totalContainer: {
        // flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',        
        backgroundColor: colors.dark,
        width: '95%',
        height: 80,
        borderWidth: 2,
        borderBottomColor: colors.platinum,
        borderEndColor: colors.platinum,
        borderRadius: 15,
        marginLeft: 10,
        marginBottom: 5
    },
    textTotal: {
        color: colors.white,
        fontSize: 22,
        fontFamily: 'Josefin'
    },
    pressBuy:{
        backgroundColor: colors.red,
        width: '80%',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'          
    },
    textBuy:{
        color: colors.white,
        fontSize: 24,
        fontFamily: 'Josefin',
        marginBottom: 10        

    }
})