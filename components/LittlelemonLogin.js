import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, Pressable, Alert, KeyboardAvoidingView, Platform } from 'react-native';
export default function LittleLemonLogin() {
    const [email, onchangeemail] = useState("")
    const [password, onchangepassword] = useState("")
    const [loggedin, setloggedin] = useState(false)
    return (
        <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <ScrollView keyboardDismissMode='on-drag'>
                <Text style={styles.headerText}>Welcome to Little Lemon</Text>
                {!loggedin && (<>
                    <Text style={styles.regularText}>Login in to continue</Text>
                    <TextInput style={styles.messageInput} placeholder='email'
                        keyboardType="email-address"
                        value={email}
                        onChangeText={onchangeemail} />
                    <TextInput style={styles.messageInput} placeholder='password'
                        secureTextEntry={true}
                        value={password}
                        onChangeText={onchangepassword}
                    />
                    <Pressable style={styles.button} onPress={() => { setloggedin(!loggedin) }}>
                        <Text style={styles.buttonText}>Login</Text>
                    </Pressable>
                </>)}
                {loggedin && (<>
                    <Text style={styles.headerText}>You are logged in!</Text>
                    <Pressable style={styles.button} onPress={()=>{
                        setloggedin(!loggedin)
                    }}><Text style={styles.buttonText}>Logout</Text></Pressable>
                </>)}
            </ScrollView>
        </KeyboardAvoidingView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerText: {
        padding: 40,
        fontSize: 30,
        color: '#EDEFEE',
        textAlign: 'center',
    },
    regularText: {
        fontSize: 24,
        padding: 20,
        marginVertical: 8,
        color: '#EDEFEE',
        textAlign: 'center',
    },
    messageInput: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        fontSize: 16,
        backgroundColor: '#fff',
    },
    button: {
        fontSize: 20,
        padding: 10,
        marginVertical: 8,
        margin: 90,
        backgroundColor: "#EE9972",
        borderWidth: 0,
        borderRadius: 20
    },
    buttonText: {
        color: '#333333',
        textAlign: 'center',
        fontSize: 24,
    }
});
