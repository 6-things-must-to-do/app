import React from 'react';
import styled from 'styled-components/native';
import {Data, TaskList as TL} from '@stmt/application';
import TaskList from '../TaskList';
import StyledText from '@/components/StyledText';
import * as Progress from 'react-native-progress';
import useTheme from '@/hooks/useTheme';

interface Props {
  formattedDate: string;
  meta: Data.RecordMeta;
  list: Array<TL.Task>;
}

export default (props: Props) => {
  const {formattedDate, meta, list} = props;
  const theme = useTheme();
  return (
    <>
      <BigCenterText color="default">{formattedDate}</BigCenterText>
      <CenterText color="default">{`${meta.complete} / ${
        meta.complete + meta.inComplete
      } (${meta.percent}%)`}</CenterText>
      <ProgressView>
        <Progress.Bar
          progress={0.01 * meta.percent}
          color={theme.tint}
          width={300}
          height={2}
        />
      </ProgressView>
      <TaskListView>
        <TaskList isLocked isRecord list={list} />
      </TaskListView>
    </>
  );
};

const CenterText = styled(StyledText)`
  text-align: center;
`;

const ProgressView = styled.View`
  align-items: center;
`;

const BigCenterText = styled(CenterText)`
  font-weight: bold;
  font-size: 20px;
`;

const TaskListView = styled.View`
  margin-top: 16px;
  padding-horizontal: 16px;
  flex-direction: row;
  flex: 1;
  align-items: center;
  justify-content: center;
`;
