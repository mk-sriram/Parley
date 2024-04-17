import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Header = () => {
  const handleBackPress = () => {
    // Handle back button press
  };

  const handleFilterPress = () => {
    // Handle filter button press
  };

  return (
    <View style={styles.header}>
      {/* Back Button */}
      <TouchableOpacity onPress={handleBackPress} style={styles.button}>
        <Text style={styles.buttonText}>Back</Text>
      </TouchableOpacity>
      
      {/* Title */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Active Bets</Text>
      </View>
      
      {/* Filter Button */}
      <TouchableOpacity onPress={handleFilterPress} style={styles.button}>
        <Text style={styles.buttonText}>Filter</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingTop: 50,
    paddingBottom: 20,
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  button: {
    padding: 5,
  },
  buttonText: {
    color: 'green',
    fontSize: 16,
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
  },
});

export default Header;
