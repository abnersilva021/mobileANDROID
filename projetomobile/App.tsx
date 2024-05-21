import React from 'react';
import {Text, TextInput, View} from 'react-native';

import HelloWorld from './src/HelloWorld';
import Gato from './src/Exemplo2Gato';
import NomePersonalizado from './src/ExemploParametro';
import Aprovado from './src/ExerAprov';
import TelaLogin from './src/TelaLogin';

function App(): React.JSX.Element{
  return(
    <TelaLogin/>
    //<Tela/>
    
  //  <>
  //    <View style={{backgroundColor: 'green', borderRadius: 15}}>

  //      <HelloWorld/>
  //      <Gato/>
  //      <NomePersonalizado nome = 'Abner' sobrenome = {'Silva'}/>
  //      <Aprovado nome = 'Abner' nota1 = {2} nota2 = {3}/>
  //    </View>
  // </>

  );
}

export default App;

