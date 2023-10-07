import { Text, View, Image, Scrollview, TextInput } from "react-native"
import { useState } from "react"
export default function LittleLemonContent() {
    return (
        <View style={
            {
                flex: 1,
                gap: 20,
                width: "100%",
                alignItems: "center",
                justifyContent: "flex-start",
                padding: 30,
                flexDirection: "column",
                backgroundColor: "brown",

            }
        }>
            <Text style={{
                fontSize: 40, padding: 20, textAlign:
                    "center"
            }}>Welcome To Little Lemon</Text>
            <Text style={{ marginTop: 0, fontSize: 25, textAlign: "center" }}>Little Lemon is a charming
                neighborhood bistro that serves simple
                food and classic cocktails in a lively
                but casual environment. We would love to
                hear more about your experience with us!</Text>
        </View>
    )
}