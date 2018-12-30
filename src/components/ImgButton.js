import React from 'react';
import { View, TouchableOpacity, Image} from 'react-native';

function ImgButton (props) {
  return (
    <TouchableOpacity onPress={props.onPress} style={props.styles}>
      <Image source={props.img} style={{height: '100%', width: '100%'}}/>
    </TouchableOpacity>
  );
}

export default ImgButton;
