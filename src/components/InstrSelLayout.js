import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImgBtnWithTxt from './../components/ImgBtnWithTxt';
import instrumentImg from '../utils/instrumentImages';

class InstrSelLayout extends Component {

    onSelect = (e, tone) => {
        this.props.onPress(e, tone)
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.buttonsLayout} >
                    <View style={styles.buttonsFirstLine}>
                        <ImgBtnWithTxt src={instrumentImg['C']} text='C' onTouch={this.onSelect} size={120}/>
                        <ImgBtnWithTxt src={instrumentImg['Bb']} text='Bb' onTouch={this.onSelect} size={120}/>
                    </View>
                    <View style={styles.buttonssecondLine} >
                        <ImgBtnWithTxt src={instrumentImg['Eb']} text='Eb' onTouch={this.onSelect} size={120}/>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        //justifyContent: 'center',
        height: '100%',
        alignItems: 'center',
        backgroundColor: '#F0E68C',
    },
    buttonsLayout: {
        justifyContent:'space-around',
        height: 300,
    },
    buttonsFirstLine: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 300,
        //backgroundColor:'red'
    },
    buttonssecondLine: {
        flexDirection: 'row',
        justifyContent: 'center'
        //width: '50%'
    }
});

export default InstrSelLayout;
