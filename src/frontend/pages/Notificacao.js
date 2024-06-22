import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, ScrollView, Modal, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { TextInput, Headline, Button } from 'react-native-paper';
import { useAuth } from '../services/auth.services';
import Footer from "./../navegations/Footer";

const NotificacaoItem = ({ id, titulo, subtitulo, imagem, onPress }) => {
  console.log(id);
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
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
  const { usuario } = useAuth();
  const usuarioId = usuario.id;

  const [meusLeiloes, SetMeusLeiloes] = useState([]);
  const [meusLances, setMeusLances] = useState([]);
  const [ultimosLances, setUltLances] = useState([]);

  useEffect(() => {
    const getLeiloes = async () => {
      const Id = usuario.id     
      try {
        const leiloesResponse = await fetch(`http://localhost:3000/leilao/meusleiloes?usuarioId=${usuarioId}`);
        const lancesResponse = await fetch('http://localhost:3000/lances/user/' + Id);       

        const leiloesData = await leiloesResponse.json();
        const lancesData = await lancesResponse.json();        

        SetMeusLeiloes(leiloesData.meusLeiloes);
        setMeusLances(lancesData);        
       
      } catch (error) {
        console.error(error);
      }
    };

    const getLances = async () => {
      const lId = leilao.id;
      try {
        const ultimosLancesResponse = await fetch('http://localhost:3000/leilaoId/ultimos/' + lId);

        const ultimosLancesData = await ultimosLancesResponse.json();

        setUltLances(ultimosLancesData);
        
      } catch (error) {
        console.error(error);
      }
    };

    getLeiloes();

  }, []);

  return (
    <View style={styles.container}>
      <ScrollView >
        <View style={styles.head}>
          <Headline style={styles.textHeader}>Notificações</Headline>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Meus Leilões</Text>
          {
            meusLeiloes && meusLeiloes.map(leilao => {
              var id = leilao.id;
              return (
                <NotificacaoItem
                  id={leilao.id}
                  titulo={leilao.produto.nomeProduto}
                  subtitulo={'R$ ' + leilao.precoAtual + ',00'}
                  imagem={leilao.produto.urlImagemProduto}
                  onPress={() => navigation.navigate('MeusLeiloesDetalhes', { id })}
                />);
            }
            )
          }
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Meus Lances</Text>
          {
            meusLances && meusLances.map(lance => {
              var sub = "Lance superado!";
              if ((lance.valorLance + lance.leilao.produto.precoInicial == lance.leilao.precoAtual)) {
                sub = "Você está ganhando!"
              } else if (lance.leilao.statusLeilao == "encerrado" && sub == "Você está ganhando!") {
                sub = "Você ganhou!"
              } else if (lance.leilao.statusLeilao == "encerrado" && sub == "Lance superado!") {
                sub = "Você perdeu!"
              }
                          
              return (
                <NotificacaoItem
                  id={lance.id}
                  titulo={lance.leilao.produto.nomeProduto}
                  subtitulo={sub}
                  imagem={lance.leilao.produto.urlImagemProduto}
                  onPress={() => navigation.navigate('MeusLances')}
                />
              );
            }
            )
          }
        </View>
      </ScrollView>
      <Footer />
    </View>
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