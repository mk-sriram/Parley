import * as React from 'react';
import {Button, View, Text} from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Ionicons} from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
export {Stack};
const Tab = createBottomTabNavigator();

export function HomeScreen({navigation}){
  return (
    <View style={{flex:1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
        <Button onPress={() => navigation.navigate('HomeScreen')} title="Home" color="#49bea5" />
        <Button onPress={() => navigation.navigate('ContactScreen')} title="Contact Us" color="#ccc" />
    </View>
  );
}
export function ContactScreen({navigation}){
  return (
    <View style={{flex:1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
        <Button onPress={() => navigation.navigate('HomeScreen')} title="Home" color="#ccc" />
        <Button onPress={() => navigation.navigate('ContactScreen')} title="Contact Us" color="#49bea5" />
    </View>
  );
}
export function MyTabNavigation(){
  return(
    <Tab.Navigator initialRouteName='HomeScreen_Tab' screenOptions={{headerShown: false}}>
     <Tab.Screen 
  name="HomeScreen_Tab" 
  component={HomeScreen} 
  options={{ 
    tabBarIcon: ({ color, size }) => (
      <Ionicons name="home" size={size} color={color} />
    )
  }}
/>

<Tab.Screen 
  name="ContactScreen_Tab" 
  component={ContactScreen} 
  options={{ 
    tabBarIcon: ({ color, size }) => (
      <Ionicons name="calendar" size={size} color={color} />
    )
  }}
/>

    </Tab.Navigator>
  );
}





