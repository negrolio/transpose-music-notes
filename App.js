import React from 'react';
import { View, Dimensions } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import FromInstrument from './src/screens/FromInstrument';
import FontsHoc from './src/components/FontsHoc';

const RootStack = createStackNavigator(
  {
    Home: FontsHoc(HomeScreen),
    FromInstrument: FromInstrument
  },
  {
    initialRouteName: 'Home',
    /* The header config from HomeScreen is now here */
    navigationOptions: {
      headerStyle: {
        height: 0
      }
    },
  }
);

let ScreenHeight = Dimensions.get("window").height;

export default class App extends React.Component {

  render() {
    return (
      <View style={{height:ScreenHeight, backgroundColor:'red'}}>
        <RootStack />
      </View>
    );
  }
}
