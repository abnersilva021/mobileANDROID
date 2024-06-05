// Cadastro de atendimento (Cadastrar, listar). Com dados de cliente, data, hora e descrição do atendimento.(Criar validação para os campos. Ex: somente números, formato da data)
import React, { useEffect, useState } from "react";
import { Alert, Text, TextInput, View, StyleSheet, Pressable, ScrollView, Button } from "react-native";

import firestore from "@react-native-firebase/firestore";
import Carregamento from "../Carregamento";
import { CadAtend2Props } from "../navigation/HomeNavigator";
import { INotas } from "../model/INotas";
import { IAtendimento } from "../model/IAtendimento";
import { Dropdown } from "react-native-element-dropdown";
import DatePicker from "react-native-date-picker";


const TelaCadAtendimento = ({ navigation, route }: CadAtend2Props) => {
    const [atendimento, setAtendimento] = useState([] as IAtendimento[]);
    const [isCarregando, setIsCarregando] = useState(false);
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
    const [date, setDate] = useState(new Date());
    const [open, setOpen] = useState(false);
    const [descricao, setDescricao] = useState('');
    const [nome, setNome] = useState(String);

    function Cadastrar() {
        setIsCarregando(true);

        if (verificaCampos()) {
            let nota = {
                nome: nome,
                data: date.toLocaleString(),
                descriçao: descricao,
                created_at: firestore.FieldValue.serverTimestamp()
            } as IAtendimento;

            firestore()
                .collection('atendimentos')
                .add(nota)
                .then(() => {
                    Alert.alert("Atendimento", "Cadastrado com sucesso")
                    navigation.navigate('TelaPrincipal')
                })
                .catch((error) => console.log(error))
                .finally(() => setIsCarregando(false));
        }
        setIsCarregando(false);
    }
    function verificaCampos() {
        if (nome == "") {
            Alert.alert("Nome em branco")
            return false;
        }
        if (date.toLocaleString() == "") {
            Alert.alert("Data/hora em branco")
            return false;
        }
        if (descricao == "") {
            Alert.alert("Descrição em branco")
            return false;
        }
        return true;
    }
    useEffect(() => {
        setIsCarregando(true);

        const subscribe = firestore()
            .collection('notas')
            .onSnapshot(querySnapshot => {
                const data = querySnapshot.docs.map(doc => {

                    return {
                        id: doc.id,
                        ...doc.data()
                    }

                }) as IAtendimento[];

                setAtendimento(data);
                setIsCarregando(false);
            });

        return () => subscribe();
    }, []);

    return (
        <View style={styles.container}>

            <Carregamento isCarregando={isCarregando} />

            <ScrollView >

                <Text style={styles.titulo}>Cadastro de Atendimento</Text>

                <Text style={styles.label}>Pesquisar Cliente</Text>
                <Dropdown
                    style={styles.dropdown}
                    placeholderStyle={styles.placeholder}
                    selectedTextStyle={styles.selected}
                    inputSearchStyle={styles.input}
                    data={atendimento}
                    search
                    maxHeight={300}
                    labelField="nome"
                    valueField="nome"
                    placeholder={!isFocus ? 'Selecionar' : '...'}
                    searchPlaceholder="Search..."
                    value={value}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    onChange={item => {
                        setValue(item.nome as any);
                        setNome(item.nome);
                        setIsFocus(false);
                    }}
                />

                <Text style={styles.label}>Data/hora</Text>
                <TextInput
                    style={styles.caixa_texto} onPress={() => setOpen(true)} value={date.toLocaleString()} />
                <DatePicker
                    modal
                    open={open}
                    date={date}
                    onConfirm={(date) => {
                        setOpen(false)
                        setDate(date)

                    }}
                    onCancel={() => {
                        setOpen(false)
                    }}
                />

                <Text
                    style={styles.label}>
                    Descrição
                </Text>
                <TextInput
                    multiline
                    numberOfLines={4}
                    maxLength={100}
                    style={styles.caixa_texto}
                    value={descricao}
                    onChangeText={(text) => { setDescricao(text) }} />

                <Pressable
                    style={(state) => [styles.botao, state.pressed ? { opacity: 0.5 } : null]}
                    onPress={() => Cadastrar()} disabled={isCarregando}>
                    <Text style={styles.desc_botao}>Cadastrar</Text>
                </Pressable>

                <Pressable
                    style={(state) => [styles.botao, state.pressed ? { opacity: 0.5 } : null]}
                    onPress={() => { navigation.navigate('TelaPrincipal') }}>
                    <Text style={styles.desc_botao}>Voltar</Text>
                </Pressable>

            </ScrollView>
        </View >
    )
}

export default TelaCadAtendimento;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'purple'
    },
    titulo: {
        textAlign: 'center',
        fontSize: 35,
        fontWeight: 'bold',
        color: '#000000',
        paddingBottom: 50
    },
    dropdown: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8
    },
    placeholder: {
        fontSize: 20
    },
    selected: {
        fontSize: 20
    },
    input: {
        height: 40,
        fontSize: 16,
    },
    label: {
        color: '#222',
        fontWeight: 'bold',
        fontSize: 18,
        paddingLeft: 5,
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
        borderWidth: 3,
        marginVertical: 10,
        color: 'black',
        justifyContent: 'center',
        backgroundColor: 'white',
        paddingVertical: 10,
        paddingHorizontal: 30,
        marginTop: 20,
        borderRadius: 10
    },
    desc_botao: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'black',
        fontSize: 18
    },
    desc_caixa_texto: {
        fontSize: 18
    }
});
