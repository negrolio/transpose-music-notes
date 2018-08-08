import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImgButton from './../components/ImgButton';

class InstrSelLayout extends Component {

    onSelect = (e, tone) => {
        this.props.onPress(e, tone)
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.buttonsLayout} >
                    <View style={styles.buttonsFirstLine}>
                        <ImgButton src={require("./../../public/img/piano.png")} text='C' onTouch={this.onSelect} />
                        <ImgButton src={require("./../../public/img/trumpet3.png")} text='Bb' onTouch={this.onSelect}/>
                    </View>
                    <View style={styles.buttonssecondLine} >
                        <ImgButton src={require("./../../public/img/sax.png")} text='Eb' onTouch={this.onSelect}/>
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
