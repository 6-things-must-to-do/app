import React from 'react';
import Setting from '@/screens/Setting';
import {createStackNavigator} from '@react-navigation/stack';
import TaskRelatedSetting from '@/screens/TaskRelatedSetting';
import UpdateUser from '@/screens/UpdateUser';

export type SettingStackParam = {
  Setting: undefined;
  TaskRelatedSetting: undefined;
  UpdateUser: undefined;
};

const Stack = createStackNavigator<SettingStackParam>();

const SettingStack = () => {
  return (
    <Stack.Navigator initialRouteName="Setting">
      <Stack.Screen
        options={{headerShown: false}}
        name="Setting"
        component={Setting}
      />
      <Stack.Screen
        options={{headerTitle: 'Task Related Setting'}}
        name="TaskRelatedSetting"
        component={TaskRelatedSetting}
      />
      <Stack.Screen
        options={{headerTitle: 'Update User'}}
        name="UpdateUser"
        component={UpdateUser}
      />
    </Stack.Navigator>
  );
};

export default SettingStack;
