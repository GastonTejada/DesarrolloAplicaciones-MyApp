import { StyleSheet, Text, View, TouchableOpacity, Modal, Button, FlatList, Image } from "react-native";
import React, { useState } from "react";
import { colors } from "../constants/colors";
import { Foundation } from '@expo/vector-icons';

const OrderItem = ({ order }) => {

    const [isModalVisible, setModalVisible] = useState(false);

    const total = order.items.reduce(
        (acc, currentItem) => (acc += currentItem.price * currentItem.quantity),
        0
    );

    const totalItem = order.items.reduce(
        (acc, currentItem) => (acc += currentItem.quantity),
        0
    );

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };
    

    const renderItem = ({ item }) => (
        <View style={styles.itemContainer}>
            <Image source={{ uri: item.thumbnail }} style={styles.itemImage} />
            <Text style={styles.itemText}>{item.title} ({item.quantity})</Text>
            <View style={styles.separator} />
        </View>
    );

    return (
        <View>
            <TouchableOpacity style={styles.card} onPress={toggleModal}>                
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>
                            {new Date(order?.createdAt || null).toLocaleString()}
                        </Text>
                        <Text style={styles.text3}>Quantity: {totalItem}</Text>                        
                        <Text style={styles.text2}>$ {total}</Text>
                    </View>
                    <Foundation name="page-search" size={30} color="white" />

            </TouchableOpacity>    


            <Modal
                animationType="slide"
                transparent={true}
                visible={isModalVisible}
                onRequestClose={toggleModal}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalTitle}>Order Detail</Text>                            
                        <Text style={styles.text}>Date: {new Date(order.createdAt).toLocaleString()}</Text>
                        <Text style={styles.text}>Items: {totalItem}</Text>
                        <Text style={styles.textTotal}>Total: $ {total}</Text>
                        <FlatList
                            data={order.items}
                            renderItem={renderItem}
                            keyExtractor={(item) => item.id}
                        />                
                        <Button title="Close" onPress={toggleModal} style={styles.buttonClose}/>
                    </View>
                </View>
            </Modal>
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
    },textTotal:{
        fontFamily: "Josefin",
        fontSize: 17,
        color: colors.white,
        marginBottom: 20,
    },
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalView: {
        width: 300,
        backgroundColor: colors.dark,
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,        
    },
    modalTitle: {
        fontSize: 22,
        marginBottom: 15,
        textAlign: "center",
        color: colors.orange,
        textDecorationLine: "underline",
    },
    itemContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
        borderBottomColor: colors.platinum,
        borderBottomWidth: 2,
        backgroundColor: colors.black,
    },
    itemImage: {
        width: 50,
        height: 50,
        marginRight: 10,
        marginBottom: 10,
    },
    itemText: {
        fontSize: 16,
        color: colors.white
    },
    buttonClose:{
        marginTop: 20,
    }

});
