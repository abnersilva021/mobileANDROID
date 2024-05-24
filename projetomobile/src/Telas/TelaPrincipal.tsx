import React, {useState} from 'react';
import { PrincipalProps } from '../navigation/HomeNavigator';
import { Text, View, StyleSheet, TextInput, Pressable, Image, Alert } from 'react-native';

const TelaPrincipal = ({navigation, route}: PrincipalProps) =>{
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Bem vindo</Text>
        </View>
    )
}

export default TelaPrincipal;