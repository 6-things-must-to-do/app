import TaskList from '@/containers/TaskList';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import * as Progress from 'react-native-progress';
import {VictoryBar, VictoryLabel} from 'victory-native';
import StyledText from '@/components/StyledText';
import {MAIN_BLACK, MAIN_GREEN, SUB_WHITE, SUB_GRAY} from '@/constants/colors';

interface Props {
  data: Array<{x: number; y: number}>;
}

export default (props: Props) => {
  const {data} = props;

  return (
    <View style={styles.temp}>
      <View style={styles.graphView}>
        <VictoryBar
          data={data}
          labels={({datum}) => datum.x}
          labelComponent={<VictoryLabel dy={0} />}
          style={{
            data: {
              fill: ({datum}) => (datum.y === 1 ? MAIN_GREEN : SUB_GRAY)
            },
            labels: {
              fill: SUB_WHITE
            }
          }}
        />
      </View>
      <View style={styles.dateView}>
        <StyledText color="default" style={styles.bigtext}>
          11월 12일 (목)
        </StyledText>
        <StyledText color="default" style={styles.textCenter}>
          4/5 (80%)
        </StyledText>
      </View>
      <View style={styles.progressView}>
        <Progress.Bar
          progress={4 / 6}
          color={MAIN_GREEN}
          width={300}
          height={2}
        />
      </View>
      <View style={styles.listVeiw}>
        <TaskList />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  temp: {
    flex: 1,
    backgroundColor: MAIN_BLACK
  },
  graphView: {
    flex: 1.4
  },
  dateView: {
    flex: 0.35
    // justifyContent: 'center'
  },
  progressView: {
    flex: 0.1,
    alignItems: 'center'
  },
  listVeiw: {
    flex: 2
  },
  textCenter: {
    textAlign: 'center'
  },
  bigtext: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20
  }
});
