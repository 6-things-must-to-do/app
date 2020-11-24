import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Main from '@/screens/Main';
import TaskDetail from '@/screens/TaskDetail';
import Dashboard from '@/screens/Dashboard';

export type MainStackParam = {
  Main: undefined;
  TaskDetail: {
    priority: number;
    isNew: boolean;
  };
  Dashboard: undefined;
};

const Stack = createStackNavigator<MainStackParam>();

const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName="Main">
      <Stack.Screen
        options={{headerShown: false}}
        name="Main"
        component={Main}
      />
      <Stack.Screen
        options={{headerTitle: 'Task Detail'}}
        name="TaskDetail"
        component={TaskDetail}
      />
      <Stack.Screen
        options={{headerTitle: 'Dashboard'}}
        name="Dashboard"
        component={Dashboard}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
