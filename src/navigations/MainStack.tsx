import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Main from '@/screens/Main';
import TaskDetail from '@/screens/TaskDetail';
import Dashboard from '@/screens/Dashboard';
import {Data} from '@stmt/application';

interface RecordTaskDetail {
  isRecord: true;
  task: Data.Task;
}

interface CurrentTaskDetail {
  isRecord: false;
}

export type MainStackParam = {
  Main: undefined;
  TaskDetail: undefined;
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
