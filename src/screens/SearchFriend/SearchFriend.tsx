import React, {useState} from 'react';
import Presenter from './Presenter';

const SearchFriend = () => {
  const [search, setSearch] = useState('');
  const onClickSearch = () => {
    console.log(search);
  };
  return (
    <Presenter
      onClickSearch={onClickSearch}
      search={search}
      onChangeText={setSearch}
    />
  );
};

export default SearchFriend;
