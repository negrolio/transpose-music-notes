import React, { Component } from 'react';
import { View, Text, StyleSheet, Switch, BackHandler } from 'react-native';
import NoteButton from '../components/NoteButton';
import utilsFunctions from '../utils/utilsFunctions';
import SwitchSharpFlat from '../components/SwitchSharpFlat';
import ListOfTrasposedNotes from '../components/ListOfTrasposedNotes';

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

  renderThreeColumnButtons = (array, from, to)=>{
    const array3buttons = []
    for (let index = from; index <= to; index++) {
      const element = array[index];
      array3buttons.push(
        <View style={{margin:20, height:80, width:80}} key={element.title}>
          <NoteButton 
            text={element.title}
            pressed={element.pressed}
            transposed={element.transposed}
            onPress={this.onButtonPress} />
        </View>
        )
    }
    return (
      <View style={styles.row}>
        {array3buttons}
      </View>
    )
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
        {this.state.showList && <ListOfTrasposedNotes listOfNotes={this.state.listOfTransposedNotes}/>}
        <SwitchSharpFlat onSwitch={this.switchBetweenSharpFlat}/>
          {this.renderThreeColumnButtons(this.state.allNotes,0,2)}
          {this.renderThreeColumnButtons(this.state.allNotes,3,5)}
          {this.renderThreeColumnButtons(this.state.allNotes,6,8)}
          {this.renderThreeColumnButtons(this.state.allNotes,9,11)}
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
    flexDirection: 'row'
  }
});

export default NotesScreen;
