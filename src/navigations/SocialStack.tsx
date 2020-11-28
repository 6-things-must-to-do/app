import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Social from '@/screens/Social';
import SearchFriend from '@/screens/SearchFriend';

export type SocialStackParam = {
  Social: undefined;
  SearchFriend: undefined;
};

const Stack = createStackNavigator<SocialStackParam>();

const SocialStack = () => {
  return (
    <Stack.Navigator initialRouteName="SearchFriend">
      <Stack.Screen
        options={{headerShown: false}}
        name="Social"
        component={Social}
      />
      <Stack.Screen
        name="SearchFriend"
        options={{headerTitle: 'Search user'}}
        component={SearchFriend}
      />
    </Stack.Navigator>
  );
};

export default SocialStack;
