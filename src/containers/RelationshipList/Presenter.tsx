import SegmentedControlTab from 'react-native-segmented-control-tab';
import StyledView from '@/components/StyledView';
import useTheme from '@/hooks/useTheme';
import {Data} from '@stmt/application';
import React from 'react';
import styled from 'styled-components/native';
import SimpleUserProfile from '@/components/SimpleUserProfile';

interface Props {
  list: Array<Data.UserBase & {onClick: (uuid: string) => () => void}>;
  select: number;
  onTabPress: (e: any) => void;
}

export default (props: Props) => {
  const {list, onTabPress, select} = props;
  const theme = useTheme();
  return (
    <Wrapper>
      <SegmentedControlTab
        values={['Following', 'Follower']}
        selectedIndex={select}
        activeTabStyle={{backgroundColor: theme.secondary}}
        tabTextStyle={{color: theme.primary}}
        tabStyle={{borderColor: theme.secondary}}
        onTabPress={onTabPress}
      />
      <ScrollDiv>
        <Scroll>
          {list.map((el) => (
            <SimpleUserProfile onClick={el.onClick} key={el.email} user={el} />
          ))}
        </Scroll>
      </ScrollDiv>
    </Wrapper>
  );
};

const Scroll = styled.ScrollView``;

const Wrapper = styled(StyledView)`
  padding: 16px;
  width: 100%;
  flex: 1;
`;

const ScrollDiv = styled.View`
  padding-top: 16px;
`;
