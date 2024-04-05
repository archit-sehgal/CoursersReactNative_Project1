import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View, ScrollView, StyleSheet } from "react-native";
import LittleLemonHeader from "./components/LittleLemonHeader";
import LittleLemonFooter from "./components/LittleLemonFooter";
import LittleLemonContent from "./components/LittleLemonContent";
import LittleLemonWelcome from "./components/LittleLemonWelcome";
import LittleLemonFeedback from "./components/LittleLemonFeedback";
import LittleLemonLogin from "./components/LittlelemonLogin";

const Stack = createNativeStackNavigator();

export default function WelcomeApp() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <LittleLemonHeader />
        <Stack.Navigator initialRouteName="Login" screenOptions={{ headerStyle: { backgroundColor: "#fffe" } }}>
          <Stack.Screen name="Login" component={LittleLemonLogin}/>
          <Stack.Screen options={{ title: "Home" }} name="Welcome" component={LittleLemonWelcome} />
          <Stack.Screen name="Menu" component={LittleLemonContent} />
        </Stack.Navigator>
        <LittleLemonFooter />
      </View>
    </NavigationContainer>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee"
  }
})