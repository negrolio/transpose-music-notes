import React, { Component } from 'react';
import { View, StyleSheet, BackHandler } from 'react-native';
import utilsFunctions from '../utils/utilsFunctions';
import ListOfTrasposedNotes from '../components/ListOfTrasposedNotes';
import NotesSelLayout from '../components/NotesSelLayout';
import SaveList from '../components/SaveList';
import OptionsBar from '../components/OptionsBar';

const notesWithSharps = ['C','C#','D','D#','E','F','F#','G','G#','A','A#','B'];
const notesWithFlats =  ['C','Db','D','Eb','E','F','Gb','G','Ab','A','Bb','B']

class NotesScreen extends Component {

  constructor (props) {
    super(props);
    this.state = {
      allNotes: this.setArrayOfNotesWithDetails(notesWithSharps),
      flatNotes: false,
      fromNoteToNote: props.navigation.getParam('dataFromTo'),
      listOfPressedNotes: props.navigation.getParam('pressedList') || [],
      listOfTransposedNotes: props.navigation.getParam('transposedList') || [],
      pressedListExpanded: false,
      fullScreenList: false,
      showPrompt: false
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
    const { flatNotes, fromNoteToNote } = this.state;
    const { from, to } = fromNoteToNote;
  
    const allNotes = flatNotes ? notesWithFlats : notesWithSharps;
    const transposedNote = utilsFunctions.transposeNoteFromTo(noteToTranspose,from,to,allNotes)
    this.setState((prevState)=>({
      allNotes: this.setArrayOfNotesWithDetails(allNotes, noteToTranspose, transposedNote),
      listOfPressedNotes: [...prevState.listOfPressedNotes, noteToTranspose],
      listOfTransposedNotes: [...prevState.listOfTransposedNotes, transposedNote],
    }))
  }

  switchBetweenSharpFlat = () => {
    this.setState((prevState)=>({
      // if flatNotes state is not false we set the array of note with details with the noteWithFlats variable
      allNotes: !prevState.flatNotes ? this.setArrayOfNotesWithDetails(notesWithFlats) : this.setArrayOfNotesWithDetails(notesWithSharps),
      flatNotes: !prevState.flatNotes
    }))
  }

  removeATransposedNote = (indexOfSelectedNote) => {
    const allNotes = this.state.flatNotes ? notesWithFlats : notesWithSharps;

    this.setState((prevState)=>({
      listOfTransposedNotes: prevState.listOfTransposedNotes.filter((elem, idx ) => idx !== indexOfSelectedNote),
      listOfPressedNotes: prevState.listOfPressedNotes.filter((elem, idx ) => idx !== indexOfSelectedNote),
      // we set again the notes with details, without pressed and transposed, to reset the list
      allNotes: this.setArrayOfNotesWithDetails(allNotes)
    }))
  }

  toggleExpandPressedList = ()=>{
    this.setState((prevState)=>({
      pressedListExpanded: !prevState.pressedListExpanded
    }))
  }
  
  toggleFullScreenList = ()=>{
    this.setState((prevState)=>({
      fullScreenList: !prevState.fullScreenList
    }))
  }

  showPrompt = () => {
    this.setState(prevState=>({
      showPrompt: !prevState.showPrompt
    }))
  }

  render() {
    const { pressedListExpanded, listOfTransposedNotes, listOfPressedNotes, showPrompt, fromNoteToNote } = this.state;

    return (
      <View style={styles.container}>

        {/* List of transposed notes */}
        <View style={{flex:pressedListExpanded?3:1.5}}>
          <ListOfTrasposedNotes 
            remove={this.removeATransposedNote}
            pressedExpanded={pressedListExpanded}
            fullScreen={this.state.fullScreenList}
            toggleFullScreen={this.toggleFullScreenList}
            listOfNotes={{
              transposed: this.state.listOfTransposedNotes,
              pressed: this.state.listOfPressedNotes}}/>
        </View>

        <OptionsBar toggleExpandPressedList={this.toggleExpandPressedList}
                    toggleFullScreen={this.toggleFullScreenList}
                    showPrompt={this.showPrompt}
                    switchBetweenSharpFlat={this.switchBetweenSharpFlat} />

        {/* All the note buttons to select and transpose */}
        <View style={styles.notesButtons}>
          <NotesSelLayout notes={this.state.allNotes} action={this.onButtonPress}/>
        </View>

        {showPrompt &&
         <SaveList
          transposed={listOfTransposedNotes}
          pressed={listOfPressedNotes}
          toggleShow={this.showPrompt}
          fromNoteToNote={fromNoteToNote}/>}
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
  notesButtons: {
    flex: 5,
    zIndex:-1
  }
});

export default NotesScreen;
