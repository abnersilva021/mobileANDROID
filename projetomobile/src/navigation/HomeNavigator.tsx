
import TelaCadUsuario from "../Telas/TelaCadUsuario";
import TelaLogin from "../Telas/TelaLogin";
import { NativeStackScreenProps, createNativeStackNavigator } from "@react-navigation/native-stack";
import TelaPrincipal from "../Telas/TelaPrincipal";
import TelaCadNotas from "../Telas/TelaCadNotas";
import ExerAprov from "../ExerAprov";
import TelaConNotas from "../Telas/TelaConNotas";
import TelaAltNota from "../Telas/TelaAltNota";
import TelaCadCliente from "../Telas/TelaCadCliente";
import TelaCadAtend from "../Telas/TelaCadAtend";

import PrimeiraAtiv from "../AtivAvali2905/PrimeiraAtiv";

import SegundaAtiv2 from "../AtivAvali2905/SegundaAtiv2";

import TerceiraAtiv3 from "../AtivAvali2905/TerceiraAtiv3";







type RootStackParamList = {
    TelaLogin: undefined;
    TelaCadUsuario: undefined;
    TelaPrincipal: undefined;
    TelaCadNotas: undefined;
    ExerAprov: undefined;
    TelaConNotas: undefined;
    TelaAltNota: {id: string};
    TelaCadAtend: undefined;
    TelaCadCliente: undefined;

    PrimeiraAtiv: undefined;
    SegundaAtiv2: undefined;
    TerceiraAtiv3: undefined;

};

const Stack = createNativeStackNavigator<RootStackParamList>();

const HomeNavigator = () =>{
    return(
            <Stack.Navigator initialRouteName = "TelaLogin" screenOptions = {{headerShown: false}}>
            <Stack.Screen name = "TelaLogin" component = {TelaLogin}/>
            <Stack.Screen name = "TelaCadUsuario" component = {TelaCadUsuario}/>
            <Stack.Screen name = "TelaPrincipal" component = {TelaPrincipal}/>
            <Stack.Screen name = "TelaCadNotas" component = {TelaCadNotas}/>
            <Stack.Screen name = "ExerAprov" component = {ExerAprov}/>
            <Stack.Screen name = "TelaConNotas" component = {TelaConNotas}/>
            <Stack.Screen name = "TelaAltNota" component = {TelaAltNota}/>
            <Stack.Screen name = "TelaCadCliente" component = {TelaCadCliente}/>
            <Stack.Screen name = "TelaCadAtend" component = {TelaCadAtend}/>

            <Stack.Screen name = "PrimeiraAtiv" component = {PrimeiraAtiv}/>
            <Stack.Screen name = "SegundaAtiv2" component = {SegundaAtiv2}/>
            <Stack.Screen name = "TerceiraAtiv3" component = {TerceiraAtiv3}/>

            
        </Stack.Navigator>

    )
}
 
    type LoginProps = NativeStackScreenProps<RootStackParamList, 'TelaLogin'>;

    type CadUsuarioProps = NativeStackScreenProps<RootStackParamList, 'TelaCadUsuario'>;

    type PrincipalProps = NativeStackScreenProps<RootStackParamList, 'TelaPrincipal'>;

    type CadNotasProps = NativeStackScreenProps<RootStackParamList, 'TelaCadNotas'>;

    type ExerAprovProps = NativeStackScreenProps<RootStackParamList, 'ExerAprov'>;

    type ConNotasProps = NativeStackScreenProps<RootStackParamList, 'TelaConNotas'>;

    type AltNotaProps = NativeStackScreenProps<RootStackParamList, 'TelaAltNota'>;

    type CadAtendProps = NativeStackScreenProps<RootStackParamList, 'TelaCadAtend'>;

    type CadClienteProps = NativeStackScreenProps<RootStackParamList, 'TelaCadCliente'>;

    type AtivProps = NativeStackScreenProps<RootStackParamList, 'PrimeiraAtiv'>;
    type Ativ2Props = NativeStackScreenProps<RootStackParamList, 'SegundaAtiv2'>;
    type Ativ3Props = NativeStackScreenProps<RootStackParamList, 'TerceiraAtiv3'>;

    export default HomeNavigator;
    export type { LoginProps, CadUsuarioProps, PrincipalProps, CadNotasProps, ExerAprovProps, ConNotasProps, AltNotaProps, CadClienteProps, CadAtendProps, AtivProps, Ativ2Props, Ativ3Props};