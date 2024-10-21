import React from 'react';
import {View, Text, Image, StyleSheet, TextInput} from 'react-native';

export default function Login () {
    const [text, onChangeText] = React.useState('Useless Text');
    const [number, onChangeNumber] = React.useState('');
    return (
        <View style={styles.container}>
            <Text> LOGIN</Text>
            <Text style={styles.text1}>Login to continue</Text>
            <Text style={styles.email}>Email</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}/>
            <Text style={styles.password}>Password</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        width: 400,
        height: 80,
        backgroundColor: '#7752FE',
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
        shadowColor: '#000',
    },
    text1: {
        fontSize: 10,
        width: 100,
        textAlign: 'center',
        marginBottom: 10
    },
    email: {
        textAlign: 'left',
        fontSize: 10
    },
    password: {
        textAlign: 'left',
        fontSize: 10,
        marginBottom: 100,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
})