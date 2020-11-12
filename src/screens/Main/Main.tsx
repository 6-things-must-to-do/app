import TaskList from '@/containers/TaskList';
import React from 'react';
import {View} from 'react-native';

const Main = () => {
  return (
    <View style={{flex: 1}}>
      <TaskList editable />
    </View>
  );
};

export default Main;
