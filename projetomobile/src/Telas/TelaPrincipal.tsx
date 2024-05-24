import React, {useState} from 'react';
import { PrincipalProps } from '../navigation/HomeNavigator';
import { Text, View, StyleSheet, TextInput, Pressable, Image, Alert, TouchableOpacity } from 'react-native';

const TelaPrincipal = ({navigation, route}: PrincipalProps) =>{
    return(
        <View >
            <Text>Bem vindo</Text>

            <TouchableOpacity
                    onPress={() => { navigation.navigate('ExerAprov') }}
                >
                    <Text >Login</Text>
                </TouchableOpacity>
        </View>
    )
}


export default TelaPrincipal;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'purple'
    },
    container_login: {
        flex: 2,
        alignItems: 'center'
    },
    titulo_caixa_texto:{
        fontSize: 25,
        color: 'black'
    }
});
