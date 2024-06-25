import { View, Text, Image } from 'react-native'
import React from 'react'

export default function RecentSearchScreen() {
    return (
        <View style={{ backgroundColor: "#fff", top: "0px" }}>
            <Image
                source={require("../assets/recentPage.png")}
                style={{ width: "100%", height: "100%", resizeMode: "contain" }}
            />
        </View>
    )
}