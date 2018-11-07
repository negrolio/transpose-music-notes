import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import NoteButton from './NoteButton';

class ListOfTrasposedNotes extends Component {

  constructor (props) {
    super(props);
    this.state = {
      arrayOfButtons: this.props.listOfNotes
    }
  }

  componentDidUpdate (prevProps){
    // only scroll to end if we add a note, not when remove it
    if (prevProps.listOfNotes.transposed.length < this.props.listOfNotes.transposed.length) {
      // we made a delay to give time to render the entire list before scroll to end
      setTimeout(() => {
        this.refs.scrollView.scrollToEnd()
      }, 50);
    }
  }

  renderList = ()=>{
    const { pressed } = this.props.listOfNotes
    return this.props.listOfNotes.transposed.map((elem, idx)=>{
      return (
        <View key={`${elem}+${idx}`}>

          <View style={styles.containerButton}>
            <NoteButton 
              text={pressed[idx]}
              textSize={30}
              circle={true}
              onPress={this.props.remove}
              param={idx}
              pressed={true} />
          </View>

          <Image source={require('../../public/img/arrow-down.png')} style={styles.downArrowMiddle}/>

          <View style={styles.containerButton}>
            <NoteButton 
              text={elem}
              textSize={30}
              circle={true}
              onPress={this.props.remove}
              param={idx}
              transposed={true} />
          </View>
        </View>
      )
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView ref="scrollView" horizontal={true}>
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
    borderRadius: 20,
    marginTop: 30
  },
  containerButton: {
    width: 50,
    height: 50,
    margin: 10,
  },
  downArrowMiddle: {
    width:22,
    height:22,
    marginLeft: 29
  }
});

export default ListOfTrasposedNotes;

