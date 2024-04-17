import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { IconButton, Dialog, Portal, Button, TextInput, PaperProvider, DatePicker} from 'react-native-paper';
// import TaskDialog from './TaskDialog'; // Import as default
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Footer = ({ onPressHome, onPressProfile }) => {
  const [activeButton, setActiveButton] = useState('home'); // State to track active button
  const [popupVisible, setPopupVisible] = useState(false); // State to track popup visibility


  const [taskDescription, setTaskDescription] = useState('');
  const currentDate = new Date();
  const [dueDate, setDueDate] = useState(currentDate);

  const showPopup = () => setPopupVisible(true);

  const hidePopup = () => {
    setPopupVisible(false);
  };

  const handlePressHome = () => {
    setActiveButton('home');
    onPressHome();
  };

  const handlePressPlus = () => {
    setActiveButton('plus');
    showPopup();  // Show the TaskPopup
  };

  const handlePressProfile = () => {
    setActiveButton('profile');
    onPressProfile();
  };

  return (
    <SafeAreaProvider>
    
    <View style={styles.container}>
      <IconButton
        icon="home"
        size={30}
        style={[
          styles.iconButton,
          activeButton === 'home' ? styles.activeButton : null,
        ]}
        color={activeButton === 'home' ? '#00f' : '#808080'}
        onPress={handlePressHome}
      />
      <IconButton
        icon="plus"
        size={30}
        style={[
          styles.iconButton,
          activeButton === 'plus' ? styles.activeButton : null,
        ]}
        color={activeButton === 'plus' ? '#00f' : '#808080'}
        onPress={handlePressPlus}
      />
      <IconButton
        icon="account-circle"
        size={30}
        style={[
          styles.iconButton,
          activeButton === 'profile' ? styles.activeButton : null,
        ]}
        color={activeButton === 'profile' ? '#00f' : '#808080'}
        onPress={handlePressProfile}
      />
      {/* TaskPopup using TaskDialog */}
     


    </View>
    
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
    justifyContent: 'space-evenly',
    height: 70, // Adjust height as needed
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
