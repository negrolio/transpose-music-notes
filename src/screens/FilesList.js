import React, { Component } from 'react';
import { View, Text, StyleSheet, AsyncStorage, TouchableOpacity, Alert } from 'react-native';

class FilesList extends Component {
  constructor (props) {
    super(props);
    this.state = {
      list: []
    }
  }

  componentDidMount () {
    this.getList()
  }

  getList = async () => {
    try {
      const value = await AsyncStorage.getAllKeys();
      this.setState({list:value})
    } catch (error) {
      // Error retrieving data
    }
  }

  removeItem = async (item) => {

    try {
      await AsyncStorage.removeItem(item);

      const newList = this.state.list.filter((elem) => { 
        return elem !== item
      })
  
      this.setState({list:newList})
      //this.setState({list:value})
    } catch (error) {
      // Error retrieving data
    }
  }

  goToFile = async (item) => {
    try {
      const value = await AsyncStorage.getItem(item);
      const parsed = JSON.parse(value);
      this.props.navigation.navigate(
        'NotesScreen',{
          dataFromTo:parsed.dataFromTo,
          pressedList:parsed.pressedList,
          transposedList:parsed.transposedList})
    } catch (error) {
      // Error retrieving data
    }
  }

  onPressFile = (id) => {
    Alert.alert(
      'What do you want?',
      '',
      [
        {text: 'open', onPress: () => this.goToFile(this.state.list[id])},
        {text: 'cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'delete', onPress: () => this.removeItem(this.state.list[id])},
      ],
      { cancelable: false }
    )
  }

  render() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose a file to open or delete</Text>
      {this.state.list.map((fileName, index)=>{
        return <TouchableOpacity onPress={()=>{this.onPressFile(index)}} style={styles.buttons} key={`${fileName}${index}`}>
                <Text style={styles.fileName}>{fileName}</Text>
              </TouchableOpacity>
      })}
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'stretch',
  backgroundColor: '#F0E68C',
  },
  title: {
    fontFamily:'AmaticSC-Regular',
    color:'#353528',
    fontSize: 40,
    marginBottom: 80
  },
  fileName: {
    fontFamily:'AmaticSC-Regular',
    fontSize: 20
  },
  buttons: {
    padding: 3,
    borderWidth: 1,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  }
});

export default FilesList;
