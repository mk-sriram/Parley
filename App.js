import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Button, Pressable, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import ImageViewer from './components/ImageViewer';
import ActiveBets from './components/ActiveBets';
import InactiveBets from './components/PastBets'; // Assuming you have this component
import { DefaultTheme } from 'react-native-paper';
import PlaceholderImage from './assets/images/background-image.png';
import Calendar from './components/Calendar'
export default function App(navigation) {
  const [showActiveBets, setShowActiveBets] = useState(true);

  const toggleBets = () => {
    setShowActiveBets(!showActiveBets);
  };

  return (

    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Button title="Settings"/>
        <Text style={styles.profile}>Profile</Text>
        <Button title="Calendar" onPress={() => navigation.navigate({Calendar})}/>
      </View>
      <View style={styles.imageContainer}>
        <ImageViewer placeholderImageSource={PlaceholderImage}/>
      </View>
      
      <View style={styles.buttonContainer}>
        <Pressable style={showActiveBets ? styles.onButton : styles.offButton} title="Active Bets" onPress={() => setShowActiveBets(true)}>
          <Text style={styles.buttontext}>Active Bets</Text>
        </Pressable>
        <Pressable style={showActiveBets ? styles.offButton : styles.onButton} title="Inactive Bets" onPress={() => setShowActiveBets(false)}>
          <Text style={styles.buttontext}>Inactive Bets</Text>
        </Pressable>
      </View>

      <View style={styles.contentContainer}>
        {showActiveBets ? <ActiveBets /> : <InactiveBets />}
      </View>
      
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'orange',
  },
  topContainer:{
    flexDirection: 'row',
    paddingTop: 50,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginHorizontal: -30,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 40,
    paddingBottom: 20,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  imageContainer:{
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
    marginTop:20,
  },
  onButton:{
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    // elevation: 3,
    backgroundColor:"#ccc",
    width:120,
    height:50,
  },
  offButton:{
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttontext:{
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
  },
  profile:{
    fontSize: 24,
    fontWeight: 'bold',
  }
});
