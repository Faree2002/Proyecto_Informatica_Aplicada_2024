import { View, Text, Image } from 'react-native'
import React from 'react'
import { FontAwesome } from "@expo/vector-icons";


export default function HomeScreen() {
    return (
        <View style={{ backgroundColor: "#fff", flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image
                source={require("../assets/homePage.png")}
                style={{ width: "100%", height: "100%", resizeMode: "contain" }}
            />
        </View>
    )
}