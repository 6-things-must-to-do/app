import {
  socialGetFollower,
  socialGetFollowings
} from '@/redux/modules/social/actions';
import {Data} from '@stmt/application';
import {RootStore, SocialState} from '@stmt/redux-store';
import React, {useEffect, useMemo, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Presenter from './Presenter';

interface ListItem extends Data.UserBase {
  onClick: (uuid: string) => () => void;
}

const RelationshipList = () => {
  const dispatch = useDispatch();
  const [select, setSelect] = useState(0);
  const [isFetched, setIsFetched] = useState(false);
  const social = useSelector<RootStore, SocialState>((store) => store.social);

  const indexedType: Array<Data.RelationType> = ['following', 'follower'];
  const type = indexedType[select];

  const list = useMemo(() => {
    const base = social[type];
    const onClick = (_uuid: string) => () => {
      // TOOD 뭐 해둘까
    };

    return base.map<ListItem>((el) => ({...el, onClick}));
  }, [type, social]);

  useEffect(() => {
    if (!isFetched) {
      const actionCreator =
        type === 'follower' ? socialGetFollower : socialGetFollowings;

      dispatch(actionCreator());
      setIsFetched(true);
    }
  }, [setIsFetched, dispatch, select, isFetched, type]);

  return <Presenter onTabPress={setSelect} select={select} list={list} />;
};

export default RelationshipList;
