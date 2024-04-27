import React from 'react';
import {Text, View } from 'react-native';

const getNomeCompleto = ( 
    primeiroNome: String,
    nomeMeio: String,
    ultimoNome: string) => {

        return primeiroNome + '' + nomeMeio + '' + ultimoNome;
    };

    const Gato = () => {
        return (
            <Text style = {{fontSize:30, fontWeight: 'bold'}}>
                Olá, eu sou o Gato
                {getNomeCompleto( ' Fulano ', 'da silva ', 'Sauro ' )}!
            </Text>
        )
    };

    export default Gato;
