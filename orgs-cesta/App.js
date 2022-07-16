import React from 'react';
import {StatusBar,SafeAreaView} from 'react-native';  //Bibliotecas do React native 
import Cesta from './src/Telas/Cesta';

export default function App() {
  return (
    <SafeAreaView >
      <Cesta/>
      <StatusBar/>
    </SafeAreaView>
  );
}