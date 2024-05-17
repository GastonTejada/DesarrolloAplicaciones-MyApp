import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../constants/colors";
import { Foundation } from '@expo/vector-icons';

const OrderItem = ({ order }) => {
    const total = order.items.reduce(
        (acc, currentItem) => (acc += currentItem.price * currentItem.quantity),
        0
    );

    console.log(order)

    return (
        <View style={styles.card} onPress={() => {}}>
            <View style={styles.textContainer}>
                <Text style={styles.text3}>ID: {order.id}</Text>
                <Text style={styles.text}>
                    {new Date(order.createdAt).toLocaleString()}
                </Text>
                <Text style={styles.text2}>$ {total}</Text>
            </View>
            <Foundation name="page-search" size={30} color="white" />
        </View>
    );
};

export default OrderItem;

const styles = StyleSheet.create({
    card: {
        height: 100,
        backgroundColor: colors.dark,
        padding: 10,
        margin: 10,
        borderWidth: 2,
        borderRadius: 10,
        borderBottomColor: colors.gray,
        borderRightColor: colors.gray,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    textContainer: {
        width: "60%",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
    },
    text: {
        fontFamily: "Josefin",
        fontSize: 17,
        color: colors.white,
    },
    text2: {
        fontFamily: "Josefin",
        fontSize: 19,
        color: colors.white,
    },text3: {
        fontFamily: "Josefin",
        fontSize: 20,
        color: colors.red,
    },
});
