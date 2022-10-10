import React from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";

import Texto from '../../../componentes/Texto'
import Botao from './botao'

export default function Detalhes({nome, logoFazenda, nomeFazenda, descricao, preco }) {
    return <>
    
    <Texto style={estilos.nome}>{nome}</Texto>
        <View style={estilos.fazenda}>
            <Image style={estilos.imagemFazenda} source={logoFazenda}/>
            <Texto style={estilos.nomeFazenda}>{nomeFazenda}</Texto>
        </View>
        <Texto style={estilos.descricao}>{descricao}</Texto>
        <Texto style={estilos.preco}>{preco}</Texto>  
    </>
}

const estilos = StyleSheet.create ({
    nome:
    {
        fontSize: 26,
        lineHeight: 42,
        color:"#464646",
        fontWeight:"bold"
    },
    fazenda:
    {
        flexDirection: "row",
        paddingVertical: 12
    },
    imagemFazenda:
    {
        width: 32,
        height: 32
    },
    nomeFazenda:
    {
        fontSize:16,
        lineHeight:26,
        marginLeft: 12,

    },
    descricao: {
        color:"#A3A3A3",
        fontSize: 16,
        lineHeight:26,
    },
    preco:
    {
        color:"#2a9f25",
        fontWeight:"bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop:8
    },
})