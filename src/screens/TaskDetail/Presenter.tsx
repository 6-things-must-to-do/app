import React from 'react';
import styled from 'styled-components/native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import TodoInfo from '@/containers/TaskInfo';
import withPadding from '@/hocs/withPadding';
import TodoList from '@/containers/TodoList';
import StyledButton from '@/components/StyledButton';
import StyledText from '@/components/StyledText';
import ConfirmModal from '@/components/ConfirmModal';

interface Props {
  onClickAddTask: () => void;
  onClickRemove: () => void;
  buttonText: string;
  useButton: boolean;
  useRemoveButton: boolean;
  isModalVisible: boolean;
  removeModalSwitch: () => void;
}

export default withPadding((props: Props) => {
  const {
    onClickAddTask,
    onClickRemove,
    useButton,
    useRemoveButton,
    buttonText,
    isModalVisible,
    removeModalSwitch
  } = props;

  const removeButtonStyle = {marginLeft: 16};
  return (
    <Wrapper>
      <KeyboardAwareScrollView>
        <TodoInfo />
        <TodoList />
      </KeyboardAwareScrollView>
      {useButton ? (
        <ButtonWrapper>
          <Button onPress={onClickAddTask}>
            <StyledText>{buttonText}</StyledText>
          </Button>
          {useRemoveButton ? (
            <Button style={removeButtonStyle} onPress={removeModalSwitch}>
              <StyledText>Remove task</StyledText>
            </Button>
          ) : null}
        </ButtonWrapper>
      ) : null}
      <ConfirmModal
        confirmText="Remove"
        confirmColor="warn"
        confirmTextColor="default"
        information="Are you sure you want to remove it?"
        isVisible={isModalVisible}
        onConfirm={onClickRemove}
        onCancel={removeModalSwitch}
      />
    </Wrapper>
  );
});

const Wrapper = styled.View`
  width: 100%;
  flex: 1;
`;

const ButtonWrapper = styled.View`
  width: 100%;
  flex-direction: row;
`;

const Button = styled(StyledButton)`
  flex: 1;
`;
