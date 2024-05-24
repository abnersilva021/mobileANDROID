
import TelaCadUsuario from "../Telas/TelaCadUsuario";
import TelaLogin from "../Telas/TelaLogin";
import { NativeStackScreenProps, createNativeStackNavigator } from "@react-navigation/native-stack";
import TelaPrincipal from "../Telas/TelaPrincipal.tsx";

type RootStackParamList = {
    TelaLogin: undefined;
    TelaCadUsuario: undefined;
    TelaPrincipal: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const HomeNavigator = () =>{
    return(
            <Stack.Navigator initialRouteName = "TelaLogin" screenOptions = {{headerShown: false}}>
            <Stack.Screen name = "TelaLogin" component = {TelaLogin}/>
            <Stack.Screen name = "TelaCadUsuario" component = {TelaCadUsuario}/>
            <Stack.Screen name = "TelaPrincipal" component = {TelaPrincipal}/>
        </Stack.Navigator>

    )
}
 
    type LoginProps = NativeStackScreenProps<RootStackParamList, 'TelaLogin'>;

    type CadUsuarioProps = NativeStackScreenProps<RootStackParamList, 'TelaCadUsuario'>;

    type PrincipalProps = NativeStackScreenProps<RootStackParamList, 'TelaPrincipal'>;

    export default HomeNavigator;
    export type { LoginProps, CadUsuarioProps, PrincipalProps};