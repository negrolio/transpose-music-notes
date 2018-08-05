import React from 'react';
import { Text, View, Dimensions, StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { ImgButton } from './../components/ImageButton';
import Header from './../components/Header';

class FromInstrument extends React.Component {
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
                <Header title={this.state.titleScreen} />
                <View style={styles.buttonsLayout} >
                    <View style={styles.buttonsFirstLine}>
                        <ImgButton src={require("./../../public/img/piano.png")} text='C' onTouch={this.onSelectInstrument}/>
                        <ImgButton src={require("./../../public/img/trumpet3.png")} text='Bb'/>
                    </View>
                    <View style={styles.buttonssecondLine} >
                        <ImgButton src={require("./../../public/img/sax.png")} text='Eb'/>
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

export default FromInstrument;
