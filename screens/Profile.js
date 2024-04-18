import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Button, Pressable, Text , ScrollView} from 'react-native';
import { NavigationContainer , useNavigation} from '@react-navigation/native';
import ImageViewer from '../components/ImageViewer';
import ActiveBets from '../components/ActiveBets';
import InactiveBets from '../components/PastBets'; // Assuming you have this component
import { DefaultTheme } from 'react-native-paper';
import PlaceholderImage from '../assets/images/background-image.jpg';
import Calendar from './Calendar'
import Footer from '../components/footer';


export default function ProfileScreen() {
  const [balance, setBalance ]= useState(); 
  const navigation = useNavigation();
  const [showActiveBets, setShowActiveBets] = useState(true);

  const toggleBets = () => {
    setShowActiveBets(!showActiveBets);
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Button title="Settings" onPress={() => navigation.navigate('Settings')}/>
        <Text style={styles.profile}>Profile</Text>
        <Button title="Calendar" onPress={() => navigation.navigate('Calendar')} />
      </View>
      <View style={styles.imageContainer}>
        <ImageViewer placeholderImageSource={PlaceholderImage} />
      </View>

      
      <View style={styles.buttonContainer}>
        <Pressable style={showActiveBets ? styles.onButton : styles.offButton} onPress={() => setShowActiveBets(true)}>
          <Text style={[styles.buttontext, showActiveBets ? styles.activeText : styles.inactiveText]}>
            Active Bets
          </Text>
        </Pressable>
        <Pressable style={showActiveBets ? styles.offButton : styles.onButton} onPress={() => setShowActiveBets(false)}>
          <Text style={[styles.buttontext, showActiveBets ? styles.inactiveText : styles.activeText]}>
            Inactive Bets
          </Text>
        </Pressable>
      </View>

      <ScrollView style={styles.contentContainer}>
        {showActiveBets ? <ActiveBets /> : <InactiveBets />}
      </ScrollView>

      <StatusBar style="auto" />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  topContainer: {
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
    paddingBottom: 280,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
    marginTop: 50,
  },
  buttontext: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
  },
  activeText: {
    color: 'white', // White color for active text
  },
  inactiveText: {
    color: 'black', // Black color for inactive text
  },
  onButton: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    backgroundColor: "#007bff",
    width: 120,
    height: 50,
  },
  offButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 120,
    height: 50,
  },
  profile: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});