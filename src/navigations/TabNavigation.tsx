import Main from '@/screens/Main';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          tabBarIcon: (props) => (
            <FontAwesome5 {...props} name="user-friends" />
          ),
        }}
        name="Social"
        component={Main}
      />
      <Tab.Screen
        options={{
          tabBarIcon: (props) => <FontAwesome5 {...props} name="th-list" />,
        }}
        name="Main"
        component={Main}
      />
      <Tab.Screen
        options={{
          tabBarIcon: (props) => <MaterialIcons {...props} name="settings" />,
        }}
        name="Setting"
        component={Main}
      />
    </Tab.Navigator>
  );
}
