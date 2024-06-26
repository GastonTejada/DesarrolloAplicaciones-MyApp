import { Pressable, StyleSheet, Text, Button, View } from "react-native";
import React, { useEffect }  from "react";
import { colors } from "../constants/colors";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "../features/Counter/counterSlice";
import { addCartItem } from "../features/Cart/cartSlice"
import Toast from 'toastify-react-native';

const Counter = ({ movie }) => {
    
    const count  = useSelector(state => state.counter.value)
    const dispatch = useDispatch()
        
    useEffect(() => {
        dispatch(reset());
    }, [dispatch]);

    const showToasts = () => { 
        Toast.success('Successfully added to cart')
     }                   

    const handleAddCart = () => {
            dispatch(addCartItem({...movie, quantity: count}));
            showToasts()           
      }

    return (
        <View style={styles.container}>
            <View style={styles.buttonsContainer}>
                <Pressable
                    style={styles.button}
                    onPress={()=> dispatch(decrement())}
                >
                    <Text style={styles.buttonText}>-</Text>
                </Pressable>
                <Text style={styles.span}>{count}</Text>
                <Pressable
                    style={styles.button}
                    onPress={()=> dispatch(increment())}
                >
                    <Text style={styles.buttonText}>+</Text>
                </Pressable>
                <View style={styles.buttonCart}>                      
                      <Button title="Add cart" onPress={handleAddCart}></Button>                      
                </View>
            </View>
        </View>
    );
};

export default Counter;

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        backgroundColor: colors.transparent,
        padding: 15,
    },
    buttonsContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
    },
    button: {
        padding: 10,
        backgroundColor: colors.red,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 50,
        width: "10%",
        height: "80%",        
    },
    span: {
        backgroundColor: colors.white,
        width: "10%",
        padding: 10,
        textAlign: "center",
        fontSize: 18,
        color: colors.black,
    },
    buttonText: {
        fontSize: 22,        
        color: colors.white, 
        justifyContent: 'center',
        marginTop: -9,
        marginLeft: 4
    },
    buttonCart:{
        width: "50%",
    },
});
