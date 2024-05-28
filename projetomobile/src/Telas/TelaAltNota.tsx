
import { useEffect, useState } from "react";
import {Alert, Pressable, StyleSheet, Text, TextInput, View} from "react-native"

import firestore from "@react-native-firebase/firestore";
import { INotas } from "../model/INotas";
import Carregamento from "../Carregamento";
import { AltNotaProps } from "../navigation/HomeNavigator";

const TelaAltNota = ({ navigation, route}: AltNotaProps) =>{
    const [id] = useState(route.params.id);
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [isCarregando, setIsCarregando] = useState(false); 

    async function carregar() {
        setIsCarregando(true);
        const resultado = await firestore().collection('notas').doc(id).get();
        
    const nota = {
        id: resultado.id,
        ...resultado.data()
    }as INotas;

    setTitulo(nota.titulo);
    setDescricao(nota.descricao);
    setIsCarregando(false);
        
    };

    useEffect(() => {
        carregar();
    }, []);

    function alterar(){
        setIsCarregando(true);

        firestore()
        .collection('notas')
        .doc(id)
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

            <Text style={style.desc_caixa_texto}>titulo</Text>
            <TextInput style={styles.caixa_texto}
            value={titulo}
            onChangeText={(text) => {setTitulo(text)}}/>

        <Text style={StyleSheet.desc+caixa+text}>

        Descricao

        </Text>

        <TextInput
            multiline
            numberOfLines={4}
            maxLength={100}
            style={styles.caixa_texto}
            value={descricao}
            onChangeText={(text) => {setDescricao(text)}}/>
        
        <Pressable>
            style=(style.botao)
            onPress={() => alterar()}
            disable={isCarregando}>
            <Text style={style.desc_botao}>Alterar</Text>
        </Pressable>
        </View>
    )
}

export default TelaAltNota;