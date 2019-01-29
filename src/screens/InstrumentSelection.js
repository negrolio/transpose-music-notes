import React, { Component } from 'react';
import { View, StyleSheet, BackHandler } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import Header from '../components/Header';
import InstrSelLayout from '../components/InstrSelLayout';
import utilsFunctions from '../utils/utilsFunctions';

class InstrumentSelection extends Component {

    static navigationOptions = ({navigation})=>({
        header: null
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
    componentDidMount() {
        this.backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
            this.props.navigation.navigate('Home'); 
            return true;
        });
    }


    componentWillUnmount() {
        this.backHandler.remove();
    }

    onSelectAnInstrument = (e, tone) => {

        // when we select an instrument, change the title bar, save was a selected, and save the number target
        if (!this.state.firstSelected) {
            this.setState({
                titleScreen: 'To',
                firstSelected: true,
                selectedButton: e.target,
                fromNote: tone
            })
        } else {
            // if press a diferent button we have to go to the next screen
                this.setState({toNote: tone},()=>{
                    const { fromNote, toNote } = this.state;
                    this.resetState() //before go to screen we reset the state
                    this.goToNotesScreen(fromNote, toNote)
                })
        }
    }

    goToNotesScreen = (fromNote, toNote) => {
        this.props.navigation.navigate(
            'NotesScreen',
            {title:'Select note to transpose', dataFromTo: {from:fromNote,to:toNote}}
        )
    }
    
    // because react navigation doesn't trigger the componentWillUnmount, we have to manually reset the state,
    // maybe this need a review in the future
    resetState = ()=>{
        const resetAction = StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({routeName: 'InstrumentSelection'})]
        })
        this.props.navigation.dispatch(resetAction)
    }

    // resetValuesScreen = () => {
    //     console.log('holita')
    //     this.setState({
    //         titleScreen: 'from',
    //         firstSelected: false,
    //         selectedButton: '',
    //         fromNote: '',
    //         toNote: ''
    //     })
    // }

    render() {
        return (
            <View style={styles.container}>
                <Header title={this.state.titleScreen} />
                <InstrSelLayout onPress={this.onSelectAnInstrument} />
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