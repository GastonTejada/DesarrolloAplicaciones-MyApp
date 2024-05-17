import { FlatList, Pressable, StyleSheet, Text, View, ImageBackground, Alert, Image } from 'react-native'
import React, { useState, useEffect}  from 'react'
import CartItem from '../components/CartItem';
import { colors } from '../constants/colors'
import { useSelector } from "react-redux"
import { usePostOrderMutation } from "../services/shopService"
import { useDispatch } from 'react-redux';
import { removeCartItem } from '../features/Cart/cartSlice';

const Cart = () => {

    const {items: CartData, total} = useSelector(state => state.cart.value)
    const dispatch = useDispatch()
    const [isCartEmpty, setIsCartEmpty] = useState(true);

    const [triggerPostOrder, result] = usePostOrderMutation()    

    useEffect(() => {
        setIsCartEmpty(CartData.length === 0);
    }, [CartData]);    

    const onConfirmOrder = async () => {
        try {
            await triggerPostOrder({ items: CartData, user: 'Gaston', total }).unwrap();
            Alert.alert('Compra exitosa', 'Tu orden ha sido procesada exitosamente.');
            dispatch(removeCartItem());
            setIsCartEmpty(true);
        } catch (error) {
            Alert.alert('Error', 'Hubo un problema al procesar tu orden. Inténtalo nuevamente.');
        }
    };

    return (
    <View style={styles.container}>
        <ImageBackground source={require('../images/Metallic-texture.jpg')} style={styles.background} >
            {isCartEmpty ? (
                <View style={styles.card}>
                    <Image 
                        resizeMode='cover'                        
                        source={require('../images/carrito_vacio_nuevo.jpg')} 
                        style = {styles.image}                        
                    />                                     
                    <Text style={styles.emptyText}>Tu carrito está vacío</Text>
                </View>                
            ) : (
                
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
                    Style={styles.flatListContent}
                />
            )}
            {!isCartEmpty && (
                <View style={styles.totalcontainer}>
                    <Text style={styles.textTotal}>Total: $ {total}</Text>
                                
                    <Pressable style={styles.pressBuy} onPress={onConfirmOrder}>
                        <Text style={styles.textBuy}>
                            Buy
                        </Text>
                    </Pressable>
                </View>
            )}    

        </ImageBackground>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        flex: 1,        
    },
    background: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: "cover",
        justifyContent: 'center'
      },
    flatListContent: {
        paddingBottom: 100,
    },
    totalContainer: {        
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,        
        justifyContent: 'center',
        alignItems: 'center',        
        backgroundColor: colors.dark,
        width: '95%',
        height: 95,
        borderWidth: 2,
        borderStartColor: colors.platinum,
        // borderBottomColor: colors.platinum,
        borderRadius: 15,
        marginLeft: 10,
        marginBottom: 5,       
    },
    textTotal: {
        color: colors.white,
        fontSize: 22,
        fontFamily: 'Josefin',
        textAlign: 'center',        
    },
    pressBuy:{
        backgroundColor: colors.red,
        width: '100%',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },
    textBuy:{
        color: colors.white,
        fontSize: 24,
        fontFamily: 'Josefin',
        marginBottom: 10        
    },
    card: {
        height: '70%',
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
        marginBottom: 40
      },
})