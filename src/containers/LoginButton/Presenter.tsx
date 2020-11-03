import StyledButton from '@/components/StyledButton';
import useTheme from '@/hooks/useTheme';
import styled from 'styled-components/native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import StyledText from '@/components/StyledText';
import {Auth} from '@stmt/application';

interface Props {
  onClickButton: (type: Auth.Provider) => () => void;
  unableAppleAuth: boolean;
}

export default (props: Props) => {
  const {onClickButton, unableAppleAuth} = props;
  const theme = useTheme();
  return (
    <>
      <Boundary>
        <SocialLoginButton fullWidth onPress={onClickButton('google')}>
          <FontAwesome size={32} color={theme.tint} name="google" />
          <MarginedText color="tint">Continue with Google</MarginedText>
        </SocialLoginButton>
      </Boundary>
      {unableAppleAuth ? (
        <Boundary>
          <SocialLoginButton fullWidth onPress={onClickButton('apple')}>
            <FontAwesome size={32} color={theme.tint} name="apple" />
            <MarginedText color="tint">Continue with Apple</MarginedText>
          </SocialLoginButton>
        </Boundary>
      ) : null}
    </>
  );
};

const Boundary = styled.View`
  width: 100%;
  margin: 8px;
`;

const SocialLoginButton = styled(StyledButton)`
  flex-direction: row;
`;

const MarginedText = styled(StyledText)`
  margin-left: 16px;
`;
