import React from "react";
import {Image, StyleSheet, Dimensions, Text, View}  from "react-native";

import topo from"../../assets/topo.png";
import logo from "../../assets/logo.png";

const width = Dimensions.get("screen").width;

export default function Cesta(){
    //<> Fraquimento q serve para agrupa elementos, como return so para retorna um elemento
    return <>   
     <Image source={topo} style ={estilos.topo}/>
     <Text style={estilos.titulo}>  Detalhe da cesta</Text>

    <View style={estilos.cesta}>
        <Text style={estilos.nome}> Cesta de verduras</Text>
        <View style={estilos.fazenda}>
            <Image source={logo} style={estilos.imagemFazenda}/>
            <Text style={estilos.nome}> Cesta de verduras</Text> 
        </View>
        <Text style={estilos.nomeFazenda}> Jenny Jack Farm</Text>
        <Text style={estilos.descricao}>Uma cesto com produtos selecionados
            cuidadosamente da fazenda para
             sua cozinha</Text>
        <Text style={estilos.preco}> R$ 40,00</Text>
    </View>
     </>
}

const estilos = StyleSheet.create({
    topo:{
        width: "100%",
        height: 578 / 768 *width,     //para fazer a altura responsiva com a tela do cel
    },
    titulo: {
        width: "100%",              //largura
        position: "absolute",       //Joga o texto la para cima
        textAlign: "center",        //alinha o texto no centro
        fontSize: 16,               //tamanho fonte
        lineHeight: 26,             //Distancia entre as linhas
        color: "white",
        fontWeight: "bold",         //Grossura ou finura do texto = modo negrito
        padding: 16                 //Preenchimento do texto
    },
    cesta:{
        paddingVertical: 8,         //Preenchimento Vertical
        paddingHorizontal: 16,      //Preenchimento Horizontal
    },

    nome:{
        color: "#464646",
        fontSize: 26,
        lineHeight: 42,
        fontWeight: "bold",
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