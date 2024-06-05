import React, {useState} from 'react';
import { PrincipalProps } from '../navigation/HomeNavigator';
import { Text, View, StyleSheet, TextInput, Pressable, Image, Alert, TouchableOpacity } from 'react-native';
import ListaFlat from '../ListaFlat';

const TelaPrincipal = ({navigation, route}: PrincipalProps) =>{
    return( 

       <View style={styles.container}>

                    <Image 
                    style={styles.imagem} 
                    source={{ uri: 'https://cdn4.iconfinder.com/data/icons/essential-app-2/16/user-avatar-human-admin-login-256.png' }} />

        <View style={styles.container}>
            <Text style={styles.titulo}>Bem Vindo</Text>

            {/* <Pressable
                style={(state) => [styles.botao, state.pressed ? { opacity: 0.5 } : null]}
                onPress={() => { navigation.navigate('TelaCadNotas') }}>
                <Text style={styles.desc_botao}>Cadastrar Nota</Text>
            </Pressable>

            <Pressable
                style={(state) => [styles.botao, state.pressed ? { opacity: 0.5 } : null]}
                onPress={() => { navigation.navigate('TelaConNotas') }}>
                <Text style={styles.desc_botao}>Consultar Notas</Text>
            </Pressable> */}

            <Pressable
                    style={(state) => [styles.botao, state.pressed ? { opacity: 0.5 } : null] }
                    onPress={() =>{navigation.navigate('TelaCadCliente')}}>
                    <Text style={styles.desc_botao}>Cadastro do Cliente</Text>
                </Pressable>

                <Pressable
                    style={(state) => [styles.botao, state.pressed ? { opacity: 0.5 } : null] }
                    onPress={() =>{navigation.navigate('TelaConNotas')}}>
                    <Text style={styles.desc_botao}>Consulta do Cliente</Text>
                </Pressable>

                <Pressable
                    style={(state) => [styles.botao, state.pressed ? { opacity: 0.5 } : null] }
                    onPress={() =>{navigation.navigate('TelaCadAtend2')}}>
                    <Text style={styles.desc_botao}>Cadastro do atendimento</Text>
                </Pressable>

                <Pressable
                    style={(state) => [styles.botao, state.pressed ? { opacity: 0.5 } : null] }
                    onPress={() =>{navigation.navigate('TelaConAtend')}}>
                    <Text style={styles.desc_botao}>Consulta do atendimento</Text>
                </Pressable>
               
        </View>
        </View>
    )
}


export default TelaPrincipal;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'purple',
        alignItems: 'center'
    },
    container_login: {
        flex: 2,
       
    },
    titulo_caixa_texto:{
        fontSize: 25,
        color: 'black',
        alignItems: "center"
    },
    titulo: {
        fontSize: 25,
        alignItems:'center'
    },
    desc_botao: {
        alignItems: 'center',
        fontSize: 25
    },
    botao: {
        justifyContent: 'center',
        backgroundColor: 'white',
        paddingVertical: 10,
        paddingHorizontal: 30,
        marginTop: 20,
        borderRadius: 10
    },
    
    imagem: { 
        width: 200, 
        height: 200, 
        resizeMode: "center",
        
    }
});
