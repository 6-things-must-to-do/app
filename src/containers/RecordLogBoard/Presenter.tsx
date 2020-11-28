import useTheme from '@/hooks/useTheme';
import {Data} from '@stmt/application';
import React from 'react';
import Svg from 'react-native-svg';
import {VictoryBar, VictoryLabel} from 'victory-native';

interface Props {
  progressList: Array<Data.ProgressData>;
  onPressDate: (x: number) => void;
}

export default (props: Props) => {
  const theme = useTheme();
  const {progressList, onPressDate} = props;
  return (
    <Svg>
      <VictoryBar
        data={progressList}
        x="dayOfYear"
        y="percent"
        labels={(datum) => datum.dayOfYear}
        labelComponent={<VictoryLabel dy={0} />}
        style={{
          data: {
            fill: ({datum}) =>
              datum.percent === 1 ? theme.tint : theme.outfocus
          },
          labels: {
            fill: theme.text.default
          }
        }}
        events={[
          {
            target: 'data',
            eventHandlers: {
              onPressIn: () => {
                return [
                  {
                    target: 'data',
                    mutation: ({datum}) => onPressDate(datum)
                  }
                ];
              }
            }
          }
        ]}
      />
    </Svg>
  );
};
