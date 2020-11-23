import Presenter from './Presenter';
import React from 'react';

const Ranking = () => {
  const rankinglist = [
    {
      rank: 1,
      nickname: 'User Name',
      percentage: 100
    },
    {
      rank: 2,
      nickname: 'User Name',
      percentage: 100
    },
    {
      rank: 3,
      nickname: 'User Name',
      percentage: 100
    },
    {
      rank: 4,
      nickname: 'User Name',
      percentage: 100
    },
    {
      rank: 5,
      nickname: 'User Name',
      percentage: 100
    },
    {
      rank: 6,
      nickname: 'User Name',
      percentage: 100
    },
    {
      rank: 7,
      nickname: 'User Name',
      percentage: 100
    },
    {
      rank: 8,
      nickname: 'User Name',
      percentage: 100
    },
    {
      rank: 9,
      nickname: 'User Name',
      percentage: 100
    },
    {
      rank: 10,
      nickname: 'User Name',
      percentage: 100
    }
  ];

  const onClick = () => {};

  return <Presenter rankinglist={rankinglist} onClick={onClick} />;
};

export default Ranking;
