import React from 'react';
import {StatusBar,SafeAreaView, View} from 'react-native';  //Bibliotecas do React native 
import Cesta from './src/telas/Cesta';
import { 
  useFonts, 
  Montserrat_400Regular, 
  Montserrat_700Bold, 
  Montserrat_400Regular_Italic} 
  from '@expo-google-fonts/montserrat';   //import das fonts do Google

export default function App() {
  const[fontsCarregadas] = useFonts({                      //const usado para chamar o uso dessas fonts
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
    "MontserratRegularItalic": Montserrat_400Regular_Italic,
  });

  if(!fontsCarregadas){       //esse if so serve para verificar se a font foi carregada, se sim faz o resto da aplicação
    return <View/>
  }

  return (
    <SafeAreaView >
      <Cesta/>
      <StatusBar/>
    </SafeAreaView>
  );
}