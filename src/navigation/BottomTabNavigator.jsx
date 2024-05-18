import React from "react"
import { StyleSheet, View } from "react-native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import HomeStackNavigator from "./HomeStackNavigator"
import { colors } from "../constants/colors"
import CartStack from "./CartStackNavigator"
import OrderStack from "./OrderStackNavigator"
import Header from "../components/Header"
import { FontAwesome , FontAwesome5 ,Ionicons } from "@expo/vector-icons"
import MyProfileStackNavigator from "./MyProfileStackNavigator"

const Tab = createBottomTabNavigator()

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                header: () => {
                    return <Header route={route} />
                },
                tabBarShowLabel: false,
                tabBarStyle: styles.tabBar,
            })}
        >
            <Tab.Screen
                name="Shop"
                component={HomeStackNavigator}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View>
                                <FontAwesome name="list" size={24} color={focused ? colors.orange : "gray" } />                                
                                {focused && <View style={styles.tabBarIndicator} />}
                            </View>
                        )
                    },
                }}
            />
            <Tab.Screen
                name="Cart"
                component={CartStack}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View>
                                <FontAwesome5 name="shopify" size={24} color={focused ? colors.orange : "gray"} />
                                {focused && <View style={styles.tabBarIndicator} />}
                            </View>
                        )
                    },
                }}
            />
            <Tab.Screen 
                name="Orders"
                component={OrderStack}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View>
                                <Ionicons name="receipt-sharp" size={24} color={ focused ? colors.orange : "gray"} />
                                {focused && <View style={styles.tabBarIndicator} />}
                            </View>
                        )
                    },
                }}
            />
            <Tab.Screen 
                name="My profile"
                component={MyProfileStackNavigator}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View>                                
                                <FontAwesome5 name="user-astronaut" size={24} color={ focused ? colors.orange : "gray"} />
                                {focused && <View style={styles.tabBarIndicator} />}
                            </View>
                        )
                    },
                }}
            />        
        </Tab.Navigator>
    )
}

export default BottomTabNavigator

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: colors.dark,
        shadowColor: "black",
        elevation: 4,
        borderRadius: 15,
        height: 45,        
    },
    tabBarIndicator: {
        position: 'absolute',
        bottom: -10,
        width: '30%',
        height: 3,
        backgroundColor: colors.orange,
    },

})
