import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Image, Dimensions, TouchableOpacity } from 'react-native';
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
    const heightScreen = Dimensions.get('window').height;
    const widthScreen = Dimensions.get('window').width;
    const { pressedExpanded, fullScreen } = this.props;
    return (
      <View style={[styles.listContainer,{
          height:this.props.fullScreen ?
            heightScreen - 70 :
            pressedExpanded ? 160 : 70,
          marginTop: this.props.fullScreen ? 30 : 0,
          width: this.props.fullScreen ? widthScreen - 15 : widthScreen - 50
        }]}>
        <ScrollView ref="scrollView" horizontal={!fullScreen}>
          <View>

            {!fullScreen &&
            <Display
              enable={pressedExpanded} 
              enterDuration={500} 
              exitDuration={250}
              exit="fadeOutDown"
              enter="fadeInUp">
              <View style={{flexDirection:'row'}}>
                {this.renderPressedList()}
              </View>
            </Display>}

            <View style={{flexDirection:'row', flexWrap:fullScreen ? 'wrap' : 'nowrap'}}>
              {this.renderTransposedList()}
            </View>

          </View>
        </ScrollView>

        {fullScreen && 
          <TouchableOpacity onPress={this.props.toggleFullScreen} style={styles.exitFullScreenBtn}>
            <Image source={require('../../public/img/exit-full-screen.png')} style={{width:40,height:40}}/>
          </TouchableOpacity>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  listContainer: {
    alignItems: 'center',
    backgroundColor:'#e8df8d',
    zIndex: 1
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
  },
  exitFullScreenBtn: {
    bottom: 0
  }
});

export default ListOfTrasposedNotes;

