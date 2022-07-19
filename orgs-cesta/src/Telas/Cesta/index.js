import React from "react";
import {StyleSheet, View}  from "react-native";


import Topo from "./componentes/Topo.js";
import Detalhes from "./componentes/Detalhes.js";

export default function Cesta(){
    //<> Fraquimento q serve para agrupa elementos, como return so para retorna um elemento
    return <>  
     <Topo/>

    <View style={estilos.cesta}>
       <Detalhes/>
    </View>
     </>
}

const estilos = StyleSheet.create({
    cesta:{
        paddingVertical: 8,         //Preenchimento Vertical
        paddingHorizontal: 16,      //Preenchimento Horizontal
    },
});