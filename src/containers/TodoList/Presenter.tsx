import React from 'react';
import StyledText from '@/components/StyledText';
import styled from 'styled-components/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Collapsible from 'react-native-collapsible';
import {Data} from '@stmt/application';
import Todo from '@/components/Todo';
import StyledList from '@/components/StyledList';
import StyledTextInput from '@/components/StyledTextInput';
import useTheme from '@/hooks/useTheme';

interface Props {
  todos: Array<Data.Todo>;
  isCollapsed: boolean;
  contentValue: string;
  onPressAdd: () => void;
  onChangeContent: (text: string) => void;
  onToggleTodo: (index: number) => () => void;
  onPressSave: () => void;
}

export default (props: Props) => {
  const {
    todos,
    contentValue,
    onToggleTodo,
    onPressAdd,
    onPressSave,
    onChangeContent,
    isCollapsed
  } = props;
  const theme = useTheme();
  return (
    <>
      <TodoHeader>
        <StyledText color="tint" fontSize={32}>
          Detail todo list
        </StyledText>
        <AddTodoButton onPress={onPressAdd}>
          <MaterialIcons name="add" size={32} color={theme.text.tint} />
        </AddTodoButton>
      </TodoHeader>
      <StyledList>
        {todos.map((todo, index) => (
          <Todo
            todo={todo}
            key={`${todo.content}-${index}`}
            onPress={onToggleTodo(index)}
          />
        ))}
        <Collapsible collapsed={isCollapsed}>
          <AddView>
            <AddIcon>
              <Todo disableText disabled />
            </AddIcon>
            <StyledTextInput
              value={contentValue}
              onChangeText={onChangeContent}
            />
            <SaveButton onPress={onPressSave}>
              <MaterialIcons name="save" size={28} color={theme.secondary} />
            </SaveButton>
          </AddView>
        </Collapsible>
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
