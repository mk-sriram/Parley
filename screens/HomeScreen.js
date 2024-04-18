import React, { useState } from 'react';
import {Animated, StyleSheet, View, ScrollView, Modal, Text, TouchableOpacity, TextInput, TouchableWithoutFeedback } from 'react-native';
import Bet from '../components/bet';
import Header from '../components/header';
import Footer from '../components/footer';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const HomeScreen = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [amount, setAmount] = useState('');
  const [currentBetId, setCurrentBetId] = useState(null); // State to store the current bet ID
  const [bets, setBets] = useState([
    {
      id: 1,
      profilePicture: 'https://example.com/profile1.jpg',
      prompt: "What's your first bet?",
      timestamp: '2024-04-16 12:00 PM',
      opacity: new Animated.Value(1),
    },
    {
      id: 2,
      profilePicture: 'https://example.com/profile2.jpg',
      prompt: "What's your second bet?",
      timestamp: '2024-04-16 1:00 PM',
      opacity: new Animated.Value(1),
    },
    // Add more initial bet objects as needed
  ]);

  const handleAmountChange = (value) => {
    console.log('Submitted amount:', amount);
    setAmount(value);
  };

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const handlePlaceBet = (betId) => {
    console.log('Placing bet...');
    setAmount('');
    toggleModal();
    setCurrentBetId(betId); // Set the current bet ID
  };

  const handlePlaceBetFromModal = () => {
    console.log('Placing bet from modal...');
    const updatedBets = bets.filter((bet) => bet.id !== currentBetId);
    if (updatedBets.length < bets.length) {
      setBets(updatedBets);
    }
    toggleModal();
  };

  const handleSkipBet = () => {
    console.log('Skipping bet...');
  };

  const handleSearchPress = () => {
    console.log('Search button pressed');
  };

  const handleFilterPress = () => {
    console.log('Filter button pressed');
  };

  return (
    <SafeAreaProvider style={styles.container}>
      <View style={styles.content}>
        <Header
          onSearchPress={handleSearchPress}
          onFilterPress={handleFilterPress}
        />
        <ScrollView contentContainerStyle={styles.feedContainer}>
          <View style={styles.feed}>
            {bets.map((bet) => (
              <Bet
                key={bet.id}
                profilePicture={bet.profilePicture}
                prompt={bet.prompt}
                onPlaceBet={() => handlePlaceBet(bet.id)}
                onSkipBet={handleSkipBet}
                timestamp={bet.timestamp}
              />
            ))}
          </View>
        </ScrollView>
        <Modal visible={isModalVisible} transparent animationType="fade">
          <TouchableWithoutFeedback onPress={toggleModal}>
            <View style={styles.modalOverlay}>
              <View style={styles.modalContainer}>
                <Text style={styles.modalTitle}>Place a Bet !!</Text>
                <View style={styles.modalContent}>
                  <Text style={styles.modalText}>Enter dollar amount:</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="$XXXX"
                    placeholderTextColor="#999"
                    value={amount}
                    onChangeText={handleAmountChange}
                    keyboardType="numeric"
                  />
                  <TouchableOpacity onPress={handlePlaceBetFromModal} style={styles.submitButton}>
                    <Text style={styles.buttonText}>Submit</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={toggleModal}>
                    <Text style={styles.closeButton}>Cancel</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
        <Footer style={styles.footer} />
      </View>
    </SafeAreaProvider>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    paddingBottom: 60, // Adjust as needed based on footer height
  },
  feed: {
    paddingHorizontal: 10,
    minHeight: '100%', // Set a minimum height to prevent resizing
    flexGrow: 1,
    paddingBottom: 330, // Adjust as needed based on the bottom padding requirement
    
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    width: '80%',
    height: '30%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalContent: {
    alignItems: 'center',
  },
  modalText: {
    fontSize: 16,
    marginBottom: 10,
  },
  input: {
    color: 'black',
    width: 180,
    height: 60,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  submitButton: {
    backgroundColor: '#007bff', // Blue color using hex code
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    marginBottom: 10,
    width: 100,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff', // White color for button text
    fontSize: 16,
    fontWeight: 'bold',
  },
  closeButton: {
    color: '#333', // Dark color for cancel button text
    fontSize: 16,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
});
