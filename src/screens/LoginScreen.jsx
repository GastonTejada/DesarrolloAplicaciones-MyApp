import { Pressable, StyleSheet, Text, View, ImageBackground, Platform } from "react-native"
import React, { useState, useEffect } from "react"
import { colors } from "../constants/colors"
import InputForm from "../components/inputForm"
import SubmitButton from "../components/submitButton"
import { useSignInMutation } from "../services/authService"
import { setUser } from "../features/User/userSlice"
import { useDispatch } from "react-redux"
import { insertSession } from "../persistence"

const LoginScreen = ({ navigation }) => {
    const dispatch = useDispatch()
    const [triggerSignIn, result] = useSignInMutation()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    useEffect(() => {
        if (result?.data && result.isSuccess) {
        (async ()=> {
            try {
                if (Platform.OS !== 'web') {
                    const response = await insertSession({
                        email: result.data.email,
                        localId: result.data.localId,
                        token: result.data.idToken,
                    })
                }
                dispatch(
                    setUser({
                        email: result.data.email,
                        idToken: result.data.idToken,
                        localId: result.data.localId,
                    })
                )
            } catch (error) {
                Alert.alert('Error','There was a connection error with the DB, try again later');
            }
        })()
        }
    }, [result])
    
    const onSubmit = () => {
        triggerSignIn({ email, password })
    }
    return (
        <View style={styles.main}>
            <ImageBackground source={require('../images/Metallic-texture.jpg')}
            style={styles.background} >
                <View style={styles.container}>
                    <Text style={styles.title}>Login to start</Text>
                    <InputForm
                        label={"email"}
                        onChange={setEmail}
                        error={""}         
                    />
                    <InputForm
                        label={"password"}
                        onChange={setPassword}
                        error={""}
                        isSecure={true}
                    />
                    <SubmitButton onPress={onSubmit} title="Send" />
                    <Text style={styles.sub}>Not have an account?</Text>
                    <Pressable onPress={() => navigation.navigate("Signup")}>
                        <Text style={styles.subLink}>Sign up</Text>
                    </Pressable>
                </View>
            </ImageBackground>
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    main: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",        
    },
    background: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        width: '100%',
        alignItems: "center",   
    },
    container: {
        width: "90%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.dark,
        gap: 15,
        paddingVertical: 20,
        borderRadius: 10,
    },
    title: {
        fontSize: 22,
        fontFamily: "Josefin",
        color: colors.white,
    },
    sub: {
        fontSize: 16,
        color: colors.white,
    },
    subLink: {
        fontSize: 18,
        color: colors.red,
    },
})
