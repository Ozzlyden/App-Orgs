import React from 'react';
import {StyleSheet, ScrollView ,View, Image } from 'react-native';

import Texto from '../../../componentes/Texto';

export default function Itens({titulo, lista}){
    return <> 
    <Texto style={estilos.titulo}> { titulo } </Texto>
    { lista.map(({ nome, imagem }) => {
        return <ScrollView>                  //tag para colocar a barra de deslizamento lateral
                <View key = {nome} style ={estilos.item}>          //essas key é um chave para o uso da lista "array" 
                    <Image source={ imagem } style ={estilos.imagem}/>
                    <Texto style ={estilos.nome}> { nome } </Texto>
                </View>
            </ScrollView>
    })}
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
    item:{
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#ECECEC",
        paddingVertical: 16,
        alinItens: "center",
    }
    imagem:{
        width: 46,
        height: 46,
    },
    nome: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 11,
        color: "#464646",
    },

});