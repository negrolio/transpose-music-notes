import React, { Component } from 'react';
import { View, Text, StyleSheet, Switch, BackHandler } from 'react-native';
import utilsFunctions from '../utils/utilsFunctions';
import SwitchSharpFlat from '../components/SwitchSharpFlat';
import ListOfTrasposedNotes from '../components/ListOfTrasposedNotes';
import NotesSelLayout from '../components/NotesSelLayout';

const notesWithSharps = ['C','C#','D','D#','E','F','F#','G','G#','A','A#','B'];
const notesWithFlats =  ['C','DB','D','EB','E','F','GB','G','AB','A','BB','B']

class NotesScreen extends Component {
  static navigationOptions = ({navigation})=>({
    title: navigation.getParam('title'),
    headerStyle: {
      backgroundColor: '#F7F8E0',
    },
    headerTintColor: '#353528',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerLeft: <View></View> //ugly way of eliminate the back arrow button on header bar
  });


  constructor (props) {
    super(props);
    this.state = {
      allNotes: this.setArrayOfNotesWithDetails(notesWithSharps),
      flatNotes: false,
      directionAndQuantityToTranspose: props.navigation.getParam('data'),
      showList: false,
      listOfTransposedNotes: []
    }
  }
  
  componentDidMount() {
    this.backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      this.props.navigation.goBack(); // works best when the goBack is async
      //this.props.navigation.navigate('InstrumentSelection',{title:'Select initial instrument'})
      return true;
    });
  }

  componentWillUnmount() {
    this.backHandler.remove();
  }

  setArrayOfNotesWithDetails = (notesArray, nameNote = '', transposedNote = '')=>{
    return notesArray.map((elem)=>{
      return {
        title: elem,
        pressed: elem === nameNote,
        transposed: elem === transposedNote
      }
    })
  }

  onButtonPress = (buttonPressed)=>{
    this.transposeAndSave(buttonPressed)
  }
  
  transposeAndSave = (noteToTranspose)=>{
    const { flatNotes, directionAndQuantityToTranspose } = this.state;
    const { quanty, direction } = directionAndQuantityToTranspose;
  
    const allNotes = flatNotes ? notesWithFlats : notesWithSharps;
    const transposedNote = utilsFunctions.transportByHalfTones(noteToTranspose,quanty,direction,allNotes)
    this.setState((prevState)=>({
      allNotes: this.setArrayOfNotesWithDetails(allNotes, noteToTranspose, transposedNote),
      listOfTransposedNotes: [...prevState.listOfTransposedNotes,transposedNote],
      showList: true
    }))
  }

  switchBetweenSharpFlat = () => {
    this.setState((prevState)=>({
      // if flatNotes state is not false we set the array of note with details with the noteWithFlats variable
      allNotes: !prevState.flatNotes ? this.setArrayOfNotesWithDetails(notesWithFlats) : this.setArrayOfNotesWithDetails(notesWithSharps),
      flatNotes: !prevState.flatNotes
    }))
  }

  render() {
    console.log(this.state.listOfTransposedNotes)
    return (
      <View style={styles.container}>
        {/* List of transposed notes */}
        {this.state.showList && <ListOfTrasposedNotes listOfNotes={this.state.listOfTransposedNotes}/>}
        {/* switch to change the buttons between sharp and flats */}
        <View style={styles.switch}>
          <SwitchSharpFlat onSwitch={this.switchBetweenSharpFlat}/>
        </View>
        {/* All the note buttons to select and transpose */}
        <View>
          <NotesSelLayout notes={this.state.allNotes} action={this.onButtonPress}/>
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
  switch: {
    alignSelf:'flex-end',
    height: 40,
    margin: 10,
    marginRight:20
  }
});

export default NotesScreen;
