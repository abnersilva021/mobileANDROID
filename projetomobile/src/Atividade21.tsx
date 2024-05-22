
import React from 'react';
import {StyleSheet, Text, TextInput, View } from 'react-native';

type Props = {
    titulo: string;
   

}

const MeuComponente = (props: Props) =>{
    return (
        <View style = {styles.container}>
            <Text>{props.titulo}</Text>
            <TextInput  placeholder="digite alguma coisa ai"/>
        </View>
    )
}



 export default MeuComponente;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'purple',
    },
    Text: {
        
        height: 250,
        borderRadius: 60,
    },
    TextInput: {
        marginTop: 20,
        padding: 10,
        width: 300,
        backgroundColor: 'white',
        fontSize: 16,
    }
    
    
})