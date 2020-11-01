import Main from '@/screens/Main';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Social" component={Main} />
        <Tab.Screen name="Main" component={Main} />
        <Tab.Screen name="Setting" component={Main} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
