import React from 'react';
import { View, StyleSheet } from 'react-native';
import InstrSelLayout from '../components/InstrSelLayout';

class ToInstrument extends React.Component {

    render() {
        return (
            <View >
                <InstrSelLayout titleScreen={this.props.titleScreen} onPress={this.props.onSelect} />
            </View>
        );
    }
}

export default ToInstrument;