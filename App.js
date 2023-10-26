import React from "react";
import { Text, View, ScrollView,StyleSheet } from "react-native";
import LittleLemonHeader from "./components/LittleLemonHeader";
import LittleLemonFooter from "./components/LittleLemonFooter";
import LittleLemonContent from "./components/LittleLemonContent";
import LittleLemonWelcome from "./components/LittleLemonWelcome";
import LittleLemonFeedback from "./components/LittleLemonFeedback";
import LittleLemonLogin from "./components/LittlelemonLogin";
export default function WelcomeApp() {
  return (
    <View style={styles.container}>
      <LittleLemonHeader />
      <LittleLemonLogin/>
      {/* <LittleLemonWelcome/> */}
      {/* <LittleLemonFeedback/> */}
      {/* <LittleLemonContent/> */}
      <LittleLemonFooter />
    </View>
  )
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#333333"
  }
})