import {
  recordFetchMetaList,
  recordSelectMeta
} from '@/redux/modules/record/actions';
import {getProgressBase} from '@/utils/date';
import {Data} from '@stmt/application';
import {CurrentTasksState, RecordState, RootStore} from '@stmt/redux-store';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Presenter from './Presenter';

const RecordLogBoard = () => {
  const [fetched, setFetched] = useState(false);
  const {metaList, selectedMeta} = useSelector<RootStore, RecordState>(
    (store) => store.record
  );
  const current = useSelector<RootStore, CurrentTasksState>(
    (store) => store.currentTasks
  );
  const dispatch = useDispatch();

  const onPressDate = (datum: Data.RecordMeta) => {
    dispatch(recordSelectMeta(datum));
  };

  const getCurrentMeta = (): Data.RecordMeta => {
    const {tasks} = current;
    let date = Date.now();

    let meta: Data.TaskMeta = {
      percent: 0,
      inComplete: tasks.length,
      complete: 0,
      lockTime: 0
    };

    if ('lockTime' in current) {
      date = current.lockTime;
      meta = current.meta;
    }

    const base = getProgressBase(date);

    return {...meta, score: meta.percent, lockTime: 0, ...base, nickname: ''};
  };

  const currentMeta: Data.RecordMeta = getCurrentMeta();

  useEffect(() => {
    if (!fetched && !metaList.length) {
      const {year, month, day} = getProgressBase(Date.now());
      dispatch(recordFetchMetaList(year, month, day));
      setFetched(true);
    }
  }, [metaList, fetched, dispatch]);

  useEffect(() => {
    if (!selectedMeta) {
      dispatch(recordSelectMeta(currentMeta));
    }
  }, [selectedMeta, dispatch, currentMeta]);

  const selected = selectedMeta || currentMeta;
  const progressList = metaList.length ? metaList : [currentMeta];

  return (
    <Presenter
      selected={selected}
      progressList={progressList}
      onPressDate={onPressDate}
    />
  );
};

export default RecordLogBoard;
