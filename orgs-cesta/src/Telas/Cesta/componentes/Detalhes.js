import React from "react";
import { View, Image, Texto, StyleSheet } from "react-native"; 

import logo from "../../../../assets/logo.png";

import Texto from "../../../../componentes/Texto"

export default function Detalhes(){
    return <>
        <Texto style={estilos.nome}> Cesta de verduras</Texto> 

        <View style={estilos.fazenda}>
            <Image source={logo} style={estilos.imagemFazenda}/>
            <Texto style={estilos.nomeFazenda}> Jenny Jack Farm</Texto>
        </View>

        <Texto style={estilos.descricao}>Uma cesto com produtos selecionados
            cuidadosamente da fazenda para
            sua cozinha</Texto>
         <Texto style={estilos.preco}> R$ 40,00</Texto>
    </>
}

const estilos = StyleSheet.create({
    nome:{
        color: "#464646",
        fontSize: 26,
        lineHeight: 42,
        fontWeight: "Bold",
    },
    imagemFazenda:{
        width: 32,
        height: 32,
    },
    fazenda:{
        flexDirection: "row",       //direção dos itens flexíveis = modo fileira
        paddingVertical: 12,
    },
    nomeFazenda:{
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
    },
    descricao:{
        color: "A3A3A3",
        fontSize:  16 ,
        lineHeight: 16,
    },
    preco:{
        color: "#2A9F85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8, 
    },

});