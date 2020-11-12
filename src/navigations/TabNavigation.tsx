import Main from '@/screens/Main';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SettingStack from './SettingStack';
import MainStack from './MainStack';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator tabBarOptions={{showLabel: false}}>
      <Tab.Screen
        options={{
          tabBarIcon: (props) => <FontAwesome5 {...props} name="user-friends" />
        }}
        name="Social"
        component={Main}
      />
      <Tab.Screen
        options={{
          tabBarIcon: (props) => <FontAwesome5 {...props} name="th-list" />
        }}
        name="Main"
        component={MainStack}
      />
      <Tab.Screen
        options={{
          tabBarIcon: (props) => <FontAwesome5 {...props} name="cog" />
        }}
        name="SettingStack"
        component={SettingStack}
      />
    </Tab.Navigator>
  );
}
