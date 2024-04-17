import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons from Expo vector icons
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUpScreen from './SignUp';

const LoginScreen = ({ navigation, route }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State for password visibility

  const handleLogin = () => {

    if (username.trim() !== '' && password.trim() !== '') {
        // Call the setIsLoggedIn function passed as a prop
        route.params.setIsLoggedIn(true);
        // Navigate to Home screen after successful login
        navigation.navigate('HomeScreen');

      } else {
        alert('Please enter username and password.');
      }

      
  };

  const SignUp = () => { 
    navigation.navigate('SignUp');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
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
      <Button title="Login" onPress={handleLogin} />
      <TouchableOpacity onPress={() => console.log('Forgot password pressed')}>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>
      
      {/* Or Container */}
      <View style={styles.orContainer}>
        <View style={styles.orDivider} />
        <Text style={styles.orText}>or</Text>
        <View style={styles.orDivider} />
      </View>
      
     
      <Button
        title="Login with Google"
        onPress={() => console.log('Login with Google pressed')}
      />
      
      {/* Sign-up Container */}
      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Don't have an account?</Text>
        <TouchableOpacity onPress={SignUp}>
          <Text style={styles.signupLink}>Sign up</Text>
        </TouchableOpacity>
      </View>
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
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '100%',
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
  forgotPassword: {
    alignSelf: 'flex-end',
    marginTop: 10,
    color: '#007bff', // Link color
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  orDivider: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
  },
  orText: {
    paddingHorizontal: 10,
    color: '#333', // Text color
  },
  signupContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    paddingVertical: 10,
    paddingBottom: 40,
    alignItems: 'center',
    flexDirection: 'row', // Arrange items in a row
    justifyContent: 'center', // Center items horizontally
  },
  signupText: {
    color: 'black', // White color for text
    marginRight: 5, // Add some space between text and link
  },
  signupLink: {
    color: '#007bff', // Link color
  },
});

export default LoginScreen;
