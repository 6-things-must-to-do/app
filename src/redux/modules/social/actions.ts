import {Data} from '@stmt/application';
import {RankType, SocialState} from '@stmt/redux-store';

export const SET_DATA = 'SOCIAL/SET_DATA' as const;
export const SET_RANK = 'SOCIAL/SET_RANK' as const;
export const CHANGE_RANK_TYPE = 'SOCIAL/CHANGE_RANK_TYPE' as const;
export const PUSH_FOLLOWING = 'SOCIAL/PUSH_FOLLOWING' as const;

export const FOLLOW = 'SOCIAL/FOLLOW' as const;
export const FETCH_FOLLOWER = 'SOCIAL/FETCH_FOLLOWER' as const;
export const FETCH_FOLLOWING = 'SOCIAL/FETCH_FOLLOWING' as const;

export const socialSetData = (state: Partial<SocialState>) => ({
  type: SET_DATA,
  payload: state
});

export const socialSetRank = (rank: Array<Data.Rank>) => ({
  type: SET_RANK,
  payload: rank
});

export const socialChangeRankType = (type: RankType) => ({
  type: CHANGE_RANK_TYPE,
  payload: type
});

export const socialGetFollower = () => ({
  type: FETCH_FOLLOWER
});

export const socialGetFollowings = () => ({
  type: FETCH_FOLLOWING
});

export const socialPushFollowing = (user: Data.UserBase) => ({
  type: PUSH_FOLLOWING,
  payload: user
});

export const socialFollow = (user: Data.UserBase) => ({
  type: FOLLOW,
  payload: user
});
