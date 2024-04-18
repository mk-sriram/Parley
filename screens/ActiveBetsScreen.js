import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView  } from 'react-native';
import Header from '../components/HeaderActiveBets';
import Footer from '../components/footer';
import ActiveBet from '../components/ActiveBetComponent';
import { StatusBar } from 'expo-status-bar';
import Post from '../components/EachPost';

export default function ActiveBetsScreen() {

  const activeBets = [
    {
      id: 1,
      name: 'John Doe',
      imageSource: '',
      caption: 'Go to the gym tomorrow at 6AM',
      endDate: "Friday, April 19",
    },
    {
      id: 2,
      name: 'Toan Bui',
      imageSource: '',
      caption: 'Go to EECS 281 lecture on Wednesday',
      endDate: "Wednesday, April 24",
    },
    {
      id: 3,
      name: "Sri MK",
      imageSource: require('../assets/images/pictures.png'),
      caption: 'Upload pictures from trek!',
      endDate: "April 5th",
    },
    {
      id: 4,
      name: 'Toan',
      imageSource: require('../assets/images/studying.png'),
      caption: 'Finish all practice tests for finals by tomorrow',
      endDate: "Thursday, April 18",
    },
    {
      id: 5,
      name: 'Aditi',
      imageSource: require('../assets/images/CoffeeChat.png'),
      caption: 'Do 10 coffee chats by the end of next week',
      endDate: "Friday, April 26",
    },
    {
      id: 6,
      name: 'Bob',
      imageSource: require('../assets/images/MealPrep.png'),
      caption: 'Meal prep for every day of the week',
      endDate: "Wednesday, April 24",
    },
    // Add more bet objects as needed
  ];
  // const [activeBets, setActiveBets] = useState([
  //   {
  //     id: 1,
  //     profilePicture: 'https://example.com/profile1.jpg',
  //     prompt: "Go to Class 24 times",
  //     timestamp: '2024-04-16 12:00 PM',
  //   },
  //   {
  //     id: 2,
  //     profilePicture: 'https://example.com/profile2.jpg',
  //     prompt: "Eat Healthy food on 20th April",
  //     timestamp: '2024-04-16 1:00 PM',
  //   },
  //   // Add more initial bet objects as needed
  // ]);

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
          // <ActiveBet
          //   key={bet.id}
          //   profilePicture={bet.profilePicture}
          //   prompt={bet.prompt}
          //   timestamp={bet.timestamp}
          // />

          <Post
            key={bet.id}
            name={bet.name}
            imageSource={bet.imageSource}
            caption={bet.caption}
            endDate = {bet.endDate}
          />

        ))}

      </View>
      
      </ScrollView>

      <View styles={styles.footer}>
      <Footer />
      </View>
      
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
    paddingBottom: 10, // Adjust based on footer height
  },
  feed: {
    paddingHorizontal: 10,
    minHeight: '90%', // Set a minimum height to prevent resizing
    paddingBottom: 10, 
  },
});
