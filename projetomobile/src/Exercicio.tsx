import React from 'react';
import {Text} from 'react-native';

type Props = {
    nome: string;
    nota1: number;
    nota2: number;

}

const Aprovado = (props: Props) => {
    let resultado = ''
    if((props.nota1 + props.nota2)/ 2 >=7){
        
         resultado = 'parabens voce ' + props.nome + ' aprovado ' + (props.nota1 + props.nota2)/ 2

    }else{
        resultado = 'Infelizmente o aluno  ' + props.nome + ' foi reprovado ' + (props.nota1 + props.nota2)/ 2 
    }
    return(
     <Text style={{fontSize: 40, color: 'red'}}>
        {resultado}
        
        </Text>
    )
};

export default Aprovado;