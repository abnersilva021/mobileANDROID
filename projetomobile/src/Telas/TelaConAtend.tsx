import { useState, useEffect } from "react";
import { Alert, Pressable, FlatList, StyleSheet, Text, View } from "react-native";

import firestore from "@react-native-firebase/firestore";
import { INotas } from "../model/INotas";
import { ConAtendProps } from "../navigation/HomeNavigator";
import Carregamento from "../Carregamento";
import { IAtendimento } from "../model/IAtendimento";

type ItemNotaProps = {
    numero: number,
    atendimento: IAtendimento;
    
    onDeletar: (id: string) => void;
}

const ItemNota = (props: ItemNotaProps) => {

    return (
        <View style={styles.card}>
            <View style={styles.dados_card}>

                <Text style={{ fontSize: 35 }}>
                    {props.numero + 1 + ' - ' + props.atendimento.nome}
                </Text>

                <Text style={{ fontSize: 35 }}>
                    {props.numero + 1 + ' - ' + props.atendimento.data}
                </Text>

                <Text style={{ fontSize: 35 }}>
                    {props.numero + 1 + ' - ' + props.atendimento.descriçao}
                </Text>

            </View>

            

            <View style={styles.botao_deletar}>
                <Pressable
                    onPress={() => props.onDeletar(props.atendimento.id!)}>
                    <Text style={styles.texto_botao_card}>
                        X
                    </Text>
                </Pressable>
            </View>
        </View>
    );
}

const TelaConAtendimento = ({ navigation, route }: ConAtendProps) => {
    const [cliente, setCliente] = useState([] as INotas[]);
    const [isCarregando, setIsCarregando] = useState(false);
    const [atendimento, setAtendimento] = useState([] as IAtendimento[]);

    useEffect(() => {
        setIsCarregando(true);

        const subscribe = firestore()
            .collection('atendimentos')
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

    // function alterarCliente(id: string) {
    //     navigation.navigate("TelaAltCliente", { id: id })
    // }

    function deletarCliente(id: string) {
        setIsCarregando(true);

        firestore()
            .collection('atendimentos')
            .doc(id)
            .delete()
            .then(() => {
                Alert.alert("Atendimento", "Removido com sucesso")
            })
            .catch((error) => console.log(error))
            .finally(() => setIsCarregando(false));
    }

    return (
        <View style={styles.container}>
            <Carregamento isCarregando={isCarregando} />

            <Text style={styles.titulo}>Consulta de Atendimento</Text>
            <FlatList
                data={atendimento}
                renderItem={(info) =>
                    <ItemNota numero={info.index} atendimento={info.item}  onDeletar={deletarCliente} />}>
            </FlatList>
            <Pressable
                style={(state) => [styles.botao, state.pressed ? { opacity: 0.5 } : null]}
                onPress={() => { navigation.navigate('TelaPrincipal') }}>
                <Text style={styles.desc_botao}>Voltar</Text>
            </Pressable>
        </View>
    );
}

export default TelaConAtendimento;

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
    card: {
        borderWidth: 2,
        borderColor: 'grey',
        margin: 5,
        borderRadius: 10,
        padding: 3,
        flexDirection: 'row',
        backgroundColor: 'white'
    },
    dados_card: {
        flex: 1
    },
    botao_deletar: {
        backgroundColor: 'purple',
        width: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    botao_alterar: {
        backgroundColor: 'yellow',
        width: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    texto_botao_card: {
        fontWeight: 'bold',
        fontSize: 40,
        color: 'black'
    },
    botao: {
        borderWidth: 3,
        marginVertical: 10,
        color: 'white',
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
    }
});