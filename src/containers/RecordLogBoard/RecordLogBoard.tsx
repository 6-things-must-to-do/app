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
    let meta: Data.TaskMeta = {
      percent: 0,
      inComplete: tasks.length,
      complete: 0,
      lockTime: 0
    };

    const base = getProgressBase(meta.lockTime);
    return {...meta, score: meta.percent, ...base, nickname: ''};
  };

  const currentMeta: Data.RecordMeta = getCurrentMeta();
  const progressList = [...metaList, currentMeta];

  useEffect(() => {
    if (!fetched && !metaList.length) {
      const {year, month, day} = getProgressBase(Date.now());
      dispatch(recordFetchMetaList(year, month, day - 1));
      setFetched(true);
    }
  }, [metaList, fetched, dispatch]);

  useEffect(() => {
    if (!selectedMeta) {
      dispatch(recordSelectMeta(currentMeta));
    }
  }, [selectedMeta, dispatch, currentMeta]);

  const selected = selectedMeta || currentMeta;

  return (
    <Presenter
      selected={selected}
      progressList={progressList}
      onPressDate={onPressDate}
    />
  );
};

export default RecordLogBoard;
