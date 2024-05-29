import React, {useState} from 'react';
import { PrincipalProps } from '../navigation/HomeNavigator';
import { Text, View, StyleSheet, TextInput, Pressable, Image, Alert, TouchableOpacity } from 'react-native';
import ListaFlat from '../ListaFlat';

const TelaPrincipal = ({navigation, route}: PrincipalProps) =>{
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Bem Vindo</Text>

            <Pressable
                style={(state) => [styles.botao, state.pressed ? { opacity: 0.5 } : null]}
                onPress={() => { navigation.navigate('TelaCadNotas') }}>
                <Text style={styles.desc_botao}>Cadastrar Nota</Text>
            </Pressable>

            <Pressable
                style={(state) => [styles.botao, state.pressed ? { opacity: 0.5 } : null]}
                onPress={() => { navigation.navigate('TelaConNotas') }}>
                <Text style={styles.desc_botao}>Consultar Notas</Text>
            </Pressable>

            <Pressable
                    style={(state) => [styles.botao, state.pressed ? { opacity: 0.5 } : null] }
                    onPress={() =>{navigation.navigate('TelaCadCliente')}}>
                    <Text style={styles.desc_botao}>Cadastro de Cliente</Text>
                </Pressable>

                <Pressable
                    style={(state) => [styles.botao, state.pressed ? { opacity: 0.5 } : null] }
                    onPress={() =>{navigation.navigate('TelaCadAtend')}}>
                    <Text style={styles.desc_botao}>Cadastro de Cliente</Text>
                </Pressable>

            <ListaFlat />
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
    },
    titulo: {
        fontSize: 25
    },
    desc_botao: {
        alignItems: 'center',
        fontSize: 25
    },
    botao: {
        alignItems: 'center',
        color: 'purlple'
    }
});
