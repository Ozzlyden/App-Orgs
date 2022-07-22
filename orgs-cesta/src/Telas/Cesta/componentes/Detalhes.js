import React from 'react';
import { View, Image, Texto, StyleSheet, TouchableOpacity} from 'react-native'; 

import Texto from '../../../componentes/Texto';


export default function Detalhes ({nome, nomeFazenda, logoFazenda, descricao, preco, botao}){   //dentro das sao var que estao no obj "detalhes"
    return <>
        <Texto style={estilos.nome}> { nome }</Texto> 

        <View style={estilos.fazenda}>
            <Image source={logoFazenda} style={estilos.imagemFazenda}/>
            <Texto style={estilos.nomeFazenda}> { nomeFazenda }</Texto>
        </View>

        <Texto style={estilos.descricao}>{ descricao }</Texto>
         <Texto style={estilos.preco}> { preco }</Texto>

         <TouchableOpacity style={estilos.botao}> 
            <Texto style={estilos.textoBotao}> { botao} </Texto>
        </TouchableOpacity>
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
    botao:{
        marginTop: 16,
        backgroundColor: "#2A9F85",
        paddingVertical: 16,
        borderRadius: 6,                //Arrendondar a borda
    },
    textoBotao:{
        textAlign: "center",
        color: "ffffff",
        fontSize: 16,
        lineHeight: 26,
        fontWeight: "Bold",
    },

});