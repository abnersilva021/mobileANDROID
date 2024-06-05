import { FirebaseAuthTypes } from "@react-native-firebase/auth";
import { FirebaseFirestoreTypes } from "@react-native-firebase/firestore";

type IAtendimento = {
 id: string | undefined,
 descricao: string,
 nome: string,
 data: string,
 created_at: FirebaseFirestoreTypes.FieldValue
 
}

export type{
    IAtendimento
}