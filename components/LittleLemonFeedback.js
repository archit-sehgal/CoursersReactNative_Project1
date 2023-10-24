import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput } from 'react-native';
export default function LittleLemonFeedback() {
    const [firstname, changeFirstname] = useState("")
    const [lastname, changelastname] = useState("")
    const [message, changemessage] = useState("")
    return (
        <ScrollView style={styles.container} keyboardDismissMode='on-drag'>
            <Text style={styles.headingSection}>
                How was your visit to Little Lemon?
            </Text>
            <Text style={styles.infoSection}>
                Little Lemon is a charming neighborhood bistro that serves simple food
                and classic cocktails in a lively but casual environment. We would love
                to hear your experience with us!
            </Text>
            <TextInput style={styles.input} 
            value={firstname} 
            placeholder='enter your first name'
            onChangeText={changeFirstname} />
            <TextInput style={styles.input}
                value={lastname}
                placeholder='enter your last name'
                onChangeText={changelastname}/>
                <TextInput style={styles.input}
                placeholder='leave your message'
                value={message} onChangeText={changemessage}/>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        fontSize: 16,
        borderColor: 'white',
        backgroundColor: '#fff',
    },
    messageInput: {
        height: 100,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        fontSize: 16,
        backgroundColor: '#F4CE14',
    },
    infoSection: {
        fontSize: 24,
        padding: 20,
        marginVertical: 8,
        color: '#EDEFEE',
        textAlign: 'center'
    },
    headingSection: {
        fontSize: 28,
        padding: 20,
        marginVertical: 8,
        color: '#EDEFEE',
        textAlign: 'center'
    },
});
