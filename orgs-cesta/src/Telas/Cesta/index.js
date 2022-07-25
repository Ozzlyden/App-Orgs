import React from 'react';
import {StyleSheet, View}  from 'react-native';


import Topo from './componentes/Topo.js';
import Detalhes from './componentes/Detalhes.js';
import Itens from './componentes/Itens';

export default function Cesta(topo, detalhes, itens ){
    //<> Fraquimento q serve para agrupa elementos, como return so para retorna um elemento
    // ...  significa a desconstrucao do obj detalhes, trazendo a info desse obj
    return <>  
     <Topo {...topo}/>

    <View style={estilos.cesta}>
       <Detalhes {...detalhes}/>
       <Itens {...itens}/>   
    </View>
     </>
}

const estilos = StyleSheet.create({
    cesta:{
        paddingVertical: 8,         //Preenchimento Vertical
        paddingHorizontal: 16,      //Preenchimento Horizontal
    },
});