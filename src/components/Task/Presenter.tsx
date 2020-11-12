import useTheme from '@/hooks/useTheme';
import {Data, Style} from '@stmt/application';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styled from 'styled-components/native';
import StyledButton from '../StyledButton';
import StyledText from '../StyledText';
import StyledView from '../StyledView';

interface Props {
  drag: () => void;
  item: Data.Task;
  color: keyof Style.DimensionTheme;
  onClick: () => void;
}

export default (props: Props) => {
  const {item, drag, color, onClick} = props;
  const isCompleted = Boolean(item.completedAt);

  return (
    <Wrapper useBorder borderColor={color}>
      <Button onPress={onClick} fullWidth onLongPress={drag}>
        <Content>{JSON.stringify(item)}</Content>

        <CheckView>
          <ClickButton isCompleted={isCompleted} />
        </CheckView>
      </Button>
    </Wrapper>
  );
};

interface ClickButtonProps {
  isCompleted: boolean;
  onClick?: () => void;
}

const ClickButton = (props: ClickButtonProps) => {
  const {isCompleted, onClick} = props;
  const theme = useTheme();

  const color = isCompleted ? theme.tint : theme.warn;
  const name = isCompleted ? 'checkbox-marked-circle' : 'checkbox-blank-circle';

  return (
    <TouchableOpacity onPress={onClick}>
      <MaterialCommunityIcons color={color} size={32} name={name} />
    </TouchableOpacity>
  );
};

const Wrapper = styled(StyledView)`
  margin: 4px;
`;

const Button = styled(StyledButton)`
  height: 80px;
  overflow: scroll;
  flex-direction: row;
`;

const Content = styled(StyledText)`
  flex: 3;
`;
const CheckView = styled.View`
  flex: 1;
  align-items: flex-end;
`;
