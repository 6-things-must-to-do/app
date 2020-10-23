import React, {ReactNode} from 'react';
import styled from 'styled-components/native';

interface CenterizedViewProps {
  children: ReactNode;
}

const CenterizedView: React.FC<CenterizedViewProps> = (props) => {
  const {children} = props;

  return <Wrapper>{children}</Wrapper>;
};

export default CenterizedView;

const Wrapper = styled.View`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
