import React, { useState } from 'react';
import { View, Image, StyleSheet , Modal} from 'react-native';
import { Card, Title, Paragraph, Button } from 'react-native-paper'; // Import Paper components

const bet = ({ profilePicture, prompt, onPlaceBet, onSkipBet, timestamp }) => {
  const [placedBet, setPlacedBet] = useState(false);

  const handlePlaceBet = () => {
    setPlacedBet(true);
    onPlaceBet(); // Call the provided function to handle placing the bet
  };

  const handleSkipBet = () => {
    onSkipBet(); // Call the provided function to handle skipping the bet
  };

  return (
    <Card style={styles.cardContainer}>
      <Card.Content>
        <View style={styles.header}>
          <Image source={{ uri: profilePicture }} style={styles.profilePicture} />
          <View style={styles.usernameContainer}>
             <Title style={styles.username} >{prompt}</Title>{/* Use Title component */}
            <Paragraph style={styles.timestamp}>{timestamp}</Paragraph>
        </View>
        </View>
        {/* <Title>{prompt}</Title> */}
          <View style={styles.buttonContainer}>
            <Button mode="contained" onPress={handlePlaceBet} style={styles.placeButton}>
              Place Bet
            </Button>
            
          </View>
      </Card.Content>
    </Card>
    
  );
};


const styles = StyleSheet.create({
  cardContainer: {
    marginVertical: 10,
    borderRadius: 10,
    // Remove border: borderWidth: 1, borderColor: '#ddd',
    shadowColor: 'white',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 0.1,
    elevation: 1, // For Android (optional)
    backgroundColor : 'white'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  profilePicture: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  usernameContainer: {
    flex: 1, // Allow username and timestamp to fill remaining space
  },
  username: {
    fontSize: 16,
    fontWeight: 'bold', // Make username slightly bolder
    color: '#333', // Use dark gray for username
  },
  timestamp: {
    fontSize: 12,
    color: '#ccc',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  placeButton: {
    width: '40%',
    backgroundColor: '#4285f4', // Primary blue color for "Place Bet"
  },
  skipButton: {
    width: '40%',
    backgroundColor: '#ddd', // Lighter gray for "Skip"
  },
  betPlaced: {
    textAlign: 'center',
    marginTop: 10,
    color: 'green',
  },
  placeButtonContent: {
    color: '#fff', // Set button text color to white using hex code for better contrast
  },
});
export default bet; // Export the Bet component
