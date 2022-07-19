import React from "react";
import { Image, StyleSheet, Dimensions } from "react-native";
import Texto from "../../../componentes/Texto";
import topo from"../../../../assets/topo.png";

const width = Dimensions.get("screen").width;

export default function Topo(){
    return <>
        <Image source={topo} style ={estilos.topo}/>
        <Texto style={estilos.titulo}>  Detalhe da cesta</Texto>
    </>
};


const  estilos = StyleSheet.create({
    topo:{
        width: "100%",
        height: 578 / 768 *width,     //para fazer a altura responsiva com a tela do cel
        fontFamily: "Montserrat",
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

});