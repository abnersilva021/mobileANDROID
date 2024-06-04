import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, Image, Alert } from 'react-native';

import auth from "@react-native-firebase/auth";
import { LoginProps } from '../navigation/HomeNavigator';

const Login = ({navigation, route}: LoginProps) => {
    const [email, setEmail] = useState(''); 
    const [senha, setSenha] = useState(''); 

    function logar() {
        if (verificaCampos()) {

            auth()
                .signInWithEmailAndPassword(email, senha)
                .then(() => { navigation.navigate("TelaPrincipal") })
                .catch((error) => tratarErros( String(error) ))
        }
    }

    function verificaCampos(){
        if (email == ''){
            Alert.alert("Email em branco", "Digite um email")
            return false;
        }
        if (senha == ''){
            Alert.alert("Senha em branco", "Digite uma senha")
            return false;
        }

        return true;
    }

    function tratarErros(erro: string){
        console.log(erro);
        if(erro.includes("[auth/invalid-email]")){
            Alert.alert("Email inválido", "Digite um email válido")
        } else if(erro.includes("[ INVALID_LOGIN_CREDENTIALS ]")){
            Alert.alert("Login ou senha incorretos", "")
        } else if(erro.includes("[auth/invalid-credential]")){
            Alert.alert("Login ou senha incorretos", "")
        }else{
            Alert.alert("Erro", erro)
        }
    }

    function redefinirSenha(){
        if (email == ''){
            Alert.alert("Email em branco" , "Preencha o email")
            return
        }

        auth()
        .sendPasswordResetEmail(email)
        .then(() => Alert.alert("Redefinir senha",
        "Enviamos um email para você redefinir sua senha!"))
        .catch((error) => console.log(error))
    }

    return (
        <View style={styles.container}>
            <View style={styles.painel_imagem}>
                <Image 
                    style={styles.imagem} 
                    source={{ uri: 'https://cdn4.iconfinder.com/data/icons/essential-app-2/16/user-avatar-human-admin-login-256.png' }} />
            </View>
            
            <View style={styles.container_login}>
                <Text
                    style={styles.titulo_caixa_texto}>
                    Login
                </Text>
                <TextInput
                    style={styles.caixa_texto}
                    onChangeText={(text) => {setEmail(text)}}/>

                <Text
                    style={styles.titulo_caixa_texto}>
                    Senha
                </Text>
                <TextInput secureTextEntry={true}
                    style={styles.caixa_texto} 
                    onChangeText={(text) => {setSenha(text)}}/>

                <Pressable
                    style={(state) => [styles.botao, state.pressed ? { opacity: 0.5 } : null] }
                    onPress={logar}>
                    <Text style={styles.desc_botao}>Entrar</Text>
                </Pressable>

                <Pressable
                    style={(state) => [styles.botao, state.pressed ? { opacity: 0.5 } : null] }
                    onPress={() =>{navigation.navigate('TelaCadUsuario')}}>
                    <Text style={styles.desc_botao}>Cadastrar-se</Text>
                </Pressable>

                <Pressable
                    style={(state) => [styles.botao, state.pressed ? { opacity: 0.5 } : null] }
                    onPress={() => {redefinirSenha()}}>
                    <Text style={styles.desc_botao}>Redefinir Senha</Text>
                </Pressable>

                
            </View>
        </View>
    );
}

export default Login;

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
        backgroundColor: 'white',
        paddingVertical: 10,
        paddingHorizontal: 30,
        marginTop: 20,
        borderRadius: 10
    },
    desc_botao: {
        fontSize: 20,
        color: 'black'
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
