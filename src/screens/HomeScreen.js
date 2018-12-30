import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Header from './../components/Header';
import ImgButton from '../components/ImgButton';

class HomeScreen extends Component {
    
    goToInstrumentSelection = () => {
        this.props.navigation.navigate('InstrumentSelection',{title:'Select initial instrument'})
    }
    openFile = () => {
        this.props.navigation.navigate('FilesList')
    }
    render() {
        return (
            <View style={styles.container}>
                <Header title='Transpose'/>
                <View>
                    <TouchableOpacity onPress={this.goToInstrumentSelection} style={styles.btnImg}>
                        <Image source={require("./../../public/img/home/crece2.jpg")} style={{height: '100%', width: '100%'}}/>
                    </TouchableOpacity>
                </View>
                <ImgButton onPress={this.openFile} styles={styles.folderIcon} img={require("./../../public/img/open-file.png")}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height:'100%',
        alignItems: 'center',
        backgroundColor: '#F0E68C',
        justifyContent: 'space-around'
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
    },
    folderIcon: {
        width: 50,
        height: 50,
        marginBottom: 60
    }
});

export default HomeScreen;
