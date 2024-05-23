
import TelaCadUsuario from "../TelaCadUsuario";
import TelaLogin from "../TelaLogin";
import { NativeStackScreenProps, createNativeStackNavigator } from "@react-navigation/native-stack";

type RootStackParamList = {
    TelaLogin: undefined;
    TelaCadUsuario: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const HomeNavigator = () =>{
    return(
            <Stack.Navigator initialRouteName = "TelaLogin" screenOptions = {{headerShown: false}}>
            <Stack.Screen name = "TelaLogin" component = {TelaLogin}/>
            <Stack.Screen name = "telaCadUsuario" component = {TelaCadUsuario}/>
        </Stack.Navigator>

    )
}
 
    type LoginProps = NativeStackScreenProps<RootStackParamList, 'TelaLogin'>;

    type CadUsuarioProps = NativeStackScreenProps<RootStackParamList, 'TelaCadUsuario'>;

    export default HomeNavigator;
    export type { LoginProps, CadUsuarioProps};