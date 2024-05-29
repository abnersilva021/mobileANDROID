
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

    export default HomeNavigator;
    export type { LoginProps, CadUsuarioProps, PrincipalProps, CadNotasProps, ExerAprovProps, ConNotasProps, AltNotaProps, CadClienteProps, CadAtendProps};