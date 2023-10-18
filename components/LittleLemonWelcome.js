import { Text, View, Image, ScrollView, TextInput, StyleSheet } from "react-native"
import { useState } from "react"

export default function LittleLemonWelcome() {
    return (
        <View style={menustyles.container}>
            <ScrollView style={menustyles.content}>
                <Text style={menustyles.heading}>Welcome To Little Lemon</Text>
                <Text style={menustyles.body}>Little Lemon is a charming neighborhood bistro that
                    serves simple food and classic cocktails in a lively but casual environment
                    we would love to hear more about your experince with us!
                </Text>
            </ScrollView>
        </View >
    )
}
const menustyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "green"
    },
    content: {
        paddingHorizontal: 30,
        paddingVertical: 0
    },
    heading: {
        fontSize:55, color: "whitesmoke", textAlign: "center"
    },
    body: {
        fontSize: 40,
        textAlign: "center",
        paddingTop: 20,
        color:"white"
    }
})