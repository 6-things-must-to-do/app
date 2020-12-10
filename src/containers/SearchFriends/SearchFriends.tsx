import {SocialStackParam} from '@/navigations/SocialStack';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useState} from 'react';
import Presenter from './Presenter';

const SearchFriends = () => {
  const [search, setSearch] = useState('');
  const {navigate} = useNavigation<StackNavigationProp<SocialStackParam>>();
  const onClickAdd = () => {
    navigate('Relationship');
  };
  const onClickSearch = () => {
    console.log('Search Clicked!');
  };

  return (
    <Presenter
      search={search}
      onTextInput={setSearch}
      onClickAdd={onClickAdd}
      onClickSearch={onClickSearch}
    />
  );
};

export default SearchFriends;
