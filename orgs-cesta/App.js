import React from 'react';
import {StatusBar,SafeAreaView} from 'react-native';  //Bibliotecas do React native 

import { 
  useFonts, 
  Montserrat_400Regular, 
  Montserrat_700Bold, 
  Montserrat_400Regular_Italic} 
  from '@expo-google-fonts/montserrat';     //import das fonts do Google

import AppLoading from 'expo-app-loading';  //importando o Apploading que foi instalado

import Cesta from './src/Telas/Cesta';
import mock from './src/mocks/cesta';


export default function App() {
  const[fontsCarregadas] = useFonts({                      //const usado para chamar o uso dessas fonts
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
    "MontserratRegularItalic": Montserrat_400Regular_Italic,
  });

  if(!fontsCarregadas){       //esse if so serve para verificar se a font foi carregada, se sim faz o resto da aplicação
    return <AppLoading/>      //Esse funcao do expo mantem splash screen quando ta em loading
  }

  return (
    <SafeAreaView >
      <Cesta {...mock}/>    
      <StatusBar/>
    </SafeAreaView>
  );
}