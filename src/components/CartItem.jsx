import { StyleSheet, Text, View, Image} from "react-native";
import React from "react";
import { colors } from "../constants/colors";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const CartItem = ({ cartItem }) => {
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
                <Text style={styles.text2}>${cartItem.price}</Text>
            </View>            
            <MaterialCommunityIcons name="delete-sweep" size={28} color={ colors.red } />
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
        fontSize: 14,
        color: colors.white,
    },
});
