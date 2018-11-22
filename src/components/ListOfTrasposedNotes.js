import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Image, Dimensions } from 'react-native';
import NoteButton from './NoteButton';
import Display from 'react-native-display';

class ListOfTrasposedNotes extends Component {

  constructor (props) {
    super(props);
    this.state = {
      arrayOfButtons: this.props.listOfNotes,
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

  renderTransposedList = ()=>{
    return this.props.listOfNotes.transposed.map((elem, idx)=>{
      return (
        <View key={`${elem}+${idx}`} style={styles.containerButton}>
          <NoteButton 
            text={elem}
            textSize={30}
            circle={true}
            onPress={this.props.remove}
            param={idx}
            transposed={true} />
        </View>
      )
    })
  }

  renderPressedList = ()=>{
    return this.props.listOfNotes.pressed.map((elem, idx)=>{
      return (
        <View key={`${elem}+${idx}`}>

          <View style={styles.containerButton}>
            <NoteButton 
              text={elem}
              textSize={30}
              circle={true}
              onPress={this.props.remove}
              param={idx}
              pressed={true} />
          </View>

          <Image source={require('../../public/img/arrow-down.png')} style={styles.downArrowMiddle}/>
        </View>
      )
    })
  }

  render() {
    return (
      <View style={styles.listContainer}>
        <ScrollView ref="scrollView" horizontal={true}>
          <View>

            <Display
              enable={this.props.pressedExpanded} 
              enterDuration={500} 
              exitDuration={250}
              exit="fadeOutDown"
              enter="fadeInUp">
              <View style={{flexDirection:'row'}}>
                {this.renderPressedList()}
              </View>
            </Display>

            <View style={{flexDirection:'row'}}>
              {this.renderTransposedList()}
            </View>

          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  listContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    width: Dimensions.get('window').width - 15,
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
    marginLeft: 28.5
  }
});

export default ListOfTrasposedNotes;

