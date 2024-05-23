import { StyleSheet, Text, View, Image, Pressable} from "react-native";
import React, { useState } from "react";
import { colors } from "../constants/colors";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useSelector, useDispatch } from "react-redux"
import { removeCartItem } from '../features/Cart/cartSlice';

const CartItem = ({ cartItem }) => {

    const {items: CartData, total} = useSelector(state => state.cart.value)
    const dispatch = useDispatch()

    const [cartItems, setCartItems] = useState([]);

    const handleDelete = (id) => {
        try {                        
            dispatch(removeCartItem({ id }));            
        } catch (error) {
            Alert.alert('Error', 'Failed to delete Item Cart');
        }
    };        
    
    return (
        <View style={styles.card} onPress={() => {}}>
            <Image 
                resizeMode='cover'
                style = {styles.image}
                source={{uri: cartItem.thumbnail}}
            /> 
            <View style={styles.textContainer}>                    
                <Text style={styles.text}>{cartItem.title} ({cartItem.quantity})</Text>
                <Text style={styles.text2}>{cartItem.brand}</Text>                
                <Text style={styles.text2}>Unit price: $ {cartItem.price}</Text>
            </View>                            
            <Pressable onPress={() => handleDelete(cartItem.id)} style={styles.trash}>
                <MaterialCommunityIcons name="delete-sweep" size={28} color={ colors.red } />
            </Pressable>            
        </View>            
    );
};

export default CartItem;

const styles = StyleSheet.create({
    card: {
        height: 100,
        backgroundColor: colors.dark,
        padding: 10,
        margin: 7,
        borderWidth: 2,
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    image: {
      width: '20%',
      height: 80,
      borderRadius: 8,
      marginRight:5
    },
    textContainer: {
        width: "65%",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
    },
    text: {
        fontFamily: "Josefin",
        fontSize: 19,
        color: colors.white,      
    },
    text2: {
        fontFamily: "Josefin",
        fontSize: 16,
        color: colors.white,
    },
    trash:{
        justifyContent:"flex-end",
        alignItems: "flex-end",
        marginTop: 50,
        width: 20,
    },
});
