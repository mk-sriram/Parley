// import { StyleSheet, View, Pressable, Text, Image } from 'react-native';
// function Bet(){
//     <View styles={styles.container}>
//         <Text styles={styles.headContainer} >Going to Lectures(Weekly)</Text>
//         <Text styles={styles.innerContainer}>I will attend 15 lectures this week</Text>
//     </View>
// };

// export default function ActiveBets({numBets, }){

// };

// const styles = StyleSheet.create({
//     headContainer:{
//         fontSize: 30,
//         color: black,
//     },
//     innerContainer:{
//         fontSize:20,
//         color: black,

//     },
// });

import * as React from 'react';
import {List, MD3Colors} from 'react-native-paper';

const ActiveBets = () => (
    <List.Section>
      <List.Item title="Attend EECS281 Lectures" 
        left={() => <List.Icon icon="school" />} 
        description="going to class 15 times this semester"
        />
      <List.Item
        title="More Walking"
        description="walk 15,000 steps a day for 3 days a week"
        left={() => <List.Icon color={MD3Colors.tertiary70} icon="walk" />}
      />
    </List.Section>
  );
  
  export default ActiveBets;