
import TelaCadUsuario from "../Telas/TelaCadUsuario";
import TelaLogin from "../Telas/TelaLogin";
import { NativeStackScreenProps, createNativeStackNavigator } from "@react-navigation/native-stack";
import TelaPrincipal from "../Telas/TelaPrincipal.tsx";
import TelaCadNota from "../Telas/TelaCadNotas.tsx";
import ExerAprov from "../ExerAprov.tsx";



type RootStackParamList = {
    TelaLogin: undefined;
    TelaCadUsuario: undefined;
    TelaPrincipal: undefined;
    TelaCadNota: undefined;
    ExerAprov: undefined;
    
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const HomeNavigator = () =>{
    return(
            <Stack.Navigator initialRouteName = "TelaLogin" screenOptions = {{headerShown: false}}>
            <Stack.Screen name = "TelaLogin" component = {TelaLogin}/>
            <Stack.Screen name = "TelaCadUsuario" component = {TelaCadUsuario}/>
            <Stack.Screen name = "TelaPrincipal" component = {TelaPrincipal}/>
            <Stack.Screen name = "TelaCadNota" component = {TelaCadNota}/>
            <Stack.Screen name = "ExerAprov" component = {ExerAprov}/>
        </Stack.Navigator>

    )
}
 
    type LoginProps = NativeStackScreenProps<RootStackParamList, 'TelaLogin'>;

    type CadUsuarioProps = NativeStackScreenProps<RootStackParamList, 'TelaCadUsuario'>;

    type PrincipalProps = NativeStackScreenProps<RootStackParamList, 'TelaPrincipal'>;

    type CadNotasProps = NativeStackScreenProps<RootStackParamList, 'TelaCadNota'>;

    type ExerAprovProps = NativeStackScreenProps<RootStackParamList, 'ExerAprov'>;

    export default HomeNavigator;
    export type { LoginProps, CadUsuarioProps, PrincipalProps, CadNotasProps, ExerAprovProps};