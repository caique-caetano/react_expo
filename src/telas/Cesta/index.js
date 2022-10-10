import React from 'react';
import { StyleSheet, View, FlatList} from 'react-native';

import Texto from '../../componentes/Texto';

// import Texto from '../../componentes/Texto';

import Topo from './componentes/Topo';
import Detalhes from './componentes/Detalhes';
import Botao from './componentes/botao';
import Item from './componentes/Item';


// const width = Dimensions.get('screen').width;

export default function Cesta({topo, detalhes, botao, itens})
{
    return <> 

    <FlatList
        data={itens.lista}
        renderItem={Item}
        keyExtractor = {({nome}) => nome}
        ListHeaderComponent = {() => {
            return <>
             <Topo {...topo}/>
                <View style={estilos.cesta}>
                    <Detalhes {...detalhes}/>
                    <Botao {...botao}/>
                    <Texto style={ estilos.titulo }>{ itens.titulo }</Texto>
                </View>
            </>
        }}
    />
   
    </>
}

const estilos = StyleSheet.create({
    cesta:
    {
        paddingVertical:8,
        paddingHorizontal: 16,
    },
    titulo: 
    {
        color: "#464646",
        fontWeight: "bold",
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32,
    },
})