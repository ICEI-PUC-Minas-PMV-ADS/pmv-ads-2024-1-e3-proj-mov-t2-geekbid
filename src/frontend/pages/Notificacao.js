import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, ScrollView, Modal, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
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
    const usuarioId = usuario.id;
    const [leilaoArremetadoModalVisible, setLeilaoArrematadoModalVisible] =
    useState(false)
 
    const [meusLeiloes, SetMeusLeiloes] = useState([]);
    const [meusLances, setMeusLances] = useState([]);
    const [lancesLeilao, setLancesLeilao] = useState([])
 
    useEffect(() => {
        const getLeiloes = async () => {
            const Id = usuario.id
            try {
                const leiloesResponse = await fetch(`http://localhost:3000/leilao/meusleiloes?usuarioId=${usuarioId}`);
                const lancesResponse = await fetch('http://localhost:3000/lances/user/' + Id);
                //const lancesLeilaoResponse = await fetch(`http://localhost:3000/lances/${leilaoId}`);
 
                const leiloesData = await leiloesResponse.json();
                const lancesData = await lancesResponse.json();
                //const lancesLeilaoData = await lancesLeilaoResponse.json();
 
                SetMeusLeiloes(leiloesData.meusLeiloes);
                setMeusLances(lancesData);
                //setLancesLeilao(lancesLeilaoData);
 
                console.log(meusLances);
                console.log(lancesData);
                //console.log(lancesLeilaoData);
            } catch (error) {
                console.error(error);
            }
        };

        const fetchLancesLeilao = async (leilaoId) => {
            try {
                const lancesLeilaoResponse = await fetch(`http://localhost:3000/lances/${leilaoId}`);
                const lancesLeilaoData = await lancesLeilaoResponse.json();
                console.log(lancesLeilaoData);
                setLancesLeilao(lancesLeilaoData);
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
                            subtitulo={'R$ '+leilao.precoAtual+',00'}
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
                        console.log(lance.valorLance);
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
            {/* <Modal
        animationType="slide"
        transparent={true}
        visible={leilaoArremetadoModalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.')
          closeLanceEnviadoModal()
        }}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <View style={styles.modalEnviado}>
                <Text style={styles.modalLanceEnviado}>Parabéns!</Text>
              </View>
              <View style={styles.modalSubtitleContainer}>
                <Image
                  source={require('./../assets/hammer.png')}
                  style={styles.modalHammerIcon}
                />
                <Text style={styles.modalSubtitleText}>
                  Você arrematou este item!
                </Text>
              </View>
              <Image source={{ uri: imagem }} style={styles.image} />
              <Text style={styles.modalProductName}>{nomeProduto}</Text>
              <Text style={styles.modalCreator}>Criador: Pedro</Text>
              <Text>
                Seu lance <Text style={styles.modalBid}>R$ {ultimoLance}</Text>
              </Text>

              <TouchableOpacity
                style={styles.button}
                onPress={openAguardeContatoModal} // Abre o modal de "Aguarde Contato" ao clicar no botão "Pagar agora"
              >
                <Text style={styles.buttonText}>Pagar agora</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal> */}
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