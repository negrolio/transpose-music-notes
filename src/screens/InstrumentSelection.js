import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FromInstrument from './FromInstrument';

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
          titleScreen: 'From'
        }
      }

    onSelectInstrument = () => {
        this.setState({titleScreen: 'To'});
        this.props.navigation.setParams({ title: 'Select end instrument' })
    }

    render() {
        return (
            <View style={styles.container}>
                <FromInstrument />
                {/* <ToInstrument /> */}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

export default InstrumentSelection;