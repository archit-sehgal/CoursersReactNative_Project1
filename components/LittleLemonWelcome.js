import { Text, View, Image, ScrollView, TextInput, StyleSheet } from "react-native"

export default function LittleLemonWelcome() {
    const imageurl = "https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/yh3S-4LcQXGO99idg4HpPg_92f701034da44942a42fee3e878fc1a1_LIttle-Lemon-Logo.png?expiry=1699142400000&hmac=_ibqKkJaabxTxVZtbVM_7u_QfShB1MZCDeT9vbX_krk"
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={{ uri: imageurl }} />
            <Text style={styles.title}>
                Little Lemon, your local Mediterranean Bistro
            </Text>
        </View>
    );
}
const styles = StyleSheet.create({
    logo: {
        height: 100,
        width: 300,
        resizeMode: 'contain',
    },
    container: {
        flex: 1,
        padding: 30,
        marginTop: 0,
        backgroundColor: '#fff',
    },

    title: {
        marginTop: 16,
        paddingVertical: 10,
        color: '#333333',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    },
});