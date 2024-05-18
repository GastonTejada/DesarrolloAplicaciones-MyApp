import { Pressable, StyleSheet, Text, View, ImageBackground } from "react-native";
import { Entypo } from "@expo/vector-icons";
import React from "react";
import { colors } from "../constants/colors";

const AddressItem = ({ location, navigation }) => {

    const onChangeLocation = () => {
        navigation.navigate('Location Selector')
    }

    return (
        <ImageBackground source={require('../images/Metallic-texture.jpg')}
        style={styles.background} >            
            <View style={styles.card} onPress={() => {}}>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {location.address}
                    </Text>
                </View>
                <Pressable onPress={onChangeLocation}>
                    <Entypo name="location" size={30} color="red">
                        <Text style={styles.text2}>Change</Text>
                    </Entypo>
                </Pressable>
            </View>
        </ImageBackground>    
    );
};

export default AddressItem;

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        width: '100%'
    },
    card: {
        height: 100,
        backgroundColor: colors.dark,
        padding: 10,
        margin: 10,
        borderWidth: 2,
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    textContainer: {
        width: "70%",
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
        color: colors.platinum,
    },
});