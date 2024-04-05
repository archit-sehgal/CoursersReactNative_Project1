import React from 'react';
import { Text, View, Pressable, ImageBackground, StyleSheet, useColorScheme } from 'react-native';

// Define reusable components
const BackgroundImage = ({ source, children }) => (
  <ImageBackground source={{ uri: source }} style={styles.backgroundImage}>
    {children}
  </ImageBackground>
);

const Button = ({ onPress, title }) => (
  <Pressable style={styles.button} onPress={onPress}>
    <Text style={styles.buttonText}>{title}</Text>
  </Pressable>
);

// LittleLemonWelcome Component
const LittleLemonWelcome = ({ navigation }) => {
  const colorScheme = useColorScheme();
  const backimg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhD_Cj_1DnrAqC0o17-7KZPRijC02-esX7tlNzunfl3w&s";

  return (
    <View style={[styles.container, { backgroundColor: colorScheme === 'light' ? '#fff' : '#333333' }]}>
      <BackgroundImage source={backimg}>
        <View style={styles.buttonsContainer}>
          <Text style={styles.infoSection}>
            Little Lemon is a charming neighborhood bistro that
            serves simple food and classic cocktails in a lively but casual environment
            we would love to hear more about your experince with us!</Text>
          <Button onPress={() => navigation.navigate('Menu')} title="View Menu" />
        </View>
      </BackgroundImage>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#333333',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    resizeMode: 'contain',
    width: '100%',
    alignItems: 'center',
  },
  buttonsContainer: {
    width: '80%',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#fffe',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    width: '100%',
    alignItems: 'center',
    opacity:.9
  },
  buttonText: {
    fontSize: 20,
    color: '#000e',
    textAlign: 'center',
  },
  regular: {
    fontSize: 18,
    textAlign: 'center',
  },
  infoSection: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: '#000',
    textAlign: 'center',
    backgroundColor:"white",
    opacity:.8
  },
});

export default LittleLemonWelcome;
