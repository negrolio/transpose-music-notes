import React from 'react';
import { View, Dimensions } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import InstrumentSelection from './src/screens/InstrumentSelection'
import FontsHoc from './src/components/FontsHoc';
import NotesScreen from './src/screens/NotesScreen';
import FilesList from './src/screens/FilesList'

const RootStack = createStackNavigator(
  {
    Home: FontsHoc(HomeScreen),
    InstrumentSelection: InstrumentSelection,
    NotesScreen: NotesScreen,
    FilesList: FilesList
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

    // avoid the landscape position
    Expo.ScreenOrientation.allow(Expo.ScreenOrientation.Orientation.PORTRAIT);

    return (
      <View style={{height:'100%'}}>
        <RootStack />
      </View>
    );
  }
}
