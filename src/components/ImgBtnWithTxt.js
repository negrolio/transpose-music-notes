import React from 'react';
import { StyleSheet, View, Text, ImageBackground, TouchableOpacity  } from 'react-native'

class ImgBtnWithTxt extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            buttonPressed: false
        }
    }
    onButtonPressed = (e) => {
        e.persist()
        this.setState((prevState)=>({
            buttonPressed: !prevState.buttonPressed,
        }))
        this.props.onTouch(e, this.props.text)
    }

    componentWillUnmount () {
        this.setState({buttonPressed: false})
    }
    render () {
        return (
            <View style={{width: this.props.size, height: this.props.size}}>
                <TouchableOpacity style={styles.button} onPress={this.onButtonPressed}>
                    <ImageBackground source={this.props.src} style={[styles.img, {backgroundColor: this.state.buttonPressed ? '#419CBA' : '#F7F8E0'} ]}>
                        <Text style={styles.text}>{this.props.text}</Text>
                    </ImageBackground>
                </TouchableOpacity >
            </View>
        )
    }
}

const styles = StyleSheet.create({
    img: {
        //backgroundColor: '#F7F8E0',
        height: '100%',
        width: '100%',
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
        //marginTop: 10,
    },
    button: {
        alignItems: 'center',
        padding: 10
    },
    text: {
        fontFamily:'AmaticSC-Bold',
        fontSize: 30
    }
});

export default ImgBtnWithTxt;