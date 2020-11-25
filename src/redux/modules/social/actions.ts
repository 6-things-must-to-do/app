import {Data} from '@stmt/application';
import {RankType, SocialState} from '@stmt/redux-store';

export const SET_DATA = 'SOCIAL/SET_DATA' as const;
export const SET_RANK = 'SOCIAL/SET_RANK' as const;
export const CHANGE_RANK_TYPE = 'SOCIAL/CHANGE_RANK_TYPE' as const;

export const socialSetData = (state: SocialState) => ({
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
