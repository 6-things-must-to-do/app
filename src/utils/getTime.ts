import moment from 'moment-timezone';

const getTime = () => {
  const today = moment().tz('Asia/Seoul');
  const day = parseInt(today.format('DD'), 10);

  return day;
};

export default getTime;
