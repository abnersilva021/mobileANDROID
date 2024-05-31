import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, Image, Alert } from 'react-native';

import auth from "@react-native-firebase/auth";
import { Ativ3Props } from '../navigation/HomeNavigator';

const TerceiraAtiv3 = ({ navigation, route }: Ativ3Props) => {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tela Inicial</Text>
            
            <View style={styles.painel_imagem}>
                <Image 
                    style={styles.imagem} 
                    source={{ uri: 'https://www.petroita.com.br/images/img1-1.jpg' }} />
            </View>
            <Pressable>
            <Text style={styles.title}>O HOMEM DA TI!!!</Text>
            </Pressable>

            <Pressable
                style={(state) => [styles.botao, state.pressed ? { opacity: 0.5 } : null]}
                onPress={() => { navigation.navigate('SegundaAtiv2') }}>
                <Text style={styles.desc_botao}>Segunda Tela</Text>
            

                
            </Pressable>

            <Pressable
                style={(state) => [styles.botao, state.pressed ? { opacity: 0.5 } : null]}
                onPress={() => { navigation.navigate('PrimeiraAtiv') }}>
                <Text style={styles.desc_botao}>Primeira Tela</Text>
            

                
            </Pressable>
            <Pressable>
            <Text style={styles.title}>Abner Silva</Text>
            </Pressable>

        </View>
    );
}

export default TerceiraAtiv3;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'purple'
    },
    title: {
        textAlign: 'center',
        fontSize: 35,
        fontWeight: 'bold',
        color: '#000000',
        paddingBottom: 50
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
    },
    painel_imagem: {
        flex:1,
        alignItems:'center', 
        justifyContent:'center'
    },
    imagem: { 
        width: 200, 
        height: 200, 
        resizeMode: "center"
    }
});