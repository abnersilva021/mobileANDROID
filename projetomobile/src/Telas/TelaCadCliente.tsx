import { useState } from "react";
import { Alert, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import firestore from "@react-native-firebase/firestore";
import Carregamento from "../Carregamento";
import { CadClienteProps } from "../navigation/HomeNavigator";
import { INotas } from "../model/INotas";


const TelaCadCliente = ({ navigation, route }: CadClienteProps) => {
    // const [titulo, setTitulo] = useState('');
    // const [descricao, setDescricao] = useState('');
    
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [rua, setRua] = useState('');
    const [numero, setNumero] = useState('');
    const [bairro, setBairro] = useState('');
    const [complemento, setComplemento] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const [nascimento, setNascimento] = useState('');
    const [isCarregando, setIsCarregando] = useState(false);


    function cadastrar() {
        setIsCarregando(true);
        if (verificaCampos()) {
            let nota = {
                nome: nome,
                cpf: cpf,
                rua: rua,
                numero: numero,
                bairro: bairro,
                complemento: complemento,
                cidade: cidade,
                estado: estado, 
                nascimento: nascimento,
                // titulo: titulo,
                // descricao: descricao,
                created_at: firestore.FieldValue.serverTimestamp()
            } as INotas;

            firestore()
                .collection('notas')
                .add(nota)
                .then(() => {
                    Alert.alert("Nota", "Cadastrada com sucesso")
                    navigation.navigate('TelaPrincipal')
                })
                .catch((error) => console.log(error))
                .finally(() => setIsCarregando(false));
        }
        setIsCarregando(false);

        // if (verificaCampos()) {
        //     let nota = {
        //         titulo: titulo,
        //         descricao: descricao,
        //         created_at: firestore.FieldValue.serverTimestamp()
        //     } as INotas;

        //     firestore()
        //         .collection('notas')
        //         .add(nota)
        //         .then(() => {
        //             Alert.alert("Nota", "Cadastrada com sucesso")
        //             navigation.navigate('TelaPrincipal')
        //         })
        //         .catch((error) => console.log(error))
        //         .finally(() => setIsCarregando(false));
        // }
    }
    function verificaCampos() {
        if (nome == "") {
            Alert.alert("Titulo em branco", "Digite uma descricao da nota")
            return false;
        }
        if (cpf == "") {
            Alert.alert("Titulo em branco", "Digite uma descricao da nota")
            return false;
        }
        if (rua == "") {
            Alert.alert("Titulo em branco", "Digite uma descricao da nota")
            return false;
        }
        if (numero == "") {
            Alert.alert("Titulo em branco", "Digite uma descricao da nota")
            return false;
        }
        if (bairro == "") {
            Alert.alert("Titulo em branco", "Digite uma descricao da nota")
            return false;
        }
        if (complemento == "") {
            Alert.alert("Titulo em branco", "Digite uma descricao da nota")
            return false;
        }
        if (cidade == "") {
            Alert.alert("Titulo em branco", "Digite uma descricao da nota")
            return false;
        }
        if (estado == "") {
            Alert.alert("Titulo em branco", "Digite uma descricao da nota")
            return false;
        }
        if (nascimento == "") {
            Alert.alert("Titulo em branco", "Digite uma descricao da nota")
            return false;
        }
        return true;
    }
    return (
        <View>
            <Carregamento isCarregando={isCarregando} />
           <ScrollView>
            <Text>Nome</Text>
            <TextInput style={styles.caixa_texto} onChangeText={(text) => { setNome(text) }} />
            <Text>CPF</Text>
            <TextInput style={styles.caixa_texto} onChangeText={(text) => { setCpf(text) }} />
            <Text>Rua</Text>
            <TextInput style={styles.caixa_texto} onChangeText={(text) => { setRua(text) }} />
            <Text>Numero</Text>
            <TextInput style={styles.caixa_texto} onChangeText={(text) => { setNumero(text) }} />
            <Text>Bairro</Text>
            <TextInput style={styles.caixa_texto} onChangeText={(text) => { setBairro(text) }} />
            <Text>Complemento</Text>
            <TextInput style={styles.caixa_texto} onChangeText={(text) => { setComplemento(text) }} />
            <Text>Cidade</Text>
            <TextInput style={styles.caixa_texto} onChangeText={(text) => { setCidade(text) }} />
            <Text>Estado</Text>
            <TextInput style={styles.caixa_texto} onChangeText={(text) => { setEstado(text) }} />
            <Text>Nascimento</Text>
            <TextInput style={styles.caixa_texto} onChangeText={(text) => { setNascimento(text) }} />


            
            <Pressable
                style={styles.botao}
                onPress={() => cadastrar()}
                disabled={isCarregando}>
                <Text style={styles.desc_botao}>Cadastrar</Text>

            </Pressable>

            <Pressable
                    style={(state) => [styles.botao, state.pressed ? { opacity: 0.5 } : null] }
                    onPress={() =>{navigation.navigate('TelaPrincipal')}}>
                    <Text style={styles.desc_botao}>Voltar</Text>
                </Pressable>

            </ScrollView>
        </View>
    )

}


export default TelaCadCliente


const styles = StyleSheet.create({
    caixa_texto: {
        width: '70%',
        color: 'black',
        borderWidth: 1,
        borderRadius: 4,
        margin: 3,
        backgroundColor: 'white'

    },
    botao: {
        elevation: 5,
        backgroundColor: "#0066ff",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        minWidth: 110,
        margin: 10
    },
    desc_botao: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white',
        fontSize: 18,
        marginBottom: 10
    }
});