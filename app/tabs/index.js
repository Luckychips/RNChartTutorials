import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import RNChartKit from '../screen/RNChartKit';
import RNSvgCharts from '../screen/RNSvgCharts';
import RNRadar from '../screen/RNRadar';

const TabNavigator = createBottomTabNavigator(
  {
    ChartKit: {
      screen: RNChartKit,
      navigationOptions: {
        title: 'RNChartKit',
      },
    },
    SvgCharts: {
      screen: RNSvgCharts,
      navigationOptions: {
        title: 'RNSvgCharts',
      },
    },
    RNRadar: {
      screen: RNRadar,
      navigationOptions: {
        title: 'RNRadar',
      },
    },
  },
  {
    initialRouteName: 'ChartKit',
    tabBarOptions: {
      activeTintColor: '#000000',
      inactiveTintColor: '#c8c8c8',
      style: {
        height: 50,
      },
    },
  },
);

export default TabNavigator;
