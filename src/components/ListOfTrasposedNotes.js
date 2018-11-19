import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import NoteButton from './NoteButton';
import Display from 'react-native-display';

class ListOfTrasposedNotes extends Component {

  constructor (props) {
    super(props);
    this.state = {
      arrayOfButtons: this.props.listOfNotes,
      pressedExpanded: false,
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

  togglePressedList = ()=>{
    this.setState((prevState)=>({
      pressedExpanded: !prevState.pressedExpanded
    }))
  }

  render() {
    return (
      <View style={{flexDirection:'row'}}>

        <View style={styles.triangle}>
          <TouchableOpacity onPress={this.togglePressedList} >
            <Image source={require("./../../public/img/triangle.png")} 
                            style={{height: '100%', width: '100%'}}/>
          </TouchableOpacity>
        </View>

        <View style={styles.listContainer}>
          <ScrollView ref="scrollView" horizontal={true}>
            <View>

              <Display
                enable={this.state.pressedExpanded} 
                enterDuration={500} 
                exitDuration={250}
                exit="fadeOutDown"
                enter="fadeInUp"
                >
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  listContainer: {
    flex: 11/12,
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
  },
  triangle: {
    flex: 1/12,
    //backgroundColor: 'green',
    width: 10,
    height: 20,
    marginTop: 50
  }
});

export default ListOfTrasposedNotes;

