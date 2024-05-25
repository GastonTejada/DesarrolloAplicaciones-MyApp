import { Image, StyleSheet, View, ImageBackground, Platform } from "react-native";
import React from "react";
import AddButton from "../components/AddButton";
import { useDispatch, useSelector } from "react-redux";
import { useGetProfileImageQuery } from "../services/shopService";
import { clearUser } from "../features/User/userSlice"
import { truncateSessionsTable } from "../persistence"

const MyProfile = ({navigation}) => {
    
    const dispatch = useDispatch()

    const {imageCamera, localId} = useSelector(state => state.auth.value)
    const {data: imageFromBase} = useGetProfileImageQuery(localId)

    const launchCamera = async () => {
        navigation.navigate('Image selector')
    };

    const launchLocation = async () => {
        navigation.navigate('List Address')
    }

    const signOut = async () => {
        try {
            if (Platform.OS !== 'web') 
                {   await truncateSessionsTable()
                    dispatch(clearUser())
                }
        } catch (error) {
            Alert.alert('Error','There was a connection error with the DB, try again later');            
        }
    }

    return (
        <ImageBackground source={require('../images/Metallic-texture.jpg')}
        style={styles.background} >
            <View style={styles.container}>

                {imageFromBase || imageCamera  ? (
                    <Image
                        source={{uri: imageFromBase?.image || imageCamera}}
                        style={styles.image}
                        resizeMode="cover"
                    />
                ) : (
                    <Image
                        source={require('../images/defaultProfile.png')}
                        style={styles.image}
                        resizeMode="cover"
                    />
                )}
                <AddButton
                        onPress={launchCamera}
                        title={
                            imageFromBase || imageCamera
                                ? "Modify profile picture"
                                : "Add profile picture"
                        }
                    />
                <AddButton onPress={launchLocation} title="My address" />
                <AddButton onPress={signOut} title="Sign out" />

            </View>
        </ImageBackground>
    );
};

export default MyProfile;

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        width: '100%'
      },
    container: {
        padding: 10,
        gap: 15,
        alignItems: "center",
        justifyContent: "flex-start",
        top: -80
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
});
