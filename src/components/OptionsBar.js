import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import ArrowUpDownAnimated from '../components/ArrowUpDownAnimated';
import ImgButton from '../components/ImgButton';
import SwitchSharpFlat from '../components/SwitchSharpFlat';

const OptionsBar = (props) => {

  return (
    <View style={styles.barOptions}>
      <ArrowUpDownAnimated action={props.toggleExpandPressedList}/>
      <ImgButton //fullscreen button
        onPress={props.toggleFullScreen}
        styles={styles.fullScreenBtn}
        img={require("./../../public/img/fullScreen.png")}/>
      <ImgButton //save button
        onPress={props.showPrompt}
        styles={styles.saveIcon}
        img={require('./../../public/img/save.png')}/>
      {/* switch to change the buttons between sharp and flats */}
      <SwitchSharpFlat onSwitch={props.switchBetweenSharpFlat}/>
    </View>
  )

}

const styles = StyleSheet.create({
  barOptions: {
    flex: 1,
    flexDirection: 'row',
    height: 45,
    width: Dimensions.get('window').width,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  fullScreenBtn: {
    width: 40,
    height: 40,
  },
  saveIcon: {
    width: 40,
    height: 40,
  }
});


export default OptionsBar;