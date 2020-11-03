import StyledView from '@/components/StyledView';
import React from 'react';
import styled from 'styled-components/native';

export default function withLayout<T>(Component: React.FC<T>): React.FC<T> {
  return (props: T) => (
    <Layout>
      <Component {...props} />
    </Layout>
  );
}

const Layout = styled(StyledView)`
  width: 100%;
  padding: 0 16px 0 16px;
`;
