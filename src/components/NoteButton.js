import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

class NoteButton extends Component {

  onButtonPressed = ()=>{
    this.props.onPress(this.props.param)
  }

  render() {
    return (
      <View>
        <TouchableOpacity 
          style={[styles.container, {
            backgroundColor: this.props.pressed ? '#419CBA' : this.props.transposed ? '#41BA8C' : '#F7F8E0',
            borderRadius: this.props.circle ? 50 : 10
          }]}
          onPress={this.onButtonPressed}>
          <Text style={[styles.text,{
              fontSize: this.props.textSize || 50}]}>
            {this.props.text}
          </Text>
        </TouchableOpacity >
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      width: '100%',
      height: '100%',
      padding: 3,
      borderWidth: 1,
      borderColor: '#ddd',
      borderBottomWidth: 0,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 1,
      marginLeft: 5,
      marginRight: 5,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row'
  },
  text: {
      fontFamily:'AmaticSC-Bold',
  }
});

export default NoteButton;
