import {api} from '@/utils/api';
import {AuthState, RootStore, SocialState, UserState} from '@stmt/redux-store';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import * as ENDPOINTS from '@/constants/endpoints';
import Presenter from './Presenter';
import {Data} from '@stmt/application';
import {DynamoError} from '@/utils/error';
import {globalSetError} from '@/redux/modules/global/actions';
import {socialFollow} from '@/redux/modules/social/actions';

const SearchFriend = () => {
  const [search, setSearch] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [user, setUser] = useState<Data.UserBase>();
  const [isInList, setIsInList] = useState(false);
  const {token} = useSelector<RootStore, AuthState>((store) => store.auth);
  const self = useSelector<RootStore, UserState>((store) => store.user);
  const {following} = useSelector<RootStore, SocialState>(
    (store) => store.social
  );
  const dispatch = useDispatch();

  const onClickSearch = async () => {
    setUser(undefined);
    const index = following.findIndex((val) => val.email === search);
    if (index !== -1) {
      setUser(following[index]);
      setIsInList(true);
      return;
    }

    if (self.email === search) {
      setUser(self as Data.UserBase);
      setIsInList(true);
      return;
    }

    setLoading(true);
    setIsInList(false);
    try {
      const {data} = await api(token).get<Data.UserBase>(
        ENDPOINTS.FRIENDS(search)
      );
      setUser(data);
    } catch (e) {
      const axiosError = e?.response?.data;
      if (axiosError && DynamoError.isNotFound(axiosError)) {
        dispatch(globalSetError(new Error("Can't find user")));
      }
    } finally {
      setLoading(false);
    }
  };

  const onClickAdd = async () => {
    if (user) {
      dispatch(socialFollow(user));
    }
  };

  return (
    <Presenter
      isInList={isInList}
      isLoading={isLoading}
      user={user}
      onClickSearch={onClickSearch}
      onClickAdd={onClickAdd}
      search={search}
      onChangeText={setSearch}
    />
  );
};

export default SearchFriend;
