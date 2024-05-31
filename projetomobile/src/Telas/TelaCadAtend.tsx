
import { useEffect, useState } from "react";
import {Alert, Pressable, StyleSheet, Text, TextInput, View} from "react-native"

import firestore from "@react-native-firebase/firestore";
import { INotas } from "../model/INotas";
import Carregamento from "../Carregamento";
import { CadAtendProps } from "../navigation/HomeNavigator";

const TelaCadAtend = ({ navigation, route}: CadAtendProps) =>{
   
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [isCarregando, setIsCarregando] = useState(false); 

    

    function cadastrar(){
        setIsCarregando(true);

        //Ajustar para cadastrar ao inves de alterar
        firestore()
        .collection('notas')
        .update({
            titulo, 
            descricao, 
            created_at: firestore.FieldValue.serverTimestamp()
        })
        .then(() =>{
          Alert.alert("Nota", "Alterada com sucesso")
          navigation.goBack();

        })
        .catch((error) => console.log(error))
        .finally(() => setIsCarregando(false));
    }
    return(
        <View
            style={styles.container}>
            <Carregamento isCarregando={isCarregando}/>

            <Text style={styles.titulo}>Alterar Nota</Text>

            <Text style={styles.desc_caixa_texto}>titulo</Text>
            <TextInput style={styles.caixa_texto}
            value={titulo}
            onChangeText={(text) => {setTitulo(text)}}/>

        <Text style={styles.desc_caixa_texto}>

          Descricao
        
        </Text>

        <TextInput
            multiline
            numberOfLines={4}
            maxLength={100}
            style={styles.caixa_texto}
            value={descricao}
            onChangeText={(text) => {setDescricao(text)}}/>
        
        <Pressable
            style={styles.botao}
            onPress={() => cadastrar()}
            disabled={isCarregando}>
            <Text style={styles.desc_botao}>Cadastrar</Text>
        </Pressable>
        </View>
    )
}

export default TelaCadAtend;

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: 'purple',
    alignItems: 'center'
},
titulo:{
    fontSize: 40,
    textAlign: 'center',
    color: 'black',
    marginBottom:10
},
caixa_texto: {
    width: '80%',
    color:'black',
    borderWidth: 1,
    borderRadius: 4,
    margin: 3,
    backgroundColor: 'white'
},
desc_caixa_texto: {
    fontSize: 18
},
botao: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: 'green',
    paddingVertical: 30,
    margin: 10
},
desc_botao: {
    fontSize: 25,
    color: 'white'
}
})