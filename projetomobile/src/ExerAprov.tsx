import React, { useState } from 'react';
import {Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';

const Aprovado = () =>{
    //states
    const[nota1, setNota1] = useState(0);
    const[nota2, setNota2] = useState(0);
    const[nome, setNome] = useState('');

    const Calcular = () => {
        let resultado = ''
        if((nota1 + nota2)/ 2 >=7){
            
            resultado = 'parabens voce ' + nome + ' aprovado ' + (nota1 + nota2)/ 2
    
        }else{
            resultado = 'Infelizmente o aluno  ' + nome + ' foi reprovado ' + (nota1 + nota2)/ 2 
        }
        Alert.alert(resultado);
    };

    //return vai ter os inputs
    return (
       <>
       <View style={StyleSheet.container}>
               
                <TextInput
                    style={StyleSheet.input}
                    placeholder="Digite seu email"
                />
                <TextInput
                    style={StyleSheet.input}
                    secureTextEntry={true}
                    placeholder="Digite sua senha"
                />
                <TouchableOpacity
                    style={StyleSheet.botao}
                    onPress={() => { clicou() }}
                >
                    <Text style={StyleSheet.botaoText}>Login</Text>
                </TouchableOpacity>
                </View>
       </>
    );


    //botão chama calcular

}


export default Aprovado;