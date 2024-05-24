
import { Alert, Image, Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';

import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import auth from "@react-native-firebase/auth";
import { CadUsuarioProps } from '../navigation/HomeNavigator';
import Carregamento from '../Carregamento';

const Cadastro = ({navigation, route}: CadUsuarioProps) => {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confSenha, setConfSenha] = useState('');
    const [isCarregando, setIsCarregando] = useState(false);

    function log() {
        console.log('Email: ' + email + '\nSenha: ' + senha + '\nConfirmação de Senha: ' + confSenha)
    }

    function verificaCampos() {
        if (email == '') {
            Alert.alert('Email em branco', 'Digite um email')
            return false;
        }
        if (senha == '') {
            Alert.alert('Senha em branco', 'Digite uma senha')
            return false;
        }
        if (confSenha == '') {
            Alert.alert('Confirmação de senha em branco', 'Digite uma senha')
            return false;
        }
        return true;
        if(confSenha == ""){
            Alert.alert("Confirmação de senha em branco", "Digite a confirmação de senha")
            return false;
        }
        if(senha != confSenha){
            Alert.alert("As senhas não são iguais", "Digite a confirmação de senha corretamente")
            return false;
        }
        return false;
    }
    function tratarErros(erro:string){
        console.log(erro);
        if(erro.includes("[auth/invalid-email]")){
            Alert.alert("Email invalido", "Digite um email válido")
        }else if(erro.includes("[auth/weak-password]")){
            Alert.alert("Senha Fraca", "A senha digitada é fraca. A senha deve conter pelo" + "menos 6 digitos.")
        }else if(erro.includes("[auth/email-already-in-use]")){
            Alert.alert("Email em uso", "O email inserido ja foi cadastrado em outra conta. ")
        }else{
            Alert.alert("erro", erro)
        }
    }

    async function Cadastrar() {
        setIsCarregando(true);

        

        if(verificaCampos()){
         auth()
         .createUserWithEmailAndPassword(email, senha)
         .then(() => {
            Alert.alert("conta", "Cadastro com sucesso") 
            navigation.goBack();
         })
         .catch((error) => { tratarErros(String(error))})
         .finally(() =>{
            setIsCarregando(false);
         })
        }
        setIsCarregando(false);
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.inner}>
                <Carregamento isCarregando = {isCarregando}/>
                <View >
                    <Text style={styles.title}>Cadastre-se</Text>
                    <Text style={styles.label}>
                        Email
                    </Text>
                    <TextInput style={styles.input} placeholder='Digite seu e-mail' onChangeText={(text) => { setEmail(text) }}></TextInput>
                    <Text style={styles.label}>
                        Senha
                    </Text>
                    <TextInput style={styles.input} secureTextEntry={true} placeholder='Digite sua senha' onChangeText={(text) => { setSenha(text) }}>
                    </TextInput>
                    <Text style={styles.label}>
                        Confirmação de senha
                    </Text>
                    <TextInput style={styles.input} secureTextEntry={true} placeholder='Digite novamente sua senha' onChangeText={(text) => { setConfSenha(text) }}>
                    </TextInput>
                    <View style={styles.navigation}>
                    <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate("TelaLogin")}}>
                        <Text style={styles.buttonText}>Retornar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate("TelaPrincipal")}} 
                    disabled={isCarregando}> 
                        <Text style={styles.buttonText}>Cadastrar</Text> 
                    </TouchableOpacity>
                    </View>
                </View>

                {/* Utilização da tag <Pressable> para criar um botão */}
                {/* <Pressable style={(state) => [styles.botao, state.pressed ? {opacity: 0.5} : null]}>
                        <Text style={styles.desc_botao}>Entrar</Text>
                    </Pressable> */}
            </View>
        </TouchableWithoutFeedback>
    )
};

export default Cadastro;

const styles = StyleSheet.create({
    container_fixo: {
        flex: 1,
    },
    inner: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',

        backgroundColor: 'purple'
    },
    logo: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
       
        marginHorizontal: 'auto',
    },
    title: {
        textAlign: 'center',
        fontSize:35,
        fontWeight:'bold',
        color:'black',
        paddingBottom:50
    },
    navigation: {
        flex:0,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    
    label: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 18,
        paddingLeft: 5,
    },
    input: {
        borderColor: 'black',
        borderWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginVertical: 10,
        borderRadius: 5,
        color: 'black',
        backgroundColor: '#fff',
    },
    button: {
        elevation: 5,
        backgroundColor: "white",
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
       
        minWidth:110
    },
    buttonText: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'black',
        fontSize: 18,
    }
});
