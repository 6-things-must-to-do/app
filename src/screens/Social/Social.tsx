import {socialChangeRankType} from '@/redux/modules/social/actions';
import {RankType, RootStore, SocialState} from '@stmt/redux-store';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Presenter from './Presenter';

const Social = () => {
  const dispatch = useDispatch();
  const {type, ranking} = useSelector<RootStore, SocialState>(
    (store) => store.social
  );
  const translateRankType = (index: number): RankType => {
    const rtype: Array<RankType> = ['all', 'friends'];
    return rtype[index];
  };

  const translateTypeToIndex = (rtype: RankType) => {
    return rtype === 'all' ? 0 : 1;
  };

  const onTabPress = (index: number) => {
    const rtype = translateRankType(index);
    dispatch(socialChangeRankType(rtype));
  };

  return (
    <Presenter
      ranking={ranking}
      selectedIndex={translateTypeToIndex(type)}
      onTabPress={onTabPress}
    />
  );
};

export default Social;
