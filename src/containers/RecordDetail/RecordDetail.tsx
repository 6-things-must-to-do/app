import {RecordState, RootStore} from '@stmt/redux-store';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Presenter from './Presenter';
import {getFormattedDateFromRecordMeta} from '@/utils/date';
import Loading from '@/components/Loading';
import {Data, TaskList} from '@stmt/application';
import {recordFetchDetail} from '@/redux/modules/record/actions';

const RecordDetail = () => {
  const {selectedMeta, tasks} = useSelector<RootStore, RecordState>(
    (store) => store.record
  );
  const dispatch = useDispatch();

  const lockTime = selectedMeta?.lockTime;

  const getList = (origins: Array<Data.Task>): Array<TaskList.Task> => {
    const onClick = () => {};
    const ret = origins.map<TaskList.Task>((task) => ({
      ...task,
      onClick,
      onClickComplete: onClick
    }));

    return ret;
  };

  useEffect(() => {
    if (!lockTime) return;
    dispatch(recordFetchDetail(lockTime));
  }, [lockTime, dispatch]);

  if (!selectedMeta) return <Loading />;

  const formattedDate = getFormattedDateFromRecordMeta(selectedMeta);

  const list = getList(tasks);

  return (
    <Presenter formattedDate={formattedDate} meta={selectedMeta} list={list} />
  );
};

export default RecordDetail;
