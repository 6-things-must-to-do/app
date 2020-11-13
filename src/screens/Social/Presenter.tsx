import Ranking from '@/containers/Ranking';
//import SearchFriends from '@/containers/SearchFriends';
import React from 'react';
import styled from 'styled-components/native';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import SocialButtons from '@/containers/SocialButtons';
import useTheme from '@/hooks/useTheme';

interface Props {
  selectedIndex: number;
  onTabPress: (index: number) => void;
}

export default (props: Props) => {
  const {selectedIndex, onTabPress} = props;
  const theme = useTheme();
  return (
    <>
      <Wrapper>
        <SegmentedControlTab
          values={['Friends', 'All']}
          selectedIndex={selectedIndex}
          activeTabStyle={{backgroundColor: theme.secondary}}
          tabTextStyle={{color: theme.primary}}
          tabStyle={{borderColor: theme.secondary}}
          onTabPress={onTabPress}
        />
        <RankingFlex>
          <Ranking />
        </RankingFlex>
        <ButtonsFlex>
          <SocialButtons />
        </ButtonsFlex>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.View`
  width: 100%;
  flex: 1;
`;

const RankingFlex = styled.View`
  flex: 1;
`;

const ButtonsFlex = styled.View`
  flex: 1;
  padding-horizontal: 16px;
`;
