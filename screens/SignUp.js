import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons from Expo vector icons
// Define the SignUpScreen component
const SignUpScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State for password visibility
  const handleSignUp = () => {
    // Your sign-up logic here
    // For example, you can call an API to register the user
    if (username.trim() !== '' && password.trim() !== '') {
        // Call the setIsLoggedIn function passed as a prop
            alert('User registered successfully');
        navigation.navigate('Login'); // Navigate back to LoginScreen after sign-up

      } else {
        alert('Please enter Valid username and password.');
      }

    
  };

  return (
    <View style={styles.container}>
        <View style={styles.usernameInputContainer}>
      <TextInput 
      style={styles.passwordInput}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
       </View>
     <View style={styles.passwordInputContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Password"
          secureTextEntry={!showPassword} // Toggle secure entry based on showPassword state
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity
          style={styles.eyeIcon}
          onPress={() => setShowPassword((prev) => !prev)} // Toggle showPassword state
        >
          <Ionicons name={showPassword ? 'eye-off' : 'eye'} size={24} color="gray" />
        </TouchableOpacity>
      </View>
      
      <Button title="Sign Up" onPress={handleSignUp} />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 20,
    },

    usernameInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 20,
    },
    passwordInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 20,
      },
      passwordInput: {
        flex: 1,
        height: 40,
        paddingLeft: 10,
      },
      eyeIcon: {
        position: 'absolute',
        right: 10,
      },
  });

export default SignUpScreen; 