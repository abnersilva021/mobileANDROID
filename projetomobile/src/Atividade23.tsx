import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';


const Login = () => {
    const [titulo, setTitulo] = useState('');

    return (
        <View style={styles.container}>
            <View style={styles.container_login}>
                <Text
                    style={styles.titulo_caixa_texto}>
                    {titulo}
                </Text>
                <TextInput
                    style={styles.caixa_texto}
                    onChangeText={(text) => { setTitulo(text) }} />
            </View>
        </View>
    );
}

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFACD'
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
        justifyContent: 'center',
        backgroundColor: 'green',
        paddingVertical: 10,
        paddingHorizontal: 30,
        marginTop: 20,
        borderRadius: 10
    },
    desc_botao: {
        fontSize: 20,
        color: 'white'
    },
    painel_imagem: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    imagem: {
        width: 200,
        height: 200,
        resizeMode: "center"
    }
});
