import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class NotesScreen extends Component {
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

    render() {
        return (
            <View style={styles.container}>
                <Text>NotesScreen</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F0E68C',
    },
});

export default NotesScreen;
