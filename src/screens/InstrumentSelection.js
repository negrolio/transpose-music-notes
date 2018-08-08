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
          selectedButton: ''
        }
      }

    onFirstSelection = (e, tone) => {
        //console.log(ReactNativeComponentTree.getInstanceFromNode(e.target))
        console.log(tone)
        
        // when we select an instrument, change the title bar, save that already selected one, and save the number target
        if (!this.state.firstSelected) {
            this.setState({
                titleScreen: 'To',
                firstSelected: true,
                selectedButton: e.target
            })
            this.props.navigation.setParams({ title: 'Select end instrument' })
        } else {
            // if in the second selection we press the same button that before we have to reset the values
            if (this.state.selectedButton === e.target) {
                this.setState({
                    titleScreen: 'from',
                    firstSelected: false,
                    selectedButton: ''
                })
                this.props.navigation.setParams({ title: 'Select initial instrument' })
            } else {
                this.goToNotesScreen()
            }
        }
    }

    goToNotesScreen = () => {
        this.props.navigation.navigate('Home',{title:'Select initial instrument'})
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