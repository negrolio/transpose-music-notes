import React from 'react';
import { View, Dimensions } from 'react-native';
import { AppLoading, Asset, Font } from 'expo';
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

function cacheImages(images) {
  return images.map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}

export default class App extends React.Component {

    state = {
      isReady: false,
    };
  
    async _loadAssetsAsync() {
      const imageAssets = cacheImages([
        require('./public/img/home/crece2.jpg'),
        require('./public/img/arrow-down.png'),
        require('./public/img/exit-full-screen.png'),
        require('./public/img/fullScreen.png'),
        require('./public/img/note.png'),
        require('./public/img/open-file.png'),
        require('./public/img/piano.png'),
        require('./public/img/save.png'),
        require('./public/img/sax.png'),
        require('./public/img/triangle.png'),
        require('./public/img/trumpet.png')
      ]);

      await Promise.all([...imageAssets]);
    }

  render() {

    // avoid the landscape position
    Expo.ScreenOrientation.allow(Expo.ScreenOrientation.Orientation.PORTRAIT);

    // if images are not loading yet, the splash img still be there
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this._loadAssetsAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      );
    }

    return (
      <View style={{height:'100%'}}>
        <RootStack />
      </View>
    );
  }
}
