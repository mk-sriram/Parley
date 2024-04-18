import React from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CalendarHeatmap from 'react-native-calendar-heatmap';

const MyCalendarHeatmap = () => {
  const navigation = useNavigation();
  const endDate = new Date('2016-04-01');
  const numDays = 100;
  const values = [
    { date: '2016-01-01' },
    { date: '2016-01-22' },
    { date: '2016-01-30' },
    // Add more values as needed
  ];

  const handleBackButton = () => {
    navigation.navigate('Profile');
  };

  return (
    <View style={styles.container}>
      {/* Custom header with a back button */}
      <View style={styles.header}>
        <Button title="Back" onPress={handleBackButton} />
      </View>

      {/* Calendar title */}
      <Text style={styles.title}>Calendar</Text>

      {/* Calendar heatmap */}
      <View style={styles.calendarContainer}>
        <CalendarHeatmap
          endDate={endDate}
          numDays={numDays}
          values={values}
          squareSize={24} // Adjust as needed
          showMonthLabels // Show month labels
          showOutOfRangeDays // Show out-of-range days
          colorArray={['#ebedf0', '#c6e48b', '#7bc96f', '#239a3b']} // Adjust colors as needed
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    position: 'absolute',
    top: 60,
    left: 10,
    zIndex: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    //backgroundColor: 'red',
    paddingTop: 40, 
    marginVertical: 20,
  },
  calendarContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20, // Adjust spacing from the title
  },
});

export default MyCalendarHeatmap;
