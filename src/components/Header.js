import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Header extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header}>{this.props.title}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 150,
        //flex: 1,
        justifyContent: 'center',
        //backgroundColor: 'green'
      },
      header: {
        fontFamily:'AmaticSC-Regular',
        color:'#353528',
        fontSize: 80
      },
});

export default Header;
