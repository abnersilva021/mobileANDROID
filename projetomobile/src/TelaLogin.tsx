import React, { useState } from 'react';
import { Alert, View, Text, Image, ScrollView, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const clicou = () => {
    Alert.alert("Abner Silva", "Voce terminou a execução!");
}

const Tela = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    function log(){
        console.log('Email:' + email + '\nSenha:' + senha)
    }
    return (
        <>
            <View style={styles.container}>
                <Image
                    source={{
                        uri: 'https://static.vecteezy.com/ti/fotos-gratis/p1/22715778-fofa-legal-garoto-dabbing-pose-desenho-animado-icone-ilustracao-pessoas-moda-icone-conceito-isolado-gerar-ai-gratis-foto.jpg'
                    }}
                    style={styles.logo}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Digite seu email"
                />
                <TextInput
                    style={styles.input}
                    secureTextEntry={true}
                    placeholder="Digite sua senha"
                />
                <TouchableOpacity
                    style={styles.botao}
                    onPress={() => { clicou() }}
                >
                    <Text style={styles.botaoText}>Login</Text>
                </TouchableOpacity>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'purple',
    },
    logo: {
        width: 250,
        height: 250,
        borderRadius: 60,
    },
    input: {
        marginTop: 20,
        padding: 10,
        width: 300,
        backgroundColor: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        borderRadius: 5
    },
    botao: {
        width: 300,
        height: 42,
        backgroundColor: 'white',
        marginTop: 20,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    botaoText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
    }
})

export default Tela;