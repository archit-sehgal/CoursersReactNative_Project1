import { Text, View, Image, ScrollView, TextInput } from "react-native"
import { useState } from "react"
export default function LittleLemonContent() {
    const itemstodisplay = [' Hummus \n Moutabal \n Falafel \n Marinated Olives \n Kofta \n Eggplant Salad \n Lentil Burger \n Smoked Salmon \n Kofta Burger \n Turkish Kebab \n Fries \n Buttered Rice \n Bread Sticks \n Pita Pocket \n Lentil Soup \n Greek Salad \n Rice Pilaf \n Baklava \n Tartufo \n Tiramisu \n Panna Cotta \n']
    return (
        <View style={{ flex: 1 }}>
            <ScrollView indicatorStyle="white"
                horizontal={false}
                style={
                    {
                        paddingHorizontal: 40,
                        paddingVertical: 40, backgroundColor: "darkgreen"
                    }}>
                <Text style={
                    { fontWeight: 800, fontSize: 40, flexWrap: 'wrap',color:"#fff" }}>Menu Items</Text>
                <Text style={{ color: '#fff', fontSize: 30 }}>{itemstodisplay[0]}</Text>
            </ScrollView>
        </View>
    )
}