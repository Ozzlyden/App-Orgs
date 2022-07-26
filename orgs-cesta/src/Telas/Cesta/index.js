import React from 'react';
import {StyleSheet, View, FlatList  }  from 'react-native';


import Topo from './componentes/Topo.js';
import Detalhes from './componentes/Detalhes.js';
import Item from './componentes/Item';
import Texto from '../../componentes/Texto.js';

export default function Cesta(topo, detalhes, itens ){
    //<> Fraquimento q serve para agrupa elementos, como return so para retorna um elemento
    // ...  significa a desconstrucao do obj detalhes, trazendo a info desse obj
    return <>

    <FlatList 
        data ={itens.lista}
        renderItem={ Item }
        keyExtractor={( { nome } ) => nome}
        ListHeaderComponent={ ()  => {
            return <> 
            <Topo {...topo}/>
            <View style={estilos.cesta}>
                <Detalhes {...detalhes}/> 
                <Texto style={estilos.titulo}> { itens.titulo} </Texto> 
            </View>
            </>
        }}
    />

     </>
}

const estilos = StyleSheet.create({
    titulo: {
        color: "#464646",
        fontWeight: "Bold",
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32,
    },
    cesta:{
        paddingVertical: 8,         //Preenchimento Vertical
        paddingHorizontal: 16,      //Preenchimento Horizontal
    },
});