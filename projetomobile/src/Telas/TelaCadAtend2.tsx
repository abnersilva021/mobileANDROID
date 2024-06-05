

import { Alert, Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native"


import { CadAtend2Props } from "../navigation/HomeNavigator";
import { Dropdown } from "react-native-element-dropdown";
import { useEffect, useState } from "react";
import { INotas } from "../model/INotas";
import { IAtendimento } from "../model/IAtendimento";
import firestore from "@react-native-firebase/firestore";
import DatePicker from "react-native-date-picker";


const TelaCadAtend2 = ({ navigation, route }: CadAtend2Props) => {
    const [isFocus, setIsFocus] = useState(false);
    const [value, setValue] = useState(null);
    const [isCarregando, setIsCarregando] = useState(false);
    const [Clientes, setIsClientes] = useState([] as INotas[]);
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)


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

                }) as INotas[];

                setIsClientes(data);
                setIsCarregando(false);
            });

        return () => subscribe();
    }, []);



    return (
        <View style={styles.container}>

            <Image
                style={styles.imagem}
                source={{ uri: 'https://cdn4.iconfinder.com/data/icons/essential-app-2/16/user-avatar-human-admin-login-256.png' }} />

            <Text style={styles.titulo}>Cadastro</Text>

            <Dropdown
                style={styles.dropdown}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={Clientes}
                search
                maxHeight={300}
                labelField="nome"
                valueField="nome"
                placeholder={!isFocus ? 'Select item' : '...'}
                searchPlaceholder="Search..."
                value={value}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                    setValue(item.nome as any);
                    setIsFocus(false);
                }}

            />
            <TextInput style={styles.caixa_texto} onPress={() => setOpen(true)} value={date.toLocaleString()}/>
                
            

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

            <Pressable
                style={(state) => [styles.botao, state.pressed ? { opacity: 0.5 } : null]}
                onPress={() => { navigation.navigate('TelaPrincipal') }}>
                <Text style={styles.desc_botao}>Voltar</Text>
            </Pressable>
        </View>


    )


}
export default TelaCadAtend2;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'purple',
        padding: 16,
    },
    dropdown: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
    },
    icon: {
        marginRight: 10,
    },
    label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
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
    titulo: {
        fontSize: 25,
        alignItems: 'center',
        alignSelf: 'center'
    },
    imagem: {
        width: 200,
        height: 200,
        resizeMode: "center",
        alignSelf: 'center'
    }, 
    caixa_texto: {

    }
});

