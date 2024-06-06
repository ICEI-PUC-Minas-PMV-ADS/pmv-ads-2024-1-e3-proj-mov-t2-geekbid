import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { TextInput, Headline, Button } from 'react-native-paper';
import { useAuth } from '../services/auth.services';

const NotificacaoItem = ({ titulo, subtitulo, imagem, item }) => {
    return (
        <TouchableOpacity
                onPress={() => handleMeusLeiloesDetalhes(item.id)}>
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

const Notificacoes = () => {
    const navigation = useNavigation();
    const [minhasNotificacoes, SetItensNotificacoes] = useState([]);
    const { usuario } = useAuth();
    const usuarioId = usuario.id;

    titulonotificacao = {
        "encerrado": "Parabéns",
        "Status2": "titulo2",
    }
    
    useEffect(() => {
        const MapearNotificacoes = (data) => {
            return data.map(infoLeilao => ({
                id: infoLeilao.id,
                subtitulo: infoLeilao.produto.nomeProduto,
                titulo: infoLeilao.produto.descricaoProduto,
                imagem: infoLeilao.produto.urlImagemProduto,
                status: infoLeilao.statusLeilao
            }))
        };
   

    const getLeiloes = async () => {
        try {
            const response = await fetch(`http://localhost:3000/leilao/meusleiloes?usuarioId=${usuarioId}`);
            const data = await response.json();
            console.log("Dados recebidos:", data);         
            SetItensNotificacoes(MapearNotificacoes(data.meusLeiloes));
            console.log(data.meusLeiloes);
        } catch (error) {
            console.error(error);
        }
    };

    getLeiloes();
    }, []);

const notificacoes = minhasNotificacoes;

const handleMeusLeiloesDetalhes = (produtoId) => {
    console.log("ID do produto selecionado:", produtoId);
    navigation.navigate("MeusLeiloesDetalhes", { id: produtoId });
  };



return (

    <ScrollView style={styles.container}>
        <View style={styles.head}>
            <Headline style={styles.textHeader}>Notificações</Headline>
        </View>
        <View style={styles.section}>
            <Text style={styles.sectionTitle}>Meus Leilões</Text>           
            {notificacoes.map((notificacao) => (
                <NotificacaoItem
                    key={notificacao.id}
                    titulo={notificacao.titulo}
                    subtitulo={notificacao.subtitulo}
                    imagem={notificacao.imagem}
                    item={notificacao}
                />
            ))}
        </View>
        <View style={styles.section}> 
            <Text style={styles.sectionTitle}>Meus Lances</Text>
            {notificacoes.slice(3, 6).map((notificacao) => (
                <NotificacaoItem
                    key={notificacao.id}
                    titulo={notificacao.titulo}
                    subtitulo={notificacao.subtitulo}
                    imagem={notificacao.imagem}
                />
            ))}
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