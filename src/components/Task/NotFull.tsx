import React from 'react';
import useTheme from '@/hooks/useTheme';
import styled from 'styled-components/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import StyledView from '../StyledView';
import StyledButton from '../StyledButton';

interface Props {
  onClickAdd: () => void;
}

const NotFull = (props: Props) => {
  const {onClickAdd} = props;
  const theme = useTheme();

  return (
    <Wrapper useBorder>
      <StyledButton fullWidth onPress={onClickAdd}>
        <MaterialCommunityIcons name="plus" size={32} color={theme.secondary} />
      </StyledButton>
    </Wrapper>
  );
};

const Wrapper = styled(StyledView)`
  margin: 4px;
`;

export default NotFull;
