import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Social from '@/screens/Social';

export type SocialStackParam = {
  Social: undefined;
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
    </Stack.Navigator>
  );
};

export default SocialStack;
