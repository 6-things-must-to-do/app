import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SettingStack from './SettingStack';
import MainStack from './MainStack';
import SocialStack from './SocialStack';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="MainStack"
      tabBarOptions={{showLabel: false}}>
      <Tab.Screen
        options={{
          tabBarIcon: (props) => <FontAwesome5 {...props} name="user-friends" />
        }}
        name="SocialStack"
        component={SocialStack}
      />
      <Tab.Screen
        options={{
          tabBarIcon: (props) => <FontAwesome5 {...props} name="th-list" />
        }}
        name="MainStack"
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
