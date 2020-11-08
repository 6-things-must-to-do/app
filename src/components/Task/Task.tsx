import {Data} from '@stmt/application';
import {RenderItemParams} from 'react-native-draggable-flatlist';
import React from 'react';
import StyledButton from '../StyledButton';
import StyledText from '../StyledText';

const Task = (props: RenderItemParams<Data.Task>) => {
  //   const {isActive, item, index, drag} = props;

  return (
    <StyledButton onLongPress={props.drag}>
      <StyledText>{JSON.stringify(props)}</StyledText>
    </StyledButton>
  );
};

export default Task;
