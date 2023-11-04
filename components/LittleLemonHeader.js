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
    width: "100%", backgroundColor: "#FFE666"
  },
  textdetails: {
    textAlign: "center",
    fontSize: 30,
    color: "#111",
    paddingTop: 10
  }
})