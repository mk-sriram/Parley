import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { IconButton, Dialog, Portal, Button, TextInput, PaperProvider, DatePicker} from 'react-native-paper';
import TaskModal from './TaskModal'; // Import as default
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer , useNavigation} from '@react-navigation/native';

const Footer = ({ onPressHome, onPressProfile }) => {
  const [activeButton, setActiveButton] = useState('home'); // State to track active button
  const [popupVisible, setPopupVisible] = useState(false); // State to track popup visibility
  const navigation = useNavigation();

//   const [taskDescription, setTaskDescription] = useState('');
//   const currentDate = new Date();
//   const [dueDate, setDueDate] = useState(currentDate);

//   const showPopup = () => setPopupVisible(true);

//   const hidePopup = () => {
//     setPopupVisible(false);
//   };

//   const handlePressHome = () => {
//     setActiveButton('home');
//     onPressHome();
//   };

//   const handlePressPlus = () => {
//     setActiveButton('plus');
//     showPopup();  // Show the TaskPopup
//   };

//   const handlePressProfile = () => {
//     setActiveButton('profile');
//     onPressProfile();
//   };

    const handlePressHome = () => {
    setActiveButton('home');
    navigation.navigate('HomeScreen'); 
  };

  const handlePressPlus = () => {
    
    setActiveButton('plus');
    setPopupVisible(true); // Show the TaskModal
    
    
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
    navigation.navigate('HomeScreen');  // post to home scren navigation 
    
  };


  const handlePressProfile = () => {
    setActiveButton('profile');
    navigation.navigate('Profile');
  };

 

  const handlePostTask = (taskData) => {
    // Handle posting task data here
    console.log('Task data:', taskData);
    handleClosePopup(); // Close the popup after posting task
  };

  const handleActiveTasks = () => { 
    navigation.navigate('ActiveBets'); 
  }
  

  return (
    <SafeAreaProvider>
    
    <View style={styles.container}>
    <IconButton
          icon="home"
          size={30}
          style={[styles.iconButton, activeButton === 'home' ? styles.activeButton : null]}
          color={activeButton === 'home' ? '#00f' : '#808080'}
          onPress={handlePressHome}
        />
        <IconButton
          icon="plus"
          size={30}
          style={[styles.iconButton, activeButton === 'plus' ? styles.activeButton : null]}
          color={activeButton === 'plus' ? '#00f' : '#808080'}
          onPress={handlePressPlus}
        />

          <IconButton
          icon="progress-star"
          size={30}
          style={[styles.iconButton, activeButton === 'activeBets' ? styles.activeButton : null]}
          color={activeButton === 'profile' ? '#00f' : '#808080'}
          onPress={handleActiveTasks}
        />

        <IconButton
          icon="account-circle"
          size={30}
          style={[styles.iconButton, activeButton === 'profile' ? styles.activeButton : null]}
          color={activeButton === 'profile' ? '#00f' : '#808080'}
          onPress={handlePressProfile}
        />

          
      {/* TaskPopup using TaskDialog */}
      <TaskModal isVisible={popupVisible} onClose={handleClosePopup} onPost={handlePostTask} />


    </View>
    
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
   
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'space-evenly',
    height: 70, // Adjust height as needed
    marginBottom: 50, 
  },
  iconButton: {
    backgroundColor: 'white',
    borderRadius: 20,
  },
  activeButton: {
    backgroundColor: '#ddd', // Greyed-out color for active button
  },
});

export default Footer;
