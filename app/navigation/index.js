import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import StartPage from '../screen/Start';
import TabNavigator from '../tabs';

const AppEntry = createStackNavigator({
  // StartPage: {
  //   screen: StartPage,
  //   navigationOptions: ({navigation}) => ({
  //     header: null,
  //   }),
  // },
  TabPage: {
    screen: TabNavigator,
    navigationOptions: ({navigation}) => ({
      header: null,
    }),
  },
});

export default createAppContainer(AppEntry);
