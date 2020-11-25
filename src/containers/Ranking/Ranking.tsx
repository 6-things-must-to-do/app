import Presenter, {Rank} from './Presenter';
import React from 'react';
import {Data} from '@stmt/application';

interface Props {
  data: Array<Data.Rank>;
}

const Ranking = (props: Props) => {
  const {data} = props;
  const rankinglist: Array<Rank> = data.map((r, index) => ({
    rank: index + 1,
    percentage: r.percent,
    nickname: r.nickname
  }));
  const onClick = () => {};

  return <Presenter rankinglist={rankinglist} onClick={onClick} />;
};

export default Ranking;
