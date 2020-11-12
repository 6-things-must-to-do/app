import React from 'react';
import styled from 'styled-components/native';
import useTheme from '@/hooks/useTheme';
import {Style} from '@stmt/application';
import StyledText from '@/components/StyledText';

interface Props {
  height?: number;
  titleColor?: keyof Style.TextTheme;
  descriptionColor?: keyof Style.TextTheme;
  rankinglist: Array<Rank>;
  onClick: () => void;
}

interface Rank {
  rank: number;
  nickname: string;
  percentage: number;
}

const StyledListItem = (props: Props) => {
  const {
    height = 64,
    // titleColor = 'default',
    // descriptionColor = 'tint',
    rankinglist,
    onClick
  } = props;

  const theme = useTheme();

  return (
    <Wrapper
      height={height}
      borderColor={theme.secondary}
      bgColor={theme.primary}>
      <Header disabled>
        <NumberColumn>
          <StyledText>Ranking</StyledText>
        </NumberColumn>
        <NameColumn>
          <StyledText>Name</StyledText>
        </NameColumn>
        <PercentageColumn>
          <StyledText>Percentage</StyledText>
        </PercentageColumn>
      </Header>

      {rankinglist.map((rank) => (
        <Row onPress={onClick}>
          <NumberColumn>
            <StyledText>{rank.rank}</StyledText>
          </NumberColumn>
          <NameColumn>
            <StyledText>{rank.nickname}</StyledText>
          </NameColumn>
          <PercentageColumn>
            <StyledText>{rank.percentage}</StyledText>
          </PercentageColumn>
        </Row>
      ))}
    </Wrapper>
  );
};

export default StyledListItem;

const Wrapper = styled.View<{
  height: number;
  borderColor: string;
  bgColor: string;
}>`
  ${(props) => `
  width: 100%;
  padding-vertical: 8px;
  margin-vertical: 4px;
  border-bottom-width: 1px;
  height: ${props.height}px;
  border-bottom-color: ${props.borderColor}
  flex-direction: row;
  background-color: ${props.bgColor};
  flex: 1;
`}
`;

const Row = styled.TouchableOpacity`
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 40px;
  border: 1px solid;
`;

const Header = styled(Row)``;

const NumberColumn = styled.View`
  flex: 1;
  align-items: center;
`;

const NameColumn = styled.View`
  flex: 1;
  align-items: center;
`;

const PercentageColumn = styled.View`
  flex: 1;
  align-items: center;
`;
