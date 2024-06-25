import { View, Text, Image } from 'react-native'
import React from 'react'

export default function SearchScreen() {
    return (
        <View style={{ backgroundColor: "#fff", flex: 1, justifyContent: 'center' }}>
            <Image
                source={require("../assets/searchPage.png")}
                style={{ width: "100%", height: "100%", resizeMode: "contain", marginBottom: 50 }}
            />
        </View>
    )
}