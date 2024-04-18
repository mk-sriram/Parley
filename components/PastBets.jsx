import * as React from 'react';
import { ScrollView } from 'react-native';
import {List, MD3Colors} from 'react-native-paper';

const PastBets = () => (
  <ScrollView>
    <List.Section>
      <List.Item title="Study for EECS" 
        left={() => <List.Icon icon="alpha-x" />} 
        description="Study at least 3 hours a day this semester"
        />
      <List.Item
        title="Get Sleep"
        description="Get 8 hours of sleep during the week"
        left={() => <List.Icon color={MD3Colors.tertiary70} icon="check" />}
      />
      <List.Item
        title="Exercise"
        description="Exercise for at least 30 minutes daily"
        left={() => <List.Icon icon="check" />}
      />

      <List.Item
        title="Read"
        description="Read a book for 20 minutes before bed"
        left={() => <List.Icon icon="check" />}
      />

      <List.Item
        title="Drink Water"
        description="Drink 8 glasses of water daily"
        left={() => <List.Icon icon="check" />}
      />

      <List.Item
        title="Practice Meditation"
        description="Practice meditation for 10 minutes in the morning"
        left={() => <List.Icon icon="check" />}
      />
      <List.Item
        title="Read"
        description="Read a book for 20 minutes before bed"
        left={() => <List.Icon icon="check" />}
      />

      <List.Item
        title="Drink Water"
        description="Drink 8 glasses of water daily"
        left={() => <List.Icon icon="check" />}
      />

      <List.Item
        title="Practice Meditation"
        description="Practice meditation for 10 minutes in the morning"
        left={() => <List.Icon icon="check" />}
      />
      


    </List.Section>
    </ScrollView>
  );
  
  export default PastBets;