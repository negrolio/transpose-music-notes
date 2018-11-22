import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Animated } from 'react-native';

class ArrowUpDownAnimated extends Component {

  constructor (props) {
    super(props);

    this.icon = require("./../../public/img/triangle.png")

    this.state = {
      expanded: false,
      rotateAnimation: new Animated.Value(0),
      deg: '0deg'
    }
  }

  onPress = ()=>{
    this.props.action()
    this.toggle()
  }

  toggle = ()=>{

    let initialValue = !this.state.expanded ? 0 : 1,
        finalValue   = !this.state.expanded ? 1 : 0;

    this.setState((prevState)=>({
      expanded: !prevState.expanded
    }))

    this.state.rotateAnimation.setValue(initialValue);

    Animated.timing(
      this.state.rotateAnimation,
      {
        toValue: finalValue,
        duration: 500,
      }
    ).start()
  }

  render() {
    const deg = this.state.rotateAnimation.interpolate({
      inputRange: [0,1],
      outputRange: ['0deg','180deg']
    })
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={this.onPress} >
        <Animated.Image source={this.icon} style={{height: '100%', width: '100%', transform: [{rotate: deg}]}}/>
      </TouchableOpacity>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
  width: 50,
  height: 40,
  },
});

export default ArrowUpDownAnimated;
