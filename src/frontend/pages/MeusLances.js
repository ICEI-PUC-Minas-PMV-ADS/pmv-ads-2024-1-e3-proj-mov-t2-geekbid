import React, { useEffect, useState } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
  ScrollView
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import axios from 'axios'
import { useAuth } from '../services/auth.services'
import { useNavigation } from '@react-navigation/native'
import Footer from './../navegations/Footer'

const MeuLanceItem = ({
  onPress,
  id,
  leilaoId,
  dataFim,
  descricao,
  foto,
  seuLance,
  ultimoLance,
  responsavel
}) => {
  const navigation = useNavigation()
  const formatCurrency = value => {
    return `R$ ${value.toFixed(2)}`
  }

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
    })
  }

  return (
    <TouchableOpacity style={styles.lanceItemContainer} onPress={onPress}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: foto }} style={styles.image} />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.descricao}>{descricao}</Text>
        <Text style={styles.by}>
          By <Text style={styles.responsavelBold}>{responsavel}</Text>
        </Text>
        <View style={styles.lancesContainer}>
          <View style={styles.lanceItemLeft}>
            <Text style={styles.lanceTitulo}>Seu Lance</Text>
            <Text style={styles.lanceValor}>{formatCurrency(seuLance)}</Text>
          </View>
          <View style={styles.lanceItemRight}>
            <Text style={styles.lanceTitulo}>Último Lance</Text>
            <Text style={styles.lanceValor}>{formatCurrency(ultimoLance)}</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            handleLancePress(leilaoId, dataFim, descricao, foto, responsavel)
          }}
        >
          <Text style={styles.buttonText}>Lance</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  )
}

const MeusLances = ({ navigation }) => {
  const [lances, setLances] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const { usuario } = useAuth()

  const getLeiloes = async () => {
    const usuarioId = usuario.id
    try {
      const response = await axios.get(
        'http://localhost:3000/lances/user/' + usuarioId
      )
      console.log(response)
      setLances(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  console.log("Lances: ", lances);

  useEffect(() => {
    getLeiloes()
  }, [])
  
  const handleSearch = text => {
    setSearchQuery(text)
  }

  const filteredLances = lances.filter(lance =>
    lance.leilao.produto.descricaoProduto
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  )

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.voltarIcone}>{'<'}</Text>
        </TouchableOpacity>
        <Text style={styles.titulo}>Meus Lances</Text>
      </View>
      <View style={styles.searchContainer}>
        <Ionicons
          name="ios-search"
          size={24}
          color="black"
          style={styles.searchIcon}
        />
        <TextInput
          placeholder="Search Arts"
          style={styles.searchInput}
          placeholderTextColor="#666"
          value={searchQuery}
          onChangeText={handleSearch}
        />
      </View>
      <ScrollView style={styles.scrollView}>
        {filteredLances.map(lance => (
          <MeuLanceItem
            key={lance.id}
            id={lance.id}
            leilaoId={lance.leilaoId}
            dataFim={lance.dataFim}
            descricao={lance.leilao.produto.descricaoProduto}
            foto={lance.leilao.produto.urlImagemProduto}
            seuLance={lance.valorLance}
            ultimoLance={lance.valorLance}
            responsavel={lance.usuario.nome}
            onPress={() => {}}
          />
        ))}
      </ScrollView>

      <View>
        <Footer />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 20
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  voltarIcone: {
    fontSize: 24,
    fontWeight: 'bold',
    marginRight: 10,
    marginTop: 20
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 25,
    flex: 1
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20
  },
  searchIcon: {
    marginRight: 10
  },
  searchInput: {
    flex: 1,
    height: 40,
    color: '#333'
  },
  lanceItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginVertical: 10
  },
  imageContainer: {
    marginRight: 10,
    width: '40%',
    paddingBottom: 10 // Added paddingBottom to align with button
  },
  image: {
    width: '100%',
    aspectRatio: 0.8, // Aspect ratio for portrait image
    borderRadius: 5
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'space-between',
    width: '55%'
  },
  descricao: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5
  },
  by: {
    fontSize: 14,
    marginBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 5
  },
  responsavelBold: {
    fontWeight: 'bold'
  },
  lancesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  lanceItemLeft: {
    alignItems: 'flex-start'
  },
  lanceItemRight: {
    alignItems: 'flex-end'
  },
  lanceTitulo: {
    fontSize: 12,
    fontWeight: 'bold'
  },
  lanceValor: {
    fontSize: 12
  },
  button: {
    backgroundColor: '#666cff',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10 // Adjusted margin top
  },
  buttonText: {
    color: '#fff',
    fontSize: 12
  },
  scrollView: {
    flex: 1,
    marginBottom: 20
  }
})

export default MeusLances
