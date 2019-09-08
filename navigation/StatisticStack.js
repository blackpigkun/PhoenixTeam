import React, {Component} from 'react';
import { Platform, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import StatisticScreen from '../screens/StatisticScreen';
import ItemDetailScreen from '../screens/ItemDetailScreen';
const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});
const StatisticStack = createStackNavigator(
  {
    Statistic: StatisticScreen,
    ItemDetail: ItemDetailScreen,
  },
  {
    headerMode: 'screen',
    cardStyle: { backgroundColor: '#fff' },
    
  },
  config
);

StatisticStack.navigationOptions = {
  tabBarLabel: <View/>,
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={ `ios-checkbox${focused ? '' : ''}`
          
      }
    />
  ),
};
//StatisticStac
export default StatisticStack;