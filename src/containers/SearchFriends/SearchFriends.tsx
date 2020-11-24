import React from 'react';
import Presenter from './Presenter';

const SearchFriends = () => {
  const onClickAdd = () => {
    console.log('Add Clicked!');
  };

  const onClickSearch = () => {
    console.log('Search Clicked!');
  };
  return <Presenter onClickAdd={onClickAdd} onClickSearch={onClickSearch} />;
};

export default SearchFriends;
