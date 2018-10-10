import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import NoteButton from './NoteButton';

class ListOfTrasposedNotes extends Component {

  constructor (props) {
    super(props);
    this.state = {
      arrayOfButtons: this.props.listOfNotes
    }
  }

  renderList = ()=>{
    return this.props.listOfNotes.map((elem, idx)=>{
      return (
        <View style={styles.containerButton} key={`${elem}+${idx}`}>
          <NoteButton text={elem} textSize={30} circle={true}/>
        </View>
      )
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView horizontal={true}>
          {this.renderList()}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: 300,
    backgroundColor:'#e8df8d',
    borderRadius: 20
  },
  containerButton: {
    width: 50,
    height: 50,
    margin: 10,
  }
});

export default ListOfTrasposedNotes;

