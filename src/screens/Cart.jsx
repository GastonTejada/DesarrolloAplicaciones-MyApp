import { FlatList, Pressable, StyleSheet, Text, View, ImageBackground, Alert, Image } from 'react-native'
import React, { useState, useEffect}  from 'react'
import CartItem from '../components/CartItem';
import { colors } from '../constants/colors'
import { useSelector } from "react-redux"
import { usePostOrderMutation } from "../services/shopService"
import { useDispatch } from 'react-redux';
import { removeCart } from '../features/Cart/cartSlice';

const Cart = () => {

    const {localId} = useSelector(state => state.auth.value)
    const {items: CartData, total} = useSelector(state => state.cart.value)
    const dispatch = useDispatch()
    const [isCartEmpty, setIsCartEmpty] = useState(true);

    const [triggerPostOrder, result] = usePostOrderMutation()        

    useEffect(() => {
        setIsCartEmpty(CartData.length === 0);
    }, [CartData]);    

    
    const onConfirmOrder = () => {
        const currentDate = new Date().toISOString();
        triggerPostOrder({items: CartData, user: localId, total, createdAt: currentDate })
        Alert.alert('Successful purchase', 'Your order has been successfully processed.');
        dispatch(removeCart());
        setIsCartEmpty(true);
    }

    const onDeleteCart = async () => {
        try {                        
            dispatch(removeCart());
            setIsCartEmpty(true);            
            Alert.alert('Successful delete', 'Orders deleted successfully');
        } catch (error) {
            Alert.alert('Error', 'Failed to delete Cart');
        }
    };

    return (
    <View style={styles.container}>
        <ImageBackground source={require('../images/Metallic-texture.jpg')} style={styles.background} >
            {isCartEmpty ? (
                <View style={styles.card}>
                    <Image 
                        resizeMode='cover'                        
                        source={require('../images/carritoVacio.png')} 
                        style = {styles.image}                        
                    />                                     
                    <Text style={styles.emptyText}>Your cart is empty</Text>
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
                    <View style={styles.buttongroup}>                                
                        <Pressable style={styles.pressDelete} onPress={onDeleteCart}>
                            <Text style={styles.textBuy}>
                                Delete Cart
                            </Text>
                        </Pressable>                       
                        <Pressable style={styles.pressBuy} onPress={onConfirmOrder}>
                            <Text style={styles.textBuy}>
                                Finalize Purchase
                            </Text>
                        </Pressable>
                    </View>    
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
        backgroundColor: colors.dark,
        bottom: 0,
        left: 0,
        right: 0,        
        justifyContent: 'center',
        alignItems: 'center',                
        width: '95%',
        height: 95,
        borderWidth: 2,
        borderStartColor: colors.platinum,        
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
    buttongroup:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    pressBuy:{
        backgroundColor: colors.darkblue,
        width: '49%',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },
    pressDelete:{
        backgroundColor: colors.red,        
        width: '49%',
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