import React, { useEffect, useState, useRef } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import { TextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import moment from 'moment';
import filter from 'lodash.filter';
import { Picker } from '@react-native-picker/picker';



const Lance = ({ item }) => {

  const navigation = useNavigation();

  const API = 'http://localhost:3000/leilao/home';

  const [isLoading, setIsLoading] = useState(false);
  const [leiloes, setLeiloes] = useState([]);
  const [filteredLeiloes, setFilteredLeiloes] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Todas")
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
      setFullData(response.data?.leiloesHome);
      setFilteredLeiloes(response.data?.leiloesHome);
      setIsLoading(false);
      // console.log(leiloes);
    } catch (error) {
      setError(error);
      setIsLoading(false);
      console.error(error);
    }
  };

  useEffect(() => {
    let active = true;

    const fetchLeiloes = async () => {
      // setLeiloes(fullData);
      // console.log("leiloes 01: ", leiloes);
      if (selectedCategory === "Todas") {
        if (active) {
          setLeiloes(fullData);
        }
      } else {
        const filtered = fullData.filter(fullData => 
          fullData.produto.categoriaProduto === selectedCategory);        
        if (active) {
          // console.log("selectedCategory: ", selectedCategory);
          // console.log("filtered: ", filtered);
          setLeiloes(filtered);
        }
        // console.log("Active: ", active);
      }
      // console.log("leiloes 02: ", leiloes);
    };
    
    fetchLeiloes();
    
    return () => {
      active = false;
    };
  }, [selectedCategory]);

  const handleSearch = (query) => {
    setSearchQuery(query);
    setSelectedCategory("Todas");
    const formattedQuery = query.toLowerCase();
    const filteredData = filter(fullData, (produto) => {
      return contains(produto, formattedQuery);
    });
    setLeiloes(filteredData);
  };

  const contains = ({produto}, query) => {
    const { id, nomeProduto, descricaoProduto } = produto;
    if ( nomeProduto.toLowerCase().includes(query) || 
         descricaoProduto.toLowerCase().includes(query)) {
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

  return (
    <View style={styles.container}>
      <View style={styles.searchfilterContainer}>
        <View style={styles.searchContainer}>
          <TextInput
            placeholder="Pesquisar"
            clearButtonMode="always"
            autoCapitalize="none"
            autoCorrect={false}
            left={<TextInput.Icon icon="magnify" />}
            value={searchQuery}
            onChangeText={(query) => handleSearch(query)}
            placeholderTextColor="#666"
            style={styles.input}
          />           
        </View>
        <View style={styles.filterContainer}>
          <Picker
          selectedValue={selectedCategory}
          onValueChange={(itemValue) => {
            setSelectedCategory(itemValue);
            // console.log("itemValue: ", itemValue);
          }}
          style={styles.picker}
          >
            <Picker.Item label="Todas" value="Todas" />
            <Picker.Item label="Quadrinhos e Mangás" value="Quadrinhos e Mangás" />
            <Picker.Item label="Colecionáveis" value="Colecionáveis" />
            <Picker.Item label="Jogos de Tabuleiro e Card Games" value="Jogos de Tabuleiro e Card Games" />
            <Picker.Item label="Jogos Eletrônicos" value="Jogos Eletrônicos" />
            <Picker.Item label="Livros e Literatura Fantástica" value="Livros e Literatura Fantástica" />
            <Picker.Item label="Filmes e Séries" value="Filmes e Séries" />
            <Picker.Item label="Tecnologia e Gadgets" value="Tecnologia e Gadgets" />
            <Picker.Item label="Roupas e Acessórios" value="Roupas e Acessórios" />
            <Picker.Item label="Arte e Decoração" value="Arte e Decoração" />
            <Picker.Item label="Memorabilia" value="Memorabilia" />
          </Picker>
        </View>
      </View>

      <ScrollView>
        {leiloes?.map((item, index) => {
          const leilaoFinalizado = moment(item.dataFim).isBefore(moment())

          return leilaoFinalizado ? null : (
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
                <Text style={styles.buttonText}>Dar Lance</Text>
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
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  itemContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10
  },
  infoContainer: {
    flexDirection: 'column',
    marginBottom: 10
  },
  searchfilterContainer: {
    marginVertical: 10,
  },
  searchContainer: {
    // flex: 1,
    flexDirection: 'row',
    textAlign: 'left',
    alignItems: 'center',
    backgroundColor: 'transparent',
    width:'100%',
    height: 30,
    marginVertical: 10,
  },
  filterContainer: {
    // flex: 1,
    flexDirection: 'row',
    textAlign: 'left',
    alignItems: 'center',
    backgroundColor: 'transparent',
    width:'100%',
    height: 30,
    marginVertical: 15,
  },
  image: {
    width: "100%",
    height: 160,
    resizeMode: "contain",
    borderRadius: 10,
    marginBottom: 10
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 5
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
  input: {
    flex: 1,
    borderColor:"#ccc",
    borderWidth: 1,
    borderRadius: 8
  },
  picker: {
    flex: 1,
    fontSize: 12,
    marginBottom: 10
  }
})

export default Lance
