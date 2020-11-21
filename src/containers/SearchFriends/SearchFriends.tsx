import React from 'react';
import Presenter from './Presenter';

const SearchFriends = () => {
  const onClickAdd = () => {
    console.log('clicked!');
  };
  return <Presenter onClick={onClickAdd} />;
};

export default SearchFriends;
