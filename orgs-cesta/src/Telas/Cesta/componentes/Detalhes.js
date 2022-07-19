import React from "react";
import { View, Image, Texto, StyleSheet } from "react-native"; 

import logo from "../../../../assets/logo.png";


export default function Detalhes({nome, nomeFazenda, logoFazenda, descricao, preco}){   //dentro das {} sao var que estao no obj "detalhes"
    return <>
        <Texto style={estilos.nome}> { nome }</Texto> 

        <View style={estilos.fazenda}>
            <Image source={logo} style={estilos.imagemFazenda}/>
            <Texto style={estilos.nomeFazenda}> { nomeFazenda }</Texto>
        </View>

        <Texto style={estilos.descricao}>{ descricao }</Texto>
         <Texto style={estilos.preco}> { preco }</Texto>
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