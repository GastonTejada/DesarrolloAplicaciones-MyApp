import React, { useState , useEffect} from 'react'
import { NavigationContainer } from '@react-navigation/native'
import BottomTabNavigator from './BottomTabNavigator'
import AuthStackNavigator from './AuthStackNavigator'
import { useSelector, useDispatch } from 'react-redux'
import SplashScreen from '../components/SplashScreen'
import { getSession } from '../persistence'
import { setUser } from '../features/User/userSlice'
import { Alert } from "react-native"

const Navigator = () => {
  
    const [loading, setLoading] = useState(true);
    const {user} = useSelector(state => state.auth.value)
    const dispatch = useDispatch()

    useEffect(() => {
        setTimeout(() => {
          setLoading(false);
        }, 3500);
    }, []);

    useEffect(()=> {
        (async ()=> {
            try {
                const response = await getSession()
                if (response.rows._array.length) {
                  const user = response.rows._array[0]
                  dispatch(setUser({
                    email: user.email,
                    localId: user.localId,
                    idToken: user.token
                  }))
                }
            } catch (error) {
                Alert.alert('Error', 'There was a problem logging in, try again later.');                
            }
        })()
    }, [])

    return (
        <NavigationContainer>
            {loading ? <SplashScreen /> : user ? <BottomTabNavigator/> : <AuthStackNavigator/>}            
        </NavigationContainer>
    )
}

export default Navigator