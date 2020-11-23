import Ranking from '@/containers/Ranking';
import React from 'react';
import styled from 'styled-components/native';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import SocialButtons from '@/containers/SocialButtons';
import useTheme from '@/hooks/useTheme';
import SearchFriends from '@/containers/SearchFriends';
import ShareButtons from '@/containers/ShareButtons';

interface Props {
  selectedIndex: number;
  onTabPress: (index: number) => void;
}

export default (props: Props) => {
  const {selectedIndex, onTabPress} = props;
  const theme = useTheme();
  return (
    <Wrapper>
      <SearchFriendsFlex>
        <SearchFriends />
        <AddButtonFlex>
          <SocialButtons />
        </AddButtonFlex>
      </SearchFriendsFlex>
      <TabFlex>
        <SegmentedControlTab
          values={['Friends', 'All']}
          selectedIndex={selectedIndex}
          activeTabStyle={{backgroundColor: theme.secondary}}
          tabTextStyle={{color: theme.primary}}
          tabStyle={{borderColor: theme.secondary}}
          onTabPress={onTabPress}
        />
      </TabFlex>
      <RankingFlex>
        <Ranking />
      </RankingFlex>
      <ShareFlex>
        <ShareButtons />
      </ShareFlex>
    </Wrapper>
  );
};

const Wrapper = styled.View`
  width: 100%;
  flex: 1;
`;

const RankingFlex = styled.View`
  flex: 5;
`;

const AddButtonFlex = styled.View`
  flex-direction: row;
  padding-top: 16px;
`;

const SearchFriendsFlex = styled.View`
  flex: 1;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  padding-right: 10px;
`;

const TabFlex = styled.View`
  flex: 0.5;
`;

const ShareFlex = styled.View`
  flex: 1;
  flex-direction: row-reverse;
  padding-top: 10px;
  margin-left: 10px;
`;
