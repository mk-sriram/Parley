import React, { useState } from 'react';
import { StyleSheet, View, Modal, Text, TouchableOpacity, TouchableWithoutFeedback, TextInput } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker'; // Import DateTimePicker
import moment from 'moment';

const TaskModal = ({ isVisible, onClose, onPost, onAddBet }) => {
const [taskTitle, setTaskTitle] = useState('');

  const [dueDate, setDueDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handlePost = () => {
    // Call onPost to handle task posting logic
    //onPost({ title: taskTitle, dueDate });
    onClose();

    // Add the new bet to the bets state in HomeScreen
    onPost({
      id: new Date().getTime(), // Unique ID for the new bet
      profilePicture: require('../assets/images/background-image.jpg'), // Example URL for profile picture
      prompt: taskTitle,
      timestamp: new Date().toLocaleString(),
    });
  };


  const toggleVisible = () => { 
    return false; 
  }
  return (

    <Modal visible={isVisible} transparent animationType="fade">
         <TouchableWithoutFeedback onPress={toggleVisible}> 
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Compose a Task</Text>
    
          <TextInput
              style={styles.input}
              placeholder="Enter task title"
              placeholderTextColor= 'black'
              value={taskTitle}
              onChangeText={setTaskTitle}
            />

            <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.datePickerButton}>
            {
                <DateTimePicker
                value={dueDate}
                mode="date"
                display="default"
                onChange={(event, selectedDate) => {
                    setShowDatePicker(false);
                    if (selectedDate) {
                    setDueDate(selectedDate);
                    }
                }}
                />
           }
            </TouchableOpacity>
     

          <TouchableOpacity onPress={handlePost} style={styles.submitButton}>
            <Text style={styles.buttonText}>Post</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onClose}>
            <Text style={styles.closeButton}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
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
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 10,
  },
  datePickerButton: {
    
    padding: 10,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: 180,
    height: 60,
  },
  submitButton: {
    backgroundColor: '#007bff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    marginBottom: 10,
    width: 170,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  closeButton: {
    color: '#333',
    fontSize: 16,
  },
});

export default TaskModal;
