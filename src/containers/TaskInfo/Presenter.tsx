import StyledInputListItem from '@/components/StyledInputListItem';
import StyledText from '@/components/StyledText';
import useTheme from '@/hooks/useTheme';
import React from 'react';
import Collapsible from 'react-native-collapsible';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styled from 'styled-components/native';

interface Props {
  isFolded: boolean;
  onToggleDetail: () => void;
}

export default (props: Props) => {
  const {isFolded, onToggleDetail} = props;
  const iconName = !isFolded ? 'expand-less' : 'expand-more';
  const theme = useTheme();

  return (
    <>
      <StyledInputListItem label="What 🎯" placeholder="Title of your task" />
      <Collapsible collapsed={isFolded}>
        <StyledInputListItem
          label="Where 📍"
          placeholder="Where you do this task"
        />
        <StyledInputListItem
          label="With 👥"
          placeholder="People who are in this task"
        />
        <StyledInputListItem
          baseListItemProps={{height: 88}}
          multiline
          label="Memo 📝"
          placeholder="Any record about this task"
        />
      </Collapsible>
      <Detail onPress={onToggleDetail}>
        <StyledText color="tint">More Detail </StyledText>
        <MaterialIcons name={iconName} size={16} color={theme.text.tint} />
      </Detail>
    </>
  );
};

const Detail = styled.TouchableOpacity`
  width: 100%;
  justify-content: flex-end;
  flex-direction: row;
`;
