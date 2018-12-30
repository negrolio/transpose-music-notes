import React, { Component } from 'react';
import { View, AsyncStorage } from 'react-native';
import Prompt from 'react-native-prompt-crossplatform';


class SaveList extends Component {
  constructor(props){
    super(props);
    this.state = {
      promptValue : ''
    }
  }

  _storeData = async () => {
    const { transposed, pressed, directionAndQuantityToTranspose } = this.props;
    if (!this.state.promptValue) return;

    const data = JSON.stringify({
      transposedList: transposed,
      pressedList: pressed,
      dataFromTo: directionAndQuantityToTranspose
    })

    try {
      await AsyncStorage.setItem(this.state.promptValue,data);
    } catch (error) {
      // Error saving data
      console.log(error)
    }
  }

  render() {
    return (
      <View>
        <Prompt
          title="Save List"
          inputPlaceholder="Enter a title for the list"
          isVisible={true}
          primaryColor={'#419CBA'}
          onChangeText={(text) => {
            this.setState({ promptValue: text });
          }}
          onCancel={() => {
            this.setState({
                promptValue: '',
            });
            this.props.toggleShow()
          }}
          onSubmit={() => {
            this._storeData();
            this.setState({
            });
            this.props.toggleShow()
          }}
          onBackButtonPress={()=>{
            this.setState({
              promptValue: '',
            });
            this.props.toggleShow()
          }}
        />
      </View>
    );
  }
}

export default SaveList;
