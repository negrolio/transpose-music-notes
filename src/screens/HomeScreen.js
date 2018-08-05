import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from './../components/Header';
import { ImgButton } from './../components/ImageButton';

class HomeScreen extends Component {
    
    goToFromInstrument = () => {
        this.props.navigation.navigate('FromInstrument',{title:'Select initial instrument'})
    }
    render() {
        return (
            <View style={styles.container}>
                <Header title='Transpose'/>
                <View style={styles.containerButtons}>
                    <View style={styles.buttonsLayout}>
                        <Text style={styles.textButtonLayout}>One</Text>
                        <ImgButton src={require("./../../public/img/note.png")} text='Note' onTouch={this.goToFromInstrument}/>
                    </View>
                    <View style={styles.buttonsLayout}>
                        <Text style={styles.textButtonLayout}>Several</Text>
                        <ImgButton src={require("./../../public/img/notes.png")} text='Notes' />
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height:'100%',
        //flex: 1,
        //backgroundColor: 'red',
        alignItems: 'center',
        //justifyContent: 'space-between',
        backgroundColor: '#F0E68C'
      },
    containerButtons: {
        //height: 200,
        width: 200,
        flex: 2,
        justifyContent: 'space-evenly',
        //backgroundColor: 'red',
        bottom: 30
      },
      buttonsLayout: {
        height: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
        //backgroundColor: 'yellow'
      },
      textButtonLayout: {
        fontFamily:'PermanentMarker-Regular',
        fontSize: 20,
        alignSelf:'center',
        color: '#353528'
      }
});

export default HomeScreen;
