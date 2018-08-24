import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

class SquareButton extends Component {

    onButtonPressed = ()=>{
        this.props.onPress(this.props.text)
    }

    render() {
        return (
            <View style={{margin:20}}>
                <TouchableOpacity 
                    style={[styles.container, {backgroundColor: this.props.pressed ? '#419CBA' : this.props.transposed ? '#41BA8C' : '#F7F8E0'}]}
                    onPress={this.onButtonPressed}>
                    <Text style={styles.text}>{this.props.text}</Text>
                </TouchableOpacity >
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: 80,
        height: 80,
        padding: 3,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        justifyContent: 'center',
        flexDirection: 'row'
    },
    text: {
        fontFamily:'AmaticSC-Bold',
        fontSize: 50
    }
});

export default SquareButton;
