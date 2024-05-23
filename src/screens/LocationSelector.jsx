import { StyleSheet, Text, View, ImageBackground } from "react-native"
import React, { useEffect, useState } from "react"
import * as Location from "expo-location"
import AddButton from "../components/AddButton"
import MapPreview from "../components/MapPreview"
import { googleMapsApiKey } from "../databases/googleMaps"
import { colors } from "../constants/colors"
import { usePostLocationMutation } from "../services/shopService"
import { useSelector } from "react-redux"

const LocationSelector = ({ navigation }) => {
    const [location, setLocation] = useState({ latitude: "", longitude: "" })
    const [address, setAddress] = useState("")
    const [error, setError] = useState("")
    const [triggerPostUserLocation, result] = usePostLocationMutation()
    const {localId} = useSelector(state => state.auth.value)

    const onConfirmAddress = () => {

        const date = new Date()

        triggerPostUserLocation({
            location: {
                latitude: location.latitude,
                longitude: location.longitude,
                address: address,
                updatedAt: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
            },
            localId: localId
        })
    }
    
    useEffect(() => {
        (async () => {
            try {
                let { status } = await Location.requestForegroundPermissionsAsync()
    
                if (status === "granted") {
                    let location = await Location.getCurrentPositionAsync({})                    
                    setLocation({
                        latitude: location.coords.latitude,
                        longitude: location.coords.longitude
                    })
                }
            } catch (error) {           
                setError(error.message)     
            }
        })()
    }, [])


    useEffect(() => {
        (async () => {
            try {
                if (location.latitude) {
                    const url_reverse_geocode = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.latitude},${location.longitude}&key=${googleMapsApiKey}`;
                    const response = await fetch(url_reverse_geocode);
                    const data = await response.json();
                    console.dir(data);
                    setAddress(data.results[0].formatted_address);
                }
            } catch (error) {
                setError(error.message);
            }
        })();
    }, [location])

    return (
        <ImageBackground source={require('../images/Metallic-texture.jpg')}
        style={styles.background} >           
            <View style={styles.container}>
                <Text style={styles.text}>My Address</Text>
                {/* Flatlist con las directions */}
                {location ? (
                    <>
                        <Text style={styles.text}>
                            Lat: {location.latitude}, long: {location.longitude}.
                        </Text>
                        <MapPreview location={location} />
                        <Text style={styles.address}>
                            Formatted address: {address}
                        </Text>
                        <AddButton
                            onPress={onConfirmAddress}
                            title="Confirm address"
                        />
                    </>
                ) : (
                    <>
                        <View style={styles.noLocationContainer}>
                            <Text>{error}</Text>
                        </View>
                    </>
                )}
            </View>
        </ImageBackground>     
    )
}

export default LocationSelector

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
    },
    background: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        width: '100%'
    },
    text: {
        paddingTop: 20,
        fontFamily: "Josefin",
        fontSize: 22,
        color: colors.white,
    },
    noLocationContainer: {
        width: 200,
        height: 200,
        borderWidth: 2,
        borderColor: colors.white,
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    address: {
        padding: 10,
        fontSize: 18,
        color: colors.white,
    },
})
