import { View, Text } from 'react-native';
export default function LittleLemonHeader() {
  return (
    <View style={{ width: "100%",backgroundColor: "whitesmoke" }}>
      <Text style={{
         textAlign: "center",
        fontSize: 30, color: "#111", fontWeight: 700, padding: 15
      }}>
        Little Lemon</Text>
    </View>
  )
}