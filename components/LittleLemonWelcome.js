import { Text, View, Image, ScrollView, useColorScheme, ImageBackground, StyleSheet } from "react-native"

export default function LittleLemonWelcome() {
    const colorScheme = useColorScheme();
    const imageurl = "https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/yh3S-4LcQXGO99idg4HpPg_92f701034da44942a42fee3e878fc1a1_LIttle-Lemon-Logo.png?expiry=1699142400000&hmac=_ibqKkJaabxTxVZtbVM_7u_QfShB1MZCDeT9vbX_krk"
    const backimg = "https://cdn.dribbble.com/users/462321/screenshots/3434918/little_lemon.png"
    return (
        <View style={[
            styles.container,
            colorScheme === 'light'
                ? { backgroundColor: '#fff' }
                : { backgroundColor: '#333333' },
        ]}>
            <Text style={styles.regular}>Color Scheme: {colorScheme}</Text>
            <ImageBackground source={{ uri: backimg }} style={styles.image}>
            </ImageBackground>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 0
    },
    title: {
        marginTop: 16,
        paddingVertical: 10,
        color: '#333333',
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
    },
    image: {
        flex: 1,
        justifyContent: "center",
        resizeMode: "contain"
    },
    regular: {
        fontSize: 18,
        textAlign: 'center',
    }
});