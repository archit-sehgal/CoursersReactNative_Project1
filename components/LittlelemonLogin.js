import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, Pressable, View, KeyboardAvoidingView, Platform, ImageBackground } from 'react-native';

export default function LittleLemonLogin() {
    const [email, onchangeemail] = useState("");
    const [password, onchangepassword] = useState("");
    const [loggedin, setloggedin] = useState(false);

    return (
        <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : "height"}>
            {!loggedin && (
                <ScrollView keyboardDismissMode='on-drag'>
                    <Text style={styles.headerText}>Welcome to Little Lemon</Text>
                    <Text style={styles.regularText}>Login in to continue</Text>
                    <TextInput
                        style={styles.messageInput}
                        placeholder='email'
                        keyboardType="email-address"
                        value={email}
                        onChangeText={onchangeemail}
                    />
                    <TextInput
                        style={styles.messageInput}
                        placeholder='password'
                        secureTextEntry={true}
                        value={password}
                        onChangeText={onchangepassword}
                    />
                    <Pressable style={styles.button} onPress={() => { setloggedin(!loggedin) }}>
                        <Text style={styles.buttonText}>Login</Text>
                    </Pressable>
                </ScrollView>
            )}
            {loggedin && (
                <View style={styles.container}>
                    <ImageBackground style={styles.image} source={{ uri: "https://i.pinimg.com/736x/55/aa/4c/55aa4cd61699abef9a1df37eb949870d.jpg" }}>
                        <Text style={styles.headerText}>You are logged in!</Text>
                        <Pressable style={styles.button} onPress={() => {
                            setloggedin(!loggedin);
                        }}>
                            <Text style={styles.buttonText}>Logout</Text>
                        </Pressable>
                    </ImageBackground>
                </View>
            )}
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        resizeMode: "cover",
        height: '100%', 
        justifyContent:"center"
    },
    container: {
        flex: 1,
        backgroundColor:"#F8F5EE"
    },
    headerText: {
        padding: 40,
        fontSize: 30,
        color: '#000',
        textAlign: 'center',
    },
    regularText: {
        fontSize: 24,
        padding: 20,
        marginVertical: 8,
        color: '#000',
        textAlign: 'center',
    },
    messageInput: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        fontSize: 16,
        backgroundColor: '#fff',
        borderRadius:10
    },
    button: {
        fontSize: 20,
        padding: 10,
        marginVertical: 8,
        margin: 90,
        backgroundColor: "#000",
        borderWidth: 0,
        borderRadius: 20,
    },
    buttonText: {
        color: '#FFE666',
        textAlign: 'center',
        fontSize: 24,
    },
});
