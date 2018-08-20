import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../components/Header';
import InstrSelLayout from '../components/InstrSelLayout';
//import ReactNativeComponentTree from 'react-native/Libraries/Renderer/shims/ReactNativeComponentTree';

class InstrumentSelection extends Component {
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
          titleScreen: 'From',
          firstSelected: false,
          selectedButton: '',
          fromNote: '',
          toNote: ''
        }
      }

    componentDidUpdate () {
        this.state.toNote !== '' && console.log('soy will')
    }

    onFirstSelection = (e, tone) => {

        // when we select an instrument, change the title bar, save was a selected, and save the number target
        if (!this.state.firstSelected) {
            this.setState({
                titleScreen: 'To',
                firstSelected: true,
                selectedButton: e.target,
                fromNote: tone
            })
            this.props.navigation.setParams({ title: 'Select end instrument' })
        } else {
            // if press the same button twice we have to reset the values
            if (this.state.selectedButton === e.target) {
                this.setState({
                    titleScreen: 'from',
                    firstSelected: false,
                    selectedButton: '',
                    fromNote: ''
                })
                this.props.navigation.setParams({ title: 'Select initial instrument' })
            } else {
            // if press a diferent button we have to go to another screen
                this.setState({toNote: tone},()=>{
                    this.goToNotesScreen()
                })
            }
        }
    }

    goToNotesScreen = () => {
        this.props.navigation.navigate('NotesScreen',{title:'Select note to transpose'})
    }

    render() {
        return (
            <View style={styles.container}>
                <Header title={this.state.titleScreen} />
                <InstrSelLayout onPress={this.onFirstSelection} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        alignItems: 'center',
        backgroundColor: '#F0E68C',
    },
});

export default InstrumentSelection;