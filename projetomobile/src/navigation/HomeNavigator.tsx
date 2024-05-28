
import TelaCadUsuario from "../Telas/TelaCadUsuario";
import TelaLogin from "../Telas/TelaLogin";
import { NativeStackScreenProps, createNativeStackNavigator } from "@react-navigation/native-stack";
import TelaPrincipal from "../Telas/TelaPrincipal";
import TelaCadNotas from "../Telas/TelaCadNotas";
import ExerAprov from "../ExerAprov";
import TelaConNotas from "../Telas/TelaConNotas";
import TelaAltNota from "../Telas/TelaAltNota";




type RootStackParamList = {
    TelaLogin: undefined;
    TelaCadUsuario: undefined;
    TelaPrincipal: undefined;
    TelaCadNotas: undefined;
    ExerAprov: undefined;
    TelaConNotas: undefined;
    TelaAltNota: {id: string};
    
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

    export default HomeNavigator;
    export type { LoginProps, CadUsuarioProps, PrincipalProps, CadNotasProps, ExerAprovProps, ConNotasProps, AltNotaProps};