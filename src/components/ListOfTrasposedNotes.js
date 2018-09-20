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
    return this.props.listOfNotes.map((elem)=>{
      return (
        <ScrollView horizontal={true} key={elem}>
          <View style={styles.containerButton}>
            <NoteButton text={elem} textSize={30}/>
          </View>
        </ScrollView>
      )
    })
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderList()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: 200
  },
  containerButton: {
    width: 50,
    height: 50
  }
});

export default ListOfTrasposedNotes;

