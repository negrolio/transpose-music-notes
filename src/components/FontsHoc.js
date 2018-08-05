import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Font } from 'expo';

export default FontsHoc = (Component) => {
    return class ComponenWithFont extends Component {
        constructor(props){
            super(props)
            this.state = {
                fontLoaded: false
            }
          }
        
        // to load the fonts
        async componentDidMount() {
        await Font.loadAsync({
            'PermanentMarker-Regular': require('./../../assets/fonts/PermanentMarker-Regular.ttf'),
            'AmaticSC-Regular'       : require('./../../assets/fonts/AmaticSC-Regular.ttf'),
            'AmaticSC-Bold'          : require('./../../assets/fonts/AmaticSC-Bold.ttf')
        });
        this.setState({ fontLoaded: true });
        }
        render() {
            return (
              <View>
                {this.state.fontLoaded ? (
                  <Component {...this.props}/>
                ) : null}
              </View>
            );
          }
    }
}
