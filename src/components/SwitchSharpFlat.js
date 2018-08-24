import React, { Component } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';

class SwitchSharpFlat extends Component {

    constructor (props) {
      super(props);
      this.state = {
      valueSwitch: false
      }
    }

    onSwitchPress = (value) => {
      this.setState((prevState)=>({
        valueSwitch: !prevState.valueSwitch
      }))
      this.props.onSwitch()
    }

    render() {
      return (
        <View style={styles.container}>
          <Text style={styles.text}>#</Text>
          <Switch
              onValueChange={this.onSwitchPress}
              value={this.state.valueSwitch}
              tintColor={'#A8A162'}
              thumbTintColor={'white'}
              onTintColor={'#A8A162'}/>
          <Text style={styles.text}>b</Text>
        </View>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily:'AmaticSC-Bold',
    fontSize: 40
  }
});

export default SwitchSharpFlat;
