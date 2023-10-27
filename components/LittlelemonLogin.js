import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput,Alert, KeyboardAvoidingView, Platform } from 'react-native';
export default function LittleLemonLogin() {
    const [email, onchangeemail] = useState("")
    const [password, onchangepassword] = useState("")
    return (
        <ScrollView style={styles.container} keyboardDismissMode='on-drag'>
            <Text style={styles.headerText}>Welcome to Little Lemon</Text>
            <Text style={styles.regularText}>Login in to continue</Text>
            <TextInput style={styles.messageInput} placeholder='email'
                keyboardType="email-address"
                value={email}
                onChangeText={onchangeemail}
                onFocus={()=>Alert.alert("done")}
                onBlur={()=>Alert.alert("ok bye")} 
                clearButtonMode='always'/>
            <TextInput style={styles.messageInput} placeholder='password'
                secureTextEntry={true}
                value={password}
                onChangeText={onchangepassword}
                onFocus={()=>Alert.alert("done")} 
                />
        </ScrollView>
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
    }
});
