import React from 'react';
import {SafeAreaView, ScrollView, View, Dimensions} from 'react-native';
import {
  StackedAreaChart,
  StackedBarChart,
  AreaChart,
  BarChart,
  PieChart,
  LineChart,
  ProgressCircle,
  XAxis,
  YAxis,
  Grid,
} from 'react-native-svg-charts';
import * as shape from 'd3-shape';
const {width, height} = Dimensions.get('window');
const PageAreaChart = props => {
  const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80];
  return (
    <AreaChart
      style={{width: width, height: 250}}
      data={data}
      contentInset={{top: 30, bottom: 30}}
      curve={shape.curveNatural}
      svg={{fill: 'rgba(134, 65, 244, 0.8)'}}>
      <Grid />
    </AreaChart>
  );
};

const PageStackedAreaChart = props => {
  const data = [
    {
      month: new Date(2015, 0, 1),
      apples: 3840,
      bananas: 1920,
      cherries: 960,
      dates: 400,
    },
    {
      month: new Date(2015, 1, 1),
      apples: 1600,
      bananas: 1440,
      cherries: 960,
      dates: 400,
    },
    {
      month: new Date(2015, 2, 1),
      apples: 640,
      bananas: 960,
      cherries: 3640,
      dates: 400,
    },
    {
      month: new Date(2015, 3, 1),
      apples: 3320,
      bananas: 480,
      cherries: 640,
      dates: 400,
    },
  ];

  const colors = ['#8800cc', '#aa00ff', '#cc66ff', '#eeccff'];
  const keys = ['apples', 'bananas', 'cherries', 'dates'];
  const svgs = [
    {onPress: () => console.log('apples')},
    {onPress: () => console.log('bananas')},
    {onPress: () => console.log('cherries')},
    {onPress: () => console.log('dates')},
  ];

  return (
    <StackedAreaChart
      style={{height: 200, paddingVertical: 16}}
      data={data}
      keys={keys}
      colors={colors}
      curve={shape.curveNatural}
      showGrid={false}
      svgs={svgs}
    />
  );
};

const PageBarChart = props => {
  const fill = 'rgb(134, 65, 244)';
  const data = [
    50,
    10,
    40,
    95,
    -4,
    -24,
    null,
    85,
    undefined,
    0,
    35,
    53,
    -53,
    24,
    50,
    -20,
    -80,
  ];
  return (
    <BarChart
      style={{height: 200}}
      data={data}
      svg={{fill}}
      contentInset={{top: 30, bottom: 30}}
    >
      <Grid />
    </BarChart>
  );
};

const PageStackedBarChart = props => {
  const data = [
    {
      month: new Date(2015, 0, 1),
      apples: 3840,
      bananas: 1920,
      cherries: 960,
      dates: 400,
      oranges: 400,
    },
    {
      month: new Date(2015, 1, 1),
      apples: 1600,
      bananas: 1440,
      cherries: 960,
      dates: 400,
    },
    {
      month: new Date(2015, 2, 1),
      apples: 640,
      bananas: 960,
      cherries: 3640,
      dates: 400,
    },
    {
      month: new Date(2015, 3, 1),
      apples: 3320,
      bananas: 480,
      cherries: 640,
      dates: 400,
    },
  ];

  const colors = ['#7b4173', '#a55194', '#ce6dbd', '#de9ed6'];
  const keys = ['apples', 'bananas', 'cherries', 'dates'];

  return (
    <StackedBarChart
      style={{height: 200}}
      keys={keys}
      colors={colors}
      data={data}
      showGrid={false}
      contentInset={{top: 30, bottom: 30}}
    />
  );
};

const PageLineChart = props => {
  const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80];
  return (
    <LineChart
      style={{height: 200}}
      data={data}
      svg={{stroke: 'rgb(134, 65, 244)'}}
      contentInset={{top: 20, bottom: 20}}>
      <Grid />
    </LineChart>
  );
};

const PagePieChart = props => {
  const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80];
  const randomColor = () => ('#' + (Math.random() * 0xFFFFFF << 0).toString(16) + '000000').slice(0, 7);
  const pieData = data
    .filter(value => value > 0)
    .map((value, index) => ({
      value,
      svg: {
        fill: randomColor(),
        onPress: () => console.log('press', index),
      },
      key: `pie-${index}`,
    }));

  return (
    <PieChart
      style={{height: 200}}
      data={pieData}
      innerRadius="75%"
    />
  );
};

const PageProgressCircle = props => {
  return (
    <ProgressCircle
      style={{height: 200, marginTop: 30}}
      progress={0.7}
      progressColor={'rgb(134, 65, 244)'}
    />
  );
};

const PageLineChartToYAxis = props => {
  const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80];
  const contentInset = {top: 20, bottom: 20};
  return (
    <View style={{height: 200, flexDirection: 'row'}}>
      <YAxis
        data={data}
        contentInset={contentInset}
        svg={{
          fill: 'grey',
          fontSize: 10,
        }}
        numberOfTicks={10}
        formatLabel={value => `${value}ºC`}
      />
      <LineChart
        style={{flex: 1, marginLeft: 16}}
        data={data}
        svg={{stroke: 'rgb(134, 65, 244)'}}
        contentInset={contentInset}>
        <Grid />
      </LineChart>
    </View>
  );
};

const PageLineChartToXAxis = props => {
  const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80];
  return (
    <View style={{height: 200, padding: 20}}>
      <LineChart
        style={{flex: 1}}
        data={data}
        gridMin={0}
        contentInset={{top: 10, bottom: 10}}
        svg={{stroke: 'rgb(134, 65, 244)'}}>
        <Grid />
      </LineChart>
      <XAxis
        style={{marginHorizontal: -10}}
        data={data}
        formatLabel={(value, index) => index}
        contentInset={{left: 10, right: 10}}
        svg={{fontSize: 10, fill: 'black'}}
      />
    </View>
  );
};

const RNSvgCharts = props => {
  return (
    <SafeAreaView>
      <ScrollView>
        <PageAreaChart />
        <PageStackedAreaChart />
        <PageBarChart />
        <PageStackedBarChart />
        <PageLineChart />
        <PagePieChart />
        <PageProgressCircle />
        <PageLineChartToYAxis />
        <PageLineChartToXAxis />
      </ScrollView>
    </SafeAreaView>
  );
};

export default RNSvgCharts;
