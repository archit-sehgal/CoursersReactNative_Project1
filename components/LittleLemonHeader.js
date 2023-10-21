import { View, Text, StyleSheet } from 'react-native';
export default function LittleLemonHeader() {
  return (
    <View style={styles.container}>
      <Text style={styles.textdetails}>
        Little Lemon</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    width: "100%", backgroundColor: "#EE9972"
  },
  textdetails: {
    textAlign: "center",
    fontSize: 40,
    color: "#111",
    padding: 2
  }
})