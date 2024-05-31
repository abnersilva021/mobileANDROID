import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, Image, Alert } from 'react-native';

import auth, { firebase } from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
import { Ativ2Props } from '../navigation/HomeNavigator';

const Produtos = ({ navigation, route }: Ativ2Props) => {
    const [codigo, setCodigo] = useState('');
    const [nome, setNome] = useState('');
    const [preco, setPreco] = useState('');

    const cadastrar = () => {
        firestore()
            .collection('Produtos')
            .add({
                codigo,
                nome,
                preco
            })
            .then(() => {
                Alert.alert('Cadastrado');
                setCodigo('');
                setNome('');
                setPreco('');
            })
            .catch((error) => {
                Alert.alert('Erro ao cadastrar' + error);
            });
    };

    return (
        <View style={styles.container}>

            <Text
                style={styles.titulo_caixa_texto}>
                Código de Barras
            </Text>
            <TextInput
                style={styles.caixa_texto}
                onChangeText={(text) => { setCodigo(text) }} />

            <Text
                style={styles.titulo_caixa_texto}>
                Nome
            </Text>
            <TextInput
                style={styles.caixa_texto}
                onChangeText={(text) => { setNome(text) }} />

            <Text
                style={styles.titulo_caixa_texto}>
                Preço
            </Text>
            <TextInput
                style={styles.caixa_texto}
                onChangeText={(text) => { setPreco(text) }} />

            <Pressable
                style={(state) => [styles.botao, state.pressed ? { opacity: 0.5 } : null]}
                onPress={() => { cadastrar() }}>
                <Text style={styles.desc_botao}>Salvar</Text>
            </Pressable>

            <Pressable
                style={(state) => [styles.botao, state.pressed ? { opacity: 0.5 } : null]}
                onPress={() => { navigation.navigate('TerceiraAtiv3') }}>
                <Text style={styles.desc_botao}>Voltar</Text>
            </Pressable>

        </View>
    )
}

export default Produtos;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'purple'
    },
    container_login: {
        flex: 2,
        alignItems: 'center'
    },
    titulo_caixa_texto: {
        fontSize: 25,
        color: 'black'
    },
    caixa_texto: {
        width: '70%',
        color: 'black',
        borderWidth: 1,
        borderRadius: 4,
        margin: 3,
        backgroundColor: 'white'
    },
    botao: {
        borderWidth: 3,
        marginVertical: 10,
        color: 'black',
        justifyContent: 'center',
        backgroundColor: 'black',
        paddingVertical: 10,
        paddingHorizontal: 30,
        marginTop: 20,
        borderRadius: 10
    },
    desc_botao: {
        fontSize: 20,
        color: 'white'
    }
})