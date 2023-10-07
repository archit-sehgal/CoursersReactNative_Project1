import { Text, View } from "react-native"
export default function LittleLemonFooter() {
    return (
        <View style={{ width: "100%" }}>
            <Text style={{
                backgroundColor: "#fff", fontSize: 20,
                color: "#111", fontWeight: 600,
                padding:1, textAlign: "center"
            }}
            >All rights reserved
                by Little Lemon, 2022</Text>

        </View>
    )
}