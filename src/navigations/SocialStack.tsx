import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Social from '@/screens/Social';
import Relationship from '@/screens/Relationship';

export type SocialStackParam = {
  Social: undefined;
  Relationship: undefined;
};

const Stack = createStackNavigator<SocialStackParam>();

const SocialStack = () => {
  return (
    <Stack.Navigator initialRouteName="Social">
      <Stack.Screen
        options={{headerShown: false}}
        name="Social"
        component={Social}
      />
      <Stack.Screen
        name="Relationship"
        options={{headerTitle: ' '}}
        component={Relationship}
      />
    </Stack.Navigator>
  );
};

export default SocialStack;
