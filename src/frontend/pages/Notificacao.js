import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { TextInput, Headline, Button } from 'react-native-paper';
import { useAuth } from '../services/auth.services';

 
const NotificacaoItem = ( {id, titulo, subtitulo, imagem, onPress} ) => {
    console.log(id);
    return (
    <TouchableOpacity style={styles.lanceItemContainer} onPress={onPress}>
        <View style={styles.notificacaoContainer}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: imagem }} style={styles.image} />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.titulo}>{titulo}</Text>
                <Text style={styles.subtitulo}>{subtitulo}</Text>
            </View>
        </View>
    </TouchableOpacity>
    );
};
const ClicaNotificacao = async (id) => {
    console.log(id);
    //navigation.navigate('MeusLeiloesDetalhes', { id });

}
const Notificacoes = () => {
    const navigation = useNavigation();
    const { usuario } = useAuth();
    const usuarioId = usuario.usuarioId;
 
    const [meusLeiloes, SetMeusLeiloes] = useState([]);
    const [meusLances, setMeusLances] = useState([])
 
    useEffect(() => {
        const getLeiloes = async () => {
            try {
                const leiloesResponse = await fetch(`http://localhost:3000/leilao/meusleiloes?usuarioId=2`);
                const lancesResponse = await fetch(`http://localhost:3000/lances/user/${usuarioId}`);
 
                const leiloesData = await leiloesResponse.json();
                const lancesData = await lancesResponse.json()
 
                SetMeusLeiloes(leiloesData.meusLeiloes);
                setMeusLances(lancesData);
 
                console.log(meusLances);
                console.log(lancesData)
            } catch (error) {
                console.error(error);
            }
        };
 
        getLeiloes();
    }, []);
 
    return (
 
        <ScrollView style={styles.container}>
            <View style={styles.head}>
                <Headline style={styles.textHeader}>Notificações</Headline>
            </View>
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Meus Leilões</Text>
                {
                    meusLeiloes && meusLeiloes.map(leilao =>{
                        console.log(leilao.id);
                        var id = leilao.id;
                       return ( 
                       <NotificacaoItem
                            id={leilao.id}
                            titulo={leilao.produto.nomeProduto}
                            subtitulo={leilao.precoAtual}
                            imagem={leilao.produto.urlImagemProduto}
                            onPress={() => navigation.navigate('MeusLeiloesDetalhes', { id })}
                        />);}
                    )
                }
            </View>
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Meus Lances</Text>
                {
                    meusLances && meusLances.map(lance =>{
                        console.log(lance);
                            var sub = "Lance superado!";
                            if (lance.valorLance == lance.leilao.precoAtual){
                                sub = "Você está ganhando!"
                            }else if (lance.leilao.statusLeilao == "encerrado" && sub == "Você está ganhando!"){
                                sub = "Você ganhou!"
                            }else if (lance.leilao.statusLeilao == "encerrado" && sub == "Lance superado!"){
                                sub = "Você perdeu!"
                            }
                            var id = lance.id;
                            return (
                                <NotificacaoItem
                                    id={lance.id}
                                    titulo={lance.leilao.produto.nomeProduto}
                                    subtitulo={sub}
                                    imagem={lance.leilao.produto.urlImagemProduto}
                                    onPress={() => navigation.navigate('Lance')}
                                />
                            );
                    }
                    )
                }
            </View>
        </ScrollView>
    );
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    section: {
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    notificacaoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        marginTop: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
    },
    imageContainer: {
        marginRight: 10,
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 30,
    },
    textContainer: {
        flex: 1,
    },
    titulo: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    subtitulo: {
        fontSize: 14,
    },
    textHeader: {
        textAlign: 'center',
        fontSize: 25,
        marginTop: 30,
        marginBottom: 30
    },
});
 
export default Notificacoes;