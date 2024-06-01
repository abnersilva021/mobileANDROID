import { FirebaseAuthTypes } from "@react-native-firebase/auth";
import { FirebaseFirestoreTypes } from "@react-native-firebase/firestore";

type INotas = {
 id: string | undefined,
 titulo: string,
 descricao: string,
 nome: string,
 cpf: string,
 rua: string,
 numero: string,
 bairro: string,
 complemento: string,
 cidade: string,
 estado: string, 
 nascimento:string;
 created_at: FirebaseFirestoreTypes.FieldValue
 
}

export type{
    INotas
}