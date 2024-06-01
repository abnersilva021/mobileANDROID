
import { useEffect, useState } from "react";
import { Alert, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native"

import firestore from "@react-native-firebase/firestore";
import { INotas } from "../model/INotas";
import Carregamento from "../Carregamento";
import { AltNotaProps } from "../navigation/HomeNavigator";

const TelaAltNota = ({ navigation, route }: AltNotaProps) => {
    const [id] = useState(route.params.id);
   
    const [isCarregando, setIsCarregando] = useState(false);
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [rua, setRua] = useState('');
    const [numero, setNumero] = useState('');
    const [bairro, setBairro] = useState('');
    const [complemento, setComplemento] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const [nascimento, setNascimento] = useState('');

    async function carregar() {
        setIsCarregando(true);
        const resultado = await firestore().collection('notas').doc(id).get();

        const nota = {
            id: resultado.id,
            ...resultado.data()
        } as INotas;

      
        setNome(nota.nome);
        setCpf(nota.cpf);
        setRua(nota.rua);
        setNumero(nota.numero);
        setBairro(nota.bairro);
        setComplemento(nota.complemento);
        setCidade(nota.cidade);
        setEstado(nota.estado);
        setNascimento(nota.nascimento);

        setIsCarregando(false);

    };

    useEffect(() => {
        carregar();
    }, []);

    function alterar() {
        setIsCarregando(true);

        if(verificaCampos()){
        firestore()
            .collection('notas')
            .doc(id)
            .update({
                nome: nome,
                cpf: cpf,
                rua: rua,
                numero: numero,
                bairro: bairro,
                complemento: complemento,
                cidade: cidade,
                estado: estado,
                nascimento: nascimento,
               
                
                created_at: firestore.FieldValue.serverTimestamp()
            })
            .then(() => {
                Alert.alert("Cliente", "Cliente alterado com sucesso")
                navigation.goBack();

            })
            .catch((error) => console.log(error))
            .finally(() => setIsCarregando(false));
    }}

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
        <View  style={styles.container}> 
            <ScrollView>

               
                <Carregamento isCarregando={isCarregando} />

                <Text style={styles.titulo}>Alterar Cliente</Text>

                <Text style={styles.desc_caixa_texto}>Nome</Text>
                <TextInput style={styles.caixa_texto}
                    value={nome}
                    onChangeText={(text) => { setNome(text) }} />

                <Text style={styles.desc_caixa_texto}>Cpf</Text>
                <TextInput style={styles.caixa_texto}
                    value={cpf}
                    onChangeText={(text) => { setCpf(text) }} />

                <Text style={styles.desc_caixa_texto}>Rua</Text>
                <TextInput style={styles.caixa_texto}
                    value={rua}
                    onChangeText={(text) => { setRua(text) }} />

                <Text style={styles.desc_caixa_texto}>Numero</Text>
                <TextInput style={styles.caixa_texto}
                    value={numero}
                    onChangeText={(text) => { setNumero(text) }} />

                <Text style={styles.desc_caixa_texto}>Bairro</Text>
                <TextInput style={styles.caixa_texto}
                    value={bairro}
                    onChangeText={(text) => { setBairro(text) }} />

                <Text style={styles.desc_caixa_texto}>Complemento</Text>
                <TextInput style={styles.caixa_texto}
                    value={complemento}
                    onChangeText={(text) => { setComplemento(text) }} />

                <Text style={styles.desc_caixa_texto}>Cidade</Text>
                <TextInput style={styles.caixa_texto}
                    value={cidade}
                    onChangeText={(text) => { setCidade(text) }} />

                <Text style={styles.desc_caixa_texto}>Estado</Text>
                <TextInput style={styles.caixa_texto}
                    value={estado}
                    onChangeText={(text) => { setEstado(text) }} />

                <Text style={styles.desc_caixa_texto}>Nascimento</Text>
                <TextInput style={styles.caixa_texto}
                    value={nascimento}
                    onChangeText={(text) => { setNascimento(text) }} />


                

                <Pressable
                    style={styles.botao}
                    onPress={() => alterar()}
                    disabled={isCarregando}>
                    <Text style={styles.desc_botao}>Alterar</Text>
                </Pressable>
            </ScrollView>
        </View>
    )
}



export default TelaAltNota;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'purple',
        

    },
    titulo: {
        fontSize: 40,
        textAlign: 'center',
        color: 'black',
        marginBottom: 10
    },
    caixa_texto: {
        width: '80%',
        color: 'black',
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