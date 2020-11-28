import React, {useState} from 'react';
import Presenter from './Presenter';

const SearchFriends = () => {
  const [search, setSearch] = useState('');
  const onClickAdd = () => {};
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
