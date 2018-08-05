import React from 'react';
import { StyleSheet, View, Text, ImageBackground, TouchableOpacity  } from 'react-native'

export const ImgButton = (props)=>{
    return (
        <View style={{width: 120, height: 120}}>
            <TouchableOpacity style={styles.button} onPress={props.onTouch}>
                <ImageBackground source={props.src} style={styles.img}>
                    <Text style={styles.text}>{props.text}</Text>
                </ImageBackground>
            </TouchableOpacity >
        </View>
    )
}

const styles = StyleSheet.create({
    img: {
        backgroundColor: '#F7F8E0',
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
        fontSize: 15
    }
});