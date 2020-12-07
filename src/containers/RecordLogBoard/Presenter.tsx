import React from 'react';
import {Svg} from 'react-native-svg';
import {VictoryBar} from 'victory-native';
import useTheme from '@/hooks/useTheme';
import {Data} from '@stmt/application';

interface Props {
  progressList: Array<Data.RecordMeta>;
  selected: Data.RecordMeta;
  onPressDate: (datum: Data.RecordMeta) => void;
}

export default (props: Props) => {
  const theme = useTheme();
  const {progressList, selected, onPressDate} = props;
  return (
    <Svg>
      <VictoryBar
        data={progressList}
        x="day"
        y="score"
        labels={({datum}) => datum.day}
        barRatio={0.3}
        style={{
          data: {
            stroke: ({datum}) =>
              datum.day === selected.day ? theme.secondary : 'transparent',
            strokeWidth: 3,
            fill: ({datum}) =>
              datum.score === 100 ? theme.tint : theme.secondary
          },
          labels: {
            fill: theme.text.default
          }
        }}
        events={[
          {
            target: 'data',
            eventHandlers: {
              onPressIn: () => [
                {
                  target: 'data',
                  mutation: ({datum}) => {
                    onPressDate(datum);
                    return null;
                  }
                }
              ]
            }
          },
          {
            target: 'labels',
            eventHandlers: {
              onPressIn: () => [
                {
                  target: 'data',
                  mutation: ({datum}) => {
                    onPressDate(datum);
                    return null;
                  }
                }
              ]
            }
          }
        ]}
      />
    </Svg>
  );
};
