import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Header from './../components/Header';
import ImgButton from './../components/ImgButton';

class HomeScreen extends Component {
    
    goToInstrumentSelection = () => {
        this.props.navigation.navigate('InstrumentSelection',{title:'Select initial instrument'})
    }
    render() {
        return (
            <View style={styles.container}>
                <Header title='Transpose'/>
                <View style={styles.containerButtons}>
                    <TouchableOpacity onPress={this.goToInstrumentSelection} style={styles.btnImg}>
                        <Image source={require("./../../public/img/home/crece2.jpg")} style={{height: '100%', width: '100%'}}/>
                    </TouchableOpacity>
                </View>
                    {/* <View style={styles.buttonsLayout}>
                        <Text style={styles.textButtonLayout}>Several</Text>
                        <ImgButton src={require("./../../public/img/notes.png")} text='Notes' />
                    </View> */}
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
        //justifyContent: 'center',
        backgroundColor: '#F0E68C'
      },
    containerButtons: {
        height: 400,
        justifyContent: 'center',
      },
      btnImg: {
        backgroundColor: '#F7F8E0',
        height: 150,
        width: 280,
        padding: 3,
        borderRadius: 10,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        marginLeft: 5,
        marginRight: 5,
        //marginTop: 10,
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
