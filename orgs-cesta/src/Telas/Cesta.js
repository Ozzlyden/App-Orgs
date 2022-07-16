import React from "react";
import {Image, StyleSheet, Dimensions, Text}  from "react-native";

import topo from"../../assets/topo.png"

const width = Dimensions.get("screen").width;

export default function Cesta(){
    //<> Fraquimento q serve para agrupa elementos, como return so para retorna um elemento
    return <>   
     <Image source={topo} style ={estilos.topo}/>
     <Text> style={estilos.titulo} Detalhe da cesta</Text>
     </>
}

const estilos = StyleSheet.create({
    topo:{
        with: "100%",
        height: 578 / 768 *width,     //para fazer a altura responsiva com a tela do cel
    },
    titulo: {
        width: "100%",
        position: "absolute",       //Joga o texto la para cima
        textAlign: "center",        //alinha o texto no centro
        fontSize: 16,
        lineHeight: 26,
        colo: "white",
        fontWeight: "bold",
        padding: 16
    }
})