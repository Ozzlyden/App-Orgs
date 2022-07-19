import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function Texto({children, style }){            //children retorna uma coleção de elementos filho de um elemento, e o style ta pegando estilo base desse filhos
    let estilo = estilos.texto;

    if(style?.fontWeight === "Bold"){            //Quando nao tiver esse style no item, chama a const e aplica texto.Negrito
                                                //? serve com uma trava, para n dar erro do item nem ter styleSheet
        estilo = estilos.textoNegrito;
    };

    return <Text style={[style, estilo]}>{children}</Text>
};

const estilos = StyleSheet.create({
    texto:{
        fontFamily: "MontserratRegular",
        fontWeight: "normal",
    },
    textoNegrito:{
        fontFamily: "MontserratBold",
        fontWeight: "normal",
    }
})