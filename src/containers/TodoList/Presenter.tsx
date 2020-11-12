import React from 'react';
import StyledText from '@/components/StyledText';
import styled from 'styled-components/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Data} from '@stmt/application';
import Todo from '@/components/Todo';
import StyledList from '@/components/StyledList';
import StyledTextInput from '@/components/StyledTextInput';
import useTheme from '@/hooks/useTheme';

interface Props {
  todos: Array<Data.Todo>;
  onToggleTodo: (index: number) => () => void;
}

export default (props: Props) => {
  const {todos, onToggleTodo} = props;
  const theme = useTheme();
  return (
    <>
      <TodoHeader>
        <StyledText color="tint" fontSize={32}>
          Detail todo list
        </StyledText>
        <AddTodoButton>
          <MaterialIcons name="add" size={32} color={theme.text.tint} />
        </AddTodoButton>
      </TodoHeader>
      <StyledList>
        {todos.map((todo, index) => (
          <Todo todo={todo} key={todo.content} onPress={onToggleTodo(index)} />
        ))}
        <AddView>
          <AddIcon>
            <Todo disableText disabled />
          </AddIcon>
          <StyledTextInput />
          <SaveButton>
            <MaterialIcons name="save" size={28} color={theme.secondary} />
          </SaveButton>
        </AddView>
      </StyledList>
    </>
  );
};

const AddTodoButton = styled.TouchableOpacity``;

const AddView = styled.View`
  width: 100%;
  align-items: center;
  flex-direction: row;
`;

const AddIcon = styled.View`
  margin-right: 8px;
`;

const SaveButton = styled.TouchableOpacity`
  margin-left: 16px;
  margin-right: 4px;
`;

const TodoHeader = styled.View`
  margin-top: 24px;
  margin-bottom: 16px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
