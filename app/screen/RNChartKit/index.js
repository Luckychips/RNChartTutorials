import React from 'react';
import {Dimensions, SafeAreaView, ScrollView} from 'react-native';
import {
  LineChart,
  ProgressChart,
  BarChart,
  StackedBarChart,
  PieChart,
  ContributionGraph,
} from 'react-native-chart-kit';
import styled from 'styled-components';
const {width, height} = Dimensions.get('window');

const Container = styled.SafeAreaView``;
const RNChartKit = props => {
  const config = {
    backgroundColor: '#e26a00',
    backgroundGradientFrom: '#fb8c00',
    backgroundGradientTo: '#ffa726',
    decimalPlaces: 2, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16,
    },
    propsForDots: {
      r: '6',
      strokeWidth: '2',
      stroke: '#ffa726',
    },
  };

  const style = {
    marginVertical: 8,
    borderRadius: 16,
  };
  return (
    <Container>
      <ScrollView>
        <LineChart
          data={{
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [
              {
                data: [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                ],
              },
            ],
          }}
          width={width}
          height={220}
          yAxisLabel={'$'}
          yAxisSuffix={'k'}
          chartConfig={config}
          bezier
          style={style}
        />
        <LineChart
          data={{
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
                color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
                strokeWidth: 2,
              },
            ],
          }}
          width={width}
          height={220}
          chartConfig={config}
          style={style}
        />
        <ProgressChart
          data={{
            labels: ['Swim', 'Bike', 'Run'],
            data: [0.4, 0.6, 0.8],
          }}
          width={width}
          height={220}
          chartConfig={config}
          style={style}
        />
        <StackedBarChart
          data={{
            labels: ['Test1', 'Test2'],
            legend: ['L1', 'L2', 'L3'],
            data: [[60, 60, 60], [30, 30, 60]],
            barColors: ['#dfe4ea', '#ced6e0', '#a4b0be'],
          }}
          width={width}
          height={220}
          chartConfig={config}
          style={style}
        />
        <PieChart
          data={[
            {
              name: 'Seoul',
              population: 21500000,
              color: 'rgba(131, 167, 234, 1)',
              legendFontColor: '#7F7F7F',
              legendFontSize: 15,
            },
            {
              name: 'Toronto',
              population: 2800000,
              color: '#F00',
              legendFontColor: '#7F7F7F',
              legendFontSize: 15,
            },
            {
              name: 'Beijing',
              population: 527612,
              color: 'red',
              legendFontColor: '#7F7F7F',
              legendFontSize: 15,
            },
            {
              name: 'New York',
              population: 8538000,
              color: '#bbbbbb',
              legendFontColor: '#7F7F7F',
              legendFontSize: 15,
            },
            {
              name: 'Moscow',
              population: 11920000,
              color: 'rgb(0, 0, 255)',
              legendFontColor: '#7F7F7F',
              legendFontSize: 15,
            },
          ]}
          width={width}
          height={220}
          chartConfig={config}
          accessor="population"
          backgroundColor="transparent"
          paddingLeft="15"
          absoluted
          style={style}
        />
        <ContributionGraph
          values={[
            {date: '2017-01-02', count: 1},
            {date: '2017-01-03', count: 2},
            {date: '2017-01-04', count: 3},
            {date: '2017-01-05', count: 4},
            {date: '2017-01-06', count: 5},
            {date: '2017-01-30', count: 2},
            {date: '2017-01-31', count: 3},
            {date: '2017-03-01', count: 2},
            {date: '2017-04-02', count: 4},
            {date: '2017-03-05', count: 2},
            {date: '2017-02-30', count: 4},
          ]}
          endDate={new Date('2019-11-04')}
          numDays={105}
          width={width}
          height={220}
          chartConfig={config}
        />
        <BarChart
          style={style}
          data={{
            labels: ['0.5', '1.0', '1.5', '2.0', '2.5', '3.0'],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          }}
          width={width}
          height={220}
          chartConfig={config}
          verticalLabelRotation={30}
        />
      </ScrollView>
    </Container>
  );
};

export default RNChartKit;
