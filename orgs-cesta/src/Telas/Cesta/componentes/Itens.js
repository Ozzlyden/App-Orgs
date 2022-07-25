import React from 'react';
import {StyleSheet, ScrollView ,View, Image, FlatList } from 'react-native';

import Texto from '../../../componentes/Texto';

export default function Itens({titulo, lista}){

    const renderItem = ({ item: {nome, imagem } }) => <View key = {nome} style ={estilos.item}>          
            <Image source={ imagem } style ={estilos.imagem}/>
            <Texto style ={estilos.nome}> { nome } </Texto>
        </View>

    return <> 
    <Texto style={estilos.titulo}> { titulo } </Texto>
    <FlatList 
        data ={list}
        renderItem={ renderItem }
        keyExtractor={( { nome } ) => nome}/>
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
    },
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