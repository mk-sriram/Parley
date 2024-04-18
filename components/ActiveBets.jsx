import React, { useState } from 'react';
import { View, StyleSheet, Pressable, Text } from 'react-native';
import { List, MD3Colors } from 'react-native-paper';
import CustomModal from './CustomModal'; // Importing a separate component for the modal

const ActiveBets = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <List.Section>
        <Pressable onPress={() => setModalVisible(true)}>
          <List.Item
            title="Attend EECS281 Lectures"
            left={() => <List.Icon icon="school" />}
            description="going to class 15 times this semester"
          />
        </Pressable>
        <List.Item
          title="More Walking"
          description="walk 15,000 steps a day for 3 days a week"
          left={() => <List.Icon color={MD3Colors.tertiary70} icon="walk" />}
        />
      </List.Section>
      <CustomModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
    </View>
  );
};

export default ActiveBets;
