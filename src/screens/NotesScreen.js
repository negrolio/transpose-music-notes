import React, { Component } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import SquareButton from '../components/SquareButton';
import transportByHalfTones from '../utils/transposer';
import SwitchSharpFlat from '../components/SwitchSharpFlat';

const notesWithSharps = ['C','C#','D','D#','E','F','F#','G','G#','A','A#','B'];
const notesWithFlats =  ['C','DB','D','EB','E','F','GB','G','AB','A','BB','B']

class NotesScreen extends Component {
  static navigationOptions = ({navigation})=>({
    title: navigation.getParam('title', 'A Nested Details Screen'),
    headerStyle: {
      backgroundColor: '#F7F8E0',
    },
    headerTintColor: '#353528',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  });

  constructor (props) {
    super(props);
    this.state = {
      allNotes: this.setArrayOfNotesWithDetails(notesWithSharps),
      //flatNotes: this.setArrayOfNotesWithDetails(notesWithFlats),
      flatNotes: false
    }
  }

  // componentWillMount(){
  //   if(!this.state.sharpNotes) {
  //     this.setState({
  //       allNotes: this.setArrayOfNotesWithDetails(notesWithFlats)
  //     })
  //   }
  // }

  setArrayOfNotesWithDetails = (notesArray, nameNote = '', transposedNote = '')=>{
    return notesArray.map((elem)=>{
      return {
        title: elem,
        pressed: elem === nameNote,
        transposed: elem === transposedNote
      }
    })
  }

  render3Buttons = (array, from, to)=>{
    const array3buttons = []
    for (let index = from; index <= to; index++) {
      const element = array[index];
      array3buttons.push(
        <SquareButton 
          text={element.title}
          pressed={element.pressed}
          transposed={element.transposed}
          onPress={this.onButtonPress}
          key={element.title} />)
    }
    return array3buttons
  }

  onButtonPress = (buttonPressed)=>{
    const transposedNote = transportByHalfTones(buttonPressed,2,'up')
    this.setState({
      allNotes: this.setArrayOfNotesWithDetails(notesWithSharps, buttonPressed, transposedNote)
    })
  }

  swithBetweenSharpFlat = () => {
    !this.state.flatNotes ?
      this.setState({
        allNotes: this.setArrayOfNotesWithDetails(notesWithFlats),
        flatNotes: true
      }) :
      this.setState({
        allNotes: this.setArrayOfNotesWithDetails(notesWithSharps),
        flatNotes: false
      })
    // console.log('hola')
    // this.setState((prevState)=>({
    //   sharpNotes:!prevState.sharpNotes
    // }))
  }

  render() {
    console.log(this.state,'state')
    return (
      <View style={styles.container}>
        <SwitchSharpFlat  onSwitch={this.swithBetweenSharpFlat}/>
        <View style={styles.row}>
          {this.render3Buttons(this.state.allNotes,0,2)}
        </View>
        <View style={styles.row}>
          {this.render3Buttons(this.state.allNotes,3,5)}
        </View>
        <View style={styles.row}>
          {this.render3Buttons(this.state.allNotes,6,8)}
        </View>
        <View style={styles.row}>
          {this.render3Buttons(this.state.allNotes,9,11)}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0E68C',
  },
  row: {
    //justifyContent: 'space-around',
    flexDirection: 'row'
  }
});

export default NotesScreen;
