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
import moment from 'moment'
import { Button, Modal } from 'react-native-paper'
import { TouchableWithoutFeedback } from 'react-native-web'

const MeuLanceItem = ({
  onPress,
  onResult,
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

  const leilaoFinalizado = moment(dataFim).isBefore(moment())

  const handleLancePress = (
    leilaoId,
    leilaoDataFim,
    nomeProduto,
    imagemProduto,
    nomeUsuario
  ) => {
    const obj = {
      leilaoId: leilaoId,
      leilaoDataFim: leilaoDataFim,
      nomeProduto: nomeProduto,
      imagemProduto: imagemProduto,
      nomeUsuario: nomeUsuario
    }

    navigation.navigate('EnviarLance', obj)
  }

  return (
    <TouchableOpacity style={styles.lanceItemContainer} onPress={onPress}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: foto }} style={styles.image} />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.descricao}>{descricao}</Text>
        {/* <Text style={styles.by}>
          By <Text style={styles.responsavelBold}>{responsavel}</Text>
        </Text> */}
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
          style={leilaoFinalizado ? styles.disabledButton : styles.button}
          disabled={leilaoFinalizado}
          onPress={() => {
            handleLancePress(leilaoId, dataFim, descricao, foto, responsavel)
          }}
        >
          <Text style={styles.buttonText}>Lance</Text>
        </TouchableOpacity>

        {leilaoFinalizado && <TouchableOpacity
            style={styles.button}
            onPress={() =>
              onResult({
                leilaoId,
                dataFim,
                descricao,
                foto,
                responsavel,
                ultimoLance
              })
            }
          >
              <Text style={styles.buttonText}>Ver resultado do leilão</Text>
          </TouchableOpacity>
        }
      </View>
    </TouchableOpacity>
  )
}

const MeusLances = ({ navigation }) => {
  const [lances, setLances] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const { usuario } = useAuth()
  const [leilaoArremetadoModalVisible, setLeilaoArrematadoModalVisible] =
    useState(false)

  const [maiorLance, setMaiorLance] = useState()
  const [selectedLance, setSelectedLance] = useState()

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

  async function fetchLances(leilaoId, dataFim) {
    const leilaoFinalizado = moment(dataFim).isBefore(moment())
    const resp = await axios.get('http://localhost:3000/lances/' + leilaoId)
    console.log(resp)

    if (resp.data.length > 0) {
      // Use reduce para calcular o maior lance
      const maiorLance = resp.data.reduce((maior, lance) => {
        return lance.valorLance > maior.valorLance ? lance : maior
      }, resp.data[0]) // Inicialize com o primeiro lance

      console.log('Maior lance:', maiorLance)

      // Verifique se o maior lance é do usuário logado
      if (leilaoFinalizado) {
        //maiorLance.usuarioId === usuario.id &&
        setLeilaoArrematadoModalVisible(true)
      }
      setMaiorLance(maiorLance)
    } else {
      console.log('Não há lances para este leilão.')
    }
  }

  console.log('Lances: ', lances)

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

  function resultLancePress(lance) {
    console.log(lance)
    console.log(usuario)
    setSelectedLance(lance)
    setLeilaoArrematadoModalVisible(true)
    fetchLances(lance.leilaoId, lance.dataFim)
  }

  const closeResultModal = () => {
    console.log('FECHA')
    setLeilaoArrematadoModalVisible(false);
  }


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Button icon="chevron-left" onPress={() => navigation.goBack()} />
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
            dataFim={lance.leilao.dataFim}
            descricao={lance.leilao.produto.descricaoProduto}
            foto={lance.leilao.produto.urlImagemProduto}
            seuLance={lance.valorLance}
            ultimoLance={lance.valorLance}
            responsavel={lance.usuario.nome}
            onResult={resultLancePress}
            onPress={() => {}}
          />
        ))}
      </ScrollView>

      <View>
        <Footer />
      </View>

      <Modal
        animationType="slide"

        visible={leilaoArremetadoModalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.')
          closeResultModal()
        }}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
            {maiorLance?.usuarioId === usuario.id && <View style={styles.modalEnviado}>
                <Text style={styles.modalLanceEnviado}>Parabéns!</Text>
              </View>}
              <View style={styles.modalSubtitleContainer}>
                <Image
                  source={require('./../assets/hammer.png')}
                  style={styles.modalHammerIcon}
                />
                <Text style={styles.modalSubtitleText}>
                {maiorLance?.usuarioId === usuario.id ? 'Você' : maiorLance?.usuario?.nome} arrematou este item!
                </Text>
              </View>

              <Image
                source={{ uri: selectedLance?.foto }}
                style={styles.modalProductImage}
              />
              <Text style={styles.modalProductName}>
                {selectedLance?.nomeProduto}
              </Text>
            {/*   <Text style={styles.modalCreator}>
                Criador: {selectedLance?.nomeUsuario}
              </Text>
              <Text>
                Lance
                <Text style={styles.modalBid}>
                  R$ {selectedLance?.ultimoLance}
                </Text>
              </Text> */}

              <TouchableOpacity
                style={styles.button}
                onPress={() => setLeilaoArrematadoModalVisible(false)}
              >
                  <Text style={styles.buttonText}>Fechar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
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
    marginTop: 10
  },
  disabledButton: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: '#757575',
    opacity: 0.37
  },
  buttonText: {
    color: '#fff',
    fontSize: 14
  },
  scrollView: {
    flex: 1,
    marginBottom: 20
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    width: '80%'
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 20,
    textAlign: 'center'
  },
  modalLanceEnviado: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 80,
    marginTop: 80,
    textAlign: 'center'
  },
  modalSubTitle: {
    fontWeight: 'bold',
    fontSize: 17
  },
  modalResponsavel: {
    fontSize: 12,
    marginBottom: 20,
    alignSelf: 'flex-start'
  },
  modalEnviado: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    marginBottom: 20,
    justifyContent: 'center'
  },
  modalText: {
    fontSize: 12,
    marginBottom: 5,
    backgroundColor: '#f0f1ff',
    padding: 3,
    lineHeight: 25
  },
  modalOferta: {
    fontSize: 16,
    marginBottom: 5
  },
  modalTotal: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 40,
    marginBottom: 20
  },
  modalButtonContainer: {
    flexDirection: 'colum',
    marginTop: 20
  },
  modalButton: {
    padding: 10,
    borderRadius: 5,
    marginBottom: 5,
    width: '100%',
    alignItems: 'center'
  },
  modalButtonText: {
    color: '#fff',
    fontSize: 16,
    padding: 5,
    fontWeight: 'bold'
  },
  modalIcon: {
    width: 18,
    height: 18,
    marginRight: 10
  },
  modalHammerIcon: {
    width: 32,
    height: 32
  },
  modalEnviado: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    marginBottom: 20,
    justifyContent: 'center'
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 50,
    alignItems: 'center'
  },
  modalEnviado: {
    marginBottom: 10
  },
  modalLanceEnviado: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  modalSubtitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  modalHammerIcon: {
    width: 36,
    height: 36,
    marginRight: 5
  },
  modalSubtitleText: {
    fontSize: 22
  },
  modalProductImage: {
    width: 100,
    height: 100,
    marginBottom: 10
  },
  modalProductName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5
  },
  modalCreator: {
    fontSize: 16,
    marginBottom: 5
  },
  modalBid: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20
  },
  modalButton: {
    padding: 10,
    borderRadius: 5,
    alignItems: 'center'
  },
  payButton: {
    backgroundColor: '#666cff'
  },
  modalButtonText: {
    color: 'white',
    fontSize: 16
  }
})

export default MeusLances
