import { StyleSheet, Text, View, ImageBackground } from "react-native"
import React from "react"
import { useSelector } from "react-redux"
import AddButton from "../components/AddButton"
import { useGetLocationQuery } from "../services/shopService"
import AddressItem from "../components/AddressItem"

const ListAddress = ({ navigation }) => {
    const { localId } = useSelector((state) => state.auth.value)

    const { data: location, isLoading, error } = useGetLocationQuery(localId)

    return location ? (
                
        <ImageBackground source={require('../images/Metallic-texture.jpg')}
        style={styles.background} >
            <AddressItem
                location={location}
                navigation={navigation}
            />
        </ImageBackground>
    ) : (
        <ImageBackground source={require('../images/Metallic-texture.jpg')}
        style={styles.background} >
            <View style={styles.container}>
                <Text style={styles.text}>No location set</Text>
                <AddButton
                    title="Set location"
                    onPress={() => navigation.navigate("Location Selector")}
                />

            </View>
        </ImageBackground>
    )
    
}

export default ListAddress

const styles = StyleSheet.create({
    container: {
        justifyContent: "flex-start",
        alignItems: "center",
    },
    background: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        width: '100%'
    },
    text: {
        paddingVertical: 20,
        fontFamily: "Josefin",
        fontSize: 18,
    },
})
