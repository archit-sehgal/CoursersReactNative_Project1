import React from "react";
import { Text, View, ScrollView } from "react-native";
import LittleLemonHeader from "./components/LittleLemonHeader";
import LittleLemonFooter from "./components/LittleLemonFooter";
import LittleLemonContent from "./components/LittleLemonContent";
itemstodisplay = ['item1\nitem2\nitem3\nitem4\nitem5\nitem6\nitem7\nitem8\nitem9\nitem10']
export default function WelcomeApp() {
  return (
    <View style={{
      flex: 1, padding: 0
    }}>
      <LittleLemonHeader />
      <ScrollView style={{backgroundColor:"brown"}}>
        <Text style={{fontSize:40}}>Little Lemon Menu</Text>
        <Text style={{fontSize:50,margin:10}}>{itemstodisplay[0]}</Text>
      </ScrollView>
      <LittleLemonFooter />
    </View>
  )
}