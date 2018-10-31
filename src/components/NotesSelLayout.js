import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import NoteButton from './NoteButton';

class NotesSelLayout extends Component {

  renderThreeColumnButtons = (array, from, to)=>{
    const array3buttons = []
    for (let index = from; index <= to; index++) {
      const element = array[index];
      array3buttons.push(
        <View style={{margin:15, height:70, width:70}} key={element.title}>
          <NoteButton 
            text={element.title}
            pressed={element.pressed}
            transposed={element.transposed}
            onPress={this.props.action}
            param={element.title} />
        </View>
        )
    }
    return (
      <View style={styles.row}>
        {array3buttons}
      </View>
    )
  }

  render() {
  return (
    <View style={styles.container}>
      {this.renderThreeColumnButtons(this.props.notes,0,2)}
      {this.renderThreeColumnButtons(this.props.notes,3,5)}
      {this.renderThreeColumnButtons(this.props.notes,6,8)}
      {this.renderThreeColumnButtons(this.props.notes,9,11)}
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
  //flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  },
  row: {
    flexDirection: 'row'
  }
});

export default NotesSelLayout;
