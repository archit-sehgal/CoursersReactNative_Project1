import { Text, View, StyleSheet } from "react-native"
export default function LittleLemonFooter() {
    return (
        <View style={{marginBottom: 20}}>
            <Text style={styles.details}
            >All rights reserved
                by Little Lemon, 2022</Text>

        </View>
    )
}
const styles = StyleSheet.create({
    details: {
        backgroundColor: "#000e",
        fontSize: 20,
        color: "#fff",
        padding:5,
        textAlign: "center",
        fontStyle: 'italic'
    }
})