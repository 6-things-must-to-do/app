import React from 'react';
import styled from 'styled-components/native';
import useTheme from '@/hooks/useTheme';
import StyledText from '@/components/StyledText';
import StyledList from '@/components/StyledList';

interface Props {
  rankinglist: Array<Rank>;
  onClick: () => void;
}

export interface Rank {
  rank: number;
  nickname: string;
  percentage: number;
}

export default (props: Props) => {
  const {rankinglist, onClick} = props;
  const theme = useTheme();
  return (
    <Wrapper>
      <Header disabled borderColor={theme.secondary} bgColor={theme.secondary}>
        <Column>
          <StyledText>Ranking</StyledText>
        </Column>
        <Column>
          <StyledText>Name</StyledText>
        </Column>
        <Column>
          <StyledText>Percentage</StyledText>
        </Column>
      </Header>

      <StyledList>
        {rankinglist.map((rank, index) => (
          <Row
            key={`${rank.rank}-${index}`}
            borderColor={theme.secondary}
            bgColor={theme.primary}
            onPress={onClick}>
            <Column>
              <StyledText>{rank.rank}</StyledText>
            </Column>
            <Column>
              <StyledText>{rank.nickname}</StyledText>
            </Column>
            <Column>
              <StyledText>{rank.percentage}</StyledText>
            </Column>
          </Row>
        ))}
      </StyledList>
    </Wrapper>
  );
};

const Wrapper = styled.View`
  flex: 5;
`;

const Row = styled.TouchableOpacity<{
  borderColor: string;
  bgColor: string;
}>`
  ${(props) => `
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 40px;
  border: 1px solid ${props.borderColor};
  border-top-width: 0;
  background-color: ${props.bgColor};
`}
`;

const Header = styled(Row)`
  border-top-width: 1px;
`;

const Column = styled.View`
  flex: 1;
  align-items: center;
`;
