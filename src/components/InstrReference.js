import React from 'react';
import { View, Image, StyleSheet} from 'react-native';
import instrumentImg from '../utils/instrumentImages';
import Display from 'react-native-display';

function InstrReference ( {expandedList, fromTo} ) {
  return (
    <View style={[styles.refInstrument,{height:expandedList ? 160 : '100%'}]}>
      <Display
        enable={expandedList} 
        enterDuration={500} 
        exitDuration={250}
        exit="fadeOutDown"
        enter="fadeInUp">
        <Image source={instrumentImg[fromTo.from]} style={{height:30,width:30}}/>
        <Image source={require('../../public/img/arrow-down.png')} style={{width:18,height:18,marginTop:30,alignSelf:'center'}}/>
      </Display>
      <Image source={instrumentImg[fromTo.to]} style={{height:30,width:30}} />
    </View>
  );
}

const styles = StyleSheet.create({
  refInstrument: {
    justifyContent:'space-around',
    paddingLeft: 10,
    paddingRight: 10,
    borderColor: 'black',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 4
  }
});

export default InstrReference;
