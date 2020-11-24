import TaskList from '@/containers/TaskList';
import React from 'react';
import * as Progress from 'react-native-progress';
import {VictoryBar, VictoryLabel} from 'victory-native';
import StyledText from '@/components/StyledText';
import useTheme from '@/hooks/useTheme';
import styled from 'styled-components/native';
import StyledView from '@/components/StyledView';
import Svg from 'react-native-svg';

interface Props {
  data: Array<{x: number; y: number; m: number}>;
  currentDate: number;
  onPressDate: (newdate: number) => void;
}

export default (props: Props) => {
  const {data, currentDate, onPressDate} = props;

  const theme = useTheme();

  return (
    <Wrapper>
      <GraphView>
        <Svg>
          <VictoryBar
            data={data}
            labels={({datum}) => datum.x}
            labelComponent={<VictoryLabel dy={0} />}
            style={{
              data: {
                fill: ({datum}) => (datum.y === 1 ? theme.tint : theme.outfocus)
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
                        mutation: (datum) => {
                          onPressDate(datum.datum.x);
                        }
                      }
                    ];
                  }
                }
              }
            ]}
          />
        </Svg>
      </GraphView>
      <DateView>
        <BigCenterText color="default">11월 {currentDate}일 (목)</BigCenterText>
        <CenterText color="default">4/5 (80%)</CenterText>
      </DateView>
      <ProgressView>
        <Progress.Bar
          progress={4 / 5}
          color={theme.tint}
          width={300}
          height={2}
        />
      </ProgressView>
      <ListView>
        <TaskList isRecord list={[]} />
      </ListView>
    </Wrapper>
  );
};

const Wrapper = styled(StyledView)`
  flex: 1;
`;

const GraphView = styled.View`
  flex: 1.4;
`;

const DateView = styled.View`
  flex: 0.35;
`;

const ProgressView = styled.View`
  flex: 0.1;
  align-items: center;
`;

const ListView = styled.View`
  flex: 2;
`;

const CenterText = styled(StyledText)`
  text-align: center;
`;

const BigCenterText = styled(CenterText)`
  font-weight: bold;
  font-size: 20px;
`;
