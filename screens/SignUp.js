import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons from Expo vector icons
// Define the SignUpScreen component



import * as SQLite from 'expo-sqlite';

// Open a connection to the SQLite database
const db = SQLite.openDatabase('Parley.db');

// Create the users table if it doesn't exist
db.transaction((tx) => {
  tx.executeSql(
    'CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT, password TEXT);'
  );
});


const SignUpScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State for password visibility

  const db = SQLite.openDatabase('Parley.db');

  const checkUsername = (username) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM users WHERE username = ?;',
        [username],
        (_, { rows }) => {
          resolve(rows.length > 0); // Resolve with true if username exists, false otherwise
        },
        (_, error) => {
          console.error('Error checking username:', error);
          reject(error);
        }
      );
    });
  });
};

// Insert a new user into the database
const insertUser = (username, password) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'INSERT INTO users (username, password) VALUES (?, ?);',
        [username, password],
        (_, { insertId }) => {
          resolve(insertId); // Resolve with the ID of the inserted user
        },
        (_, error) => {
          console.error('Error inserting user:', error);
          reject(error);
        }
      );
    });
  });
};

// Handle the sign-up process
const handleSignUp = async () => {
  console.log("Handlesignup"); 
  if (!username || !password) {
    Alert.alert('Error', 'Please enter username and password.');
    return;
  }

  try {
    console.log("Enter value for this"); 
    const usernameExists = await checkUsername(username);
    console.log(usernameExists)
    if (usernameExists) {
      alert('Error: Username already exists.');
    } else {

      console.log("Inserting user details");
      const userId = await insertUser(username, password);
      alert('Success : User registered successfully.');
      navigation.navigate('Login');
    }
  } catch (error) {
    alert('Error', 'Failed to register user.');
    console.error('Error handling sign-up:', error);
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
      <Button title="Back" onPress={()=> { navigation.navigate('Login'); }} />
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