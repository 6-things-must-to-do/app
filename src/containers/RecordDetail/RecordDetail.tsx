import {RecordState, RootStore} from '@stmt/redux-store';
import React from 'react';
import {useSelector} from 'react-redux';
import Presenter from './Presenter';
import {getFormattedDateFromRecordMeta} from '@/utils/date';
import Loading from '@/components/Loading';

const RecordDetail = () => {
  const {selectedMeta} = useSelector<RootStore, RecordState>(
    (store) => store.record
  );

  console.log(selectedMeta);

  if (!selectedMeta) return <Loading />;

  const formattedDate = getFormattedDateFromRecordMeta(selectedMeta);

  return <Presenter formattedDate={formattedDate} meta={selectedMeta} />;
};

export default RecordDetail;
