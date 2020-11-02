import useTheme from '@/hooks/useTheme';
import React from 'react';
import styled from 'styled-components/native';
import hexRgb from 'hex-rgb';
import LoadingComponent from '@/components/Loading';
import {useSelector} from 'react-redux';
import {GlobalState, RootStore} from '@stmt/redux-store';

interface Props {
  transparent?: boolean;
}

const Loading = (props: Props) => {
  const theme = useTheme();
  const {isLoading} = useSelector<RootStore, GlobalState>(
    (store) => store.global
  );
  const {transparent = true} = props;
  const rgb = hexRgb(theme.primary);
  const bgColor = `rgba(${rgb.red}, ${rgb.green}, ${rgb.blue}, ${
    transparent ? 0.75 : 1
  })`;

  return isLoading ? (
    <Wrapper bgColor={bgColor}>
      <LoadingComponent />
    </Wrapper>
  ) : null;
};

export default Loading;

const Wrapper = styled.View<{bgColor: string}>`
  ${(props) => `
    background-color: ${props.bgColor};
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    justify-content:center;
    align-items:center;
`}
`;
