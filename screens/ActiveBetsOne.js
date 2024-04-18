import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Header from '../components/HeaderActiveBets';
import Footer from '../components/footer';
import ActiveBet from '../components/ActiveBetComponent';

export default function ActiveBetsScreen() {
  const [activeBets, setActiveBets] = useState([
    {
      id: 1,
      profilePicture: 'https://example.com/profile1.jpg',
      prompt: "Go to Class 24 times",
      timestamp: '2024-04-16 12:00 PM',
    },
    {
      id: 2,
      profilePicture: 'https://example.com/profile2.jpg',
      prompt: "Eat Healthy food on 20th April",
      timestamp: '2024-04-16 1:00 PM',
    },
    // Add more initial bet objects as needed
  ]);

  const handleSearchPress = () => {
    console.log('Search button pressed');
  };

  const handleFilterPress = () => {
    console.log('Filter button pressed');
  };

  return (
    <View style={styles.container}>
      <Header
          onSearchPress={handleSearchPress}
          onFilterPress={handleFilterPress}
          // Optionally add onPress functions for left/right icons if needed
        />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.feed}>
        {activeBets.map((bet) => (
          <ActiveBet
            key={bet.id}
            profilePicture={bet.profilePicture}
            prompt={bet.prompt}
            timestamp={bet.timestamp}
          />
        ))}

      </View>
      </ScrollView>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingBottom: 60, // Adjust based on footer height
  },
  feed: {
    paddingHorizontal: 10,
    minHeight: '100%', // Set a minimum height to prevent resizing
    paddingBottom: 330, 
  },
});
