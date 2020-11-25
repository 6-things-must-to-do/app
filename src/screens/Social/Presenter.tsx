import Ranking from '@/containers/Ranking';
import React from 'react';
import styled from 'styled-components/native';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import useTheme from '@/hooks/useTheme';
import SearchFriends from '@/containers/SearchFriends';
import ShareButtons from '@/containers/ShareButtons';
import {Data} from '@stmt/application';

interface Props {
  selectedIndex: number;
  onTabPress: (index: number) => void;
  ranking: Array<Data.Rank>;
}

export default (props: Props) => {
  const {selectedIndex, onTabPress, ranking} = props;
  const theme = useTheme();
  return (
    <Wrapper>
      <SearchFriends />
      <TabFlex>
        <SegmentedControlTab
          values={['All', 'Friends']}
          selectedIndex={selectedIndex}
          activeTabStyle={{backgroundColor: theme.secondary}}
          tabTextStyle={{color: theme.primary}}
          tabStyle={{borderColor: theme.secondary}}
          onTabPress={onTabPress}
        />
      </TabFlex>
      <Ranking data={ranking} />
      <ShareButtons />
    </Wrapper>
  );
};

const Wrapper = styled.View`
  width: 100%;
  flex: 1;
`;

const TabFlex = styled.View`
  flex: 0.5;
`;
