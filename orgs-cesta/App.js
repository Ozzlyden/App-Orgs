import React from 'react';
import { StatusBar, SafeAreaView, View } from 'react-native';   //Bibliotecas do React native 
import { 
  useFonts, 
  Montserrat_400Regular, 
  Montserrat_700Bold,
} from '@expo-google-fonts/montserrat';     //import das fonts do Google
import AppLoading from 'expo-app-loading';  //importando o Apploading que foi instalado

import Cesta from './src/telas/Cesta';
import mock from './src/mocks/cesta';

export default function App() {
  const [fonteCarregada] = useFonts({           //const usado para chamar o uso dessas fonts
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
  });

  if (!fonteCarregada) {           //esse if so serve para verificar se a font foi carregada, se sim faz o resto da aplicação
    return <AppLoading />          //Esse funcao do expo mantem splash screen quando ta em loading
  }

  return (
    //Esse flex serve para definir o tamanho da tela toda
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <Cesta {...mock} />
    </SafeAreaView>
  );
}