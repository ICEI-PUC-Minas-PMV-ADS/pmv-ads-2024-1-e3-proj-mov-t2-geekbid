import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, TextInput, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import moment from 'moment';
import Icon from 'react-native-vector-icons/FontAwesome';
import filter from 'lodash.filter';


const Lance = ({ item }) => {

  const navigation = useNavigation();

  const API = 'http://localhost:3000/leilao/home';

  const [isLoading, setIsLoading] = useState(false);
  const [leiloes, setLeiloes] = useState([]);
  const [error, setError] = useState(null);
  const [fullData, setFullData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  
  const handleLancePress = (
    leilaoId,
    leilaoDataFim,
    nomeProduto,
    imagemProduto,
    nomeUsuario
  ) => {
    navigation.navigate('EnviarLance', {
      leilaoId: leilaoId,
      leilaoDataFim: leilaoDataFim,
      nomeProduto: nomeProduto,
      imagemProduto: imagemProduto,
      nomeUsuario: nomeUsuario
    });
  }

  useEffect(() => {
    setIsLoading(true);
    fetchData(API);
  }, [])

  const fetchData = async(url) => {
    try {
      const response = await axios.get(url);
      setLeiloes(response.data?.leiloesHome);
      setIsLoading(false);
      setFullData(response.data?.leiloesHome);
      // console.log(leiloes);
    } catch (error) {
      setError(error);
      setIsLoading(false);
      console.error(error);
    }
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    const formattedQuery = query.toLowerCase();
    const filteredData = filter(fullData, (produto) => {
      return contains(produto, formattedQuery);
    });
    setLeiloes(filteredData);
  };

  const contains = ({produto}, query) => {
    const { id, nomeProduto, descricaoProduto } = produto;
    // console.log(nomeProduto, descricaoProduto);
    console.log(query);
    console.log("nomeProduto: ", nomeProduto, nomeProduto.includes(query), " descricaoProduto: ", descricaoProduto, descricaoProduto.includes(query));
    if ( nomeProduto.toLowerCase().includes(query) || descricaoProduto.toLowerCase().includes(query)) {
      return true;
    }
    return false;
  }

  if (isLoading) {
    return (
      <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
        <ActivityIndicator size="large" color="#5500dc" />
      </View>
    )
  };

  if (error) {
    return (
      <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
        <Text>Erro ao buscar dados ... Por favor verifique sua conexão</Text>
      </View>
    )
  }

  const handleFiltro = () => {
    console.log('Link pressed!');
  };

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.searchContainer}>
          <Icon name="search" size={20} color="#666" style={styles.icon} />
          <TextInput
            placeholder="Pesquisar"
            clearButtonMode="always"
            autoCapitalize="none"
            autoCorrect={false}
            value={searchQuery}
            onChangeText={(query) => handleSearch(query)}
            placeholderTextColor="#666"
            style={styles.input}
          />
        </View>
      </View>
      <View style={styles.filterContainer}>
          <TouchableOpacity style={styles.link} onPress={handleFiltro}>
            <Text style={styles.linkText}>Filtrar</Text>
          </TouchableOpacity>
      </View>
      <ScrollView>
        {leiloes?.map((item, index) => {
          const leilaoFinalizado = moment(item.dataFim).isBefore(moment())

          return (
            <View style={styles.itemContainer} key={index}>
              <Image
                style={styles.image}
                source={{ uri: item.produto?.urlImagemProduto }}
              />
              <Text style={styles.title}>{item.produto.nomeProduto}</Text>
              <View style={styles.infoContainer}>
                <Text style={styles.creator}>
                  Criado por: {item.usuario.nome}
                </Text>
                <Text style={styles.price}>
                  Valor do Lance: R$ {item.precoAtual}
                </Text>
              </View>
              <TouchableOpacity
                style={[
                  styles.button,
                  leilaoFinalizado && styles.buttonFinalizado
                ]}
                onPress={() => {
                  handleLancePress(
                    item.id,
                    item.dataFim,
                    item.produto.nomeProduto,
                    item.produto.urlImagemProduto,
                    item.usuario.nome
                  )
                }}
              >
                <Text style={styles.buttonText}>
                  {leilaoFinalizado ? 'Leilão Finalizado' : 'Dar Lance'}
                </Text>
              </TouchableOpacity>
            </View>
          )
        })}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10
  },
  itemContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10
  },
  image: {
    width: '100%',
    height: 160,
    borderRadius: 10,
    marginBottom: 10
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 5
  },
  infoContainer: {
    flexDirection: 'column',
    marginBottom: 10
  },
  creator: {
    marginBottom: 5
  },
  price: {
    marginBottom: 10
  },
  button: {
    backgroundColor: '#666cff',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center'
  },
  buttonFinalizado: {
    backgroundColor: '#ccc'
  },
  buttonText: {
    color: '#fff',
    fontSize: 16
  },
  searchContainer: {
    flexDirection: 'row',
    textAlign: 'left',
    alignItems: 'center',
    backgroundColor: 'transparent',
    width:'100%',
    paddingVertical: 10,
  },
  filterContainer: {
    backgroundColor: 'transparent',
    paddingRight: 10,
    marginRight: 15
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderColor:"#ccc",
    borderWidth: 1,
    borderRadius: 8,
  },
  linkText: {
    color: 'blue',
    fontSize: 13,
    textAlign: 'right',
    paddingBottom: 10,
    fontWeight: 'bold'
  }
})

export default Lance
