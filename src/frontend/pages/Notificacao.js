import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { TextInput, Headline, Button } from 'react-native-paper';
import { useAuth } from '../services/auth.services';
 
const NotificacaoItem = ({ titulo, subtitulo, imagem }) => {
    return (
        <View style={styles.notificacaoContainer}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: imagem }} style={styles.image} />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.titulo}>{titulo}</Text>
                <Text style={styles.subtitulo}>{subtitulo}</Text>
            </View>
        </View>
    );
};
 
const Notificacoes = () => {
    const navigation = useNavigation();
    const { usuario } = useAuth();
    const usuarioId = usuario.usuarioId;
 
    const [meusLeiloes, SetMeusLeiloes] = useState([]);
    const [meusLances, setMeusLances] = useState([])
 
    useEffect(() => {
        const getLeiloes = async () => {
            try {
                const leiloesResponse = await fetch(`http://localhost:3000/leilao/meusleiloes?usuarioId=${usuarioId}`);
                const lancesResponse = await fetch(`http://localhost:3000/lances/user/${usuarioId}`);
 
                const leiloesData = await leiloesResponse.json();
                const lancesData = await lancesResponse.json()
 
                SetMeusLeiloes(leiloesData.meusLeiloes);
                setMeusLances(lancesData);
 
                console.log(meusLances);
                console.log(meusLeiloes);
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
                    meusLeiloes && meusLeiloes.map(leilao =>
                        <NotificacaoItem
                            key={leilao.id}
                            titulo={leilao.produto.nomeProduto}
                            subtitulo={leilao.usuario.nome}
                            imagem={leilao.produto.urlImagemProduto}
                        />
                    )
                }
            </View>
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Meus Lances</Text>
                {
                    meusLances && meusLances.map(lance =>
                        <NotificacaoItem
                            key={lance.id}
                            titulo={lance.leilao.produto.nomeProduto}
                            subtitulo={lance.valorLance == lance.leilao.precoAtual ? "Você está ganhando!" : "Lance superado!"}
                            imagem={lance.leilao.produto.urlImagemProduto}
                        />
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