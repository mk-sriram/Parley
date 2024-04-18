import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Post from './EachPost';
import Header from './Header'; 

export default function App() {
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
      imageSource: 'https://via.placeholder.com/200',
      caption: 'Upload pictures from trek!',
      endDate: "April 5th",
    },
    {
      id: 4,
      name: 'Toan',
      imageSource: 'https://via.placeholder.com/200',
      caption: 'Finish all practice tests for finals by tomorrow',
      endDate: "Thursday, April 18",
    },
    {
      id: 5,
      name: 'Aditi',
      imageSource: 'https://via.placeholder.com/200',
      caption: 'Do 10 coffee chats by the end of next week',
      endDate: "Friday, April 26",
    },
    {
      id: 6,
      name: 'Bob',
      imageSource: 'https://via.placeholder.com/200',
      caption: 'Meal prep for every day of the week',
      endDate: "Wednesday, April 24",
    },
    // Add more bet objects as needed
  ];

  return (
    <View style={styles.container}>
      <View style={styles.container}>
      <ScrollView contentContainerStyle={{ alignItems: 'center', paddingTop: 20 }}>
        {/* Header */}
        <Header />
        {/* <Text style={styles.header}>Active Bets</Text> */}
        {activeBets.map((bet) => (
          <Post
            key={bet.id}
            name={bet.name}
            imageSource={bet.imageSource}
            caption={bet.caption}
            endDate = {bet.endDate}
          />
          // <Text style={styles.name}>{name}</Text>
        ))}
      </ScrollView>
    </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 40,
  },
});