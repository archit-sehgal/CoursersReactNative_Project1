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
    width: "100%", backgroundColor: "#000e"
  },
  textdetails: {
    textAlign: "center",
    fontSize: 20,
    color: "#fff",
    paddingTop: 10
  }
})