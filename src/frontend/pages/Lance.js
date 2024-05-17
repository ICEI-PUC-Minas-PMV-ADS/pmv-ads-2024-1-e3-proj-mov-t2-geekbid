import React, { useEffect, useState } from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView
} from 'react-native'
import { useNavigation } from '@react-navigation/native'

const Lance = ({ item }) => {
  const navigation = useNavigation()

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

  const handlePress = () => {
    console.log('Link pressed!')
  }

  const [leiloes, setLeiloes] = useState([])

  // const getLeiloes = () => {
  //   fetch('http://localhost:3000/leilao/home')
  //     .then(res => res.json())
  //     .then(data => setLeiloes(data.leiloes))
  //     .catch(error => console.error(error))
  // }

  // useEffect(() => {
  //   getLeiloes()
  // }, [])

  console.log('Leilões: ', leiloes)

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.link} onPress={handlePress}>
        <Text style={styles.linkText}>Filtrar</Text>
      </TouchableOpacity>
      <ScrollView>
        {leiloes?.map((item, index) => (
          <View style={styles.itemContainer} key={index}>
            <Image
              style={styles.image}
              source={{ uri: item.produto.urlImagemProduto }}
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
              style={styles.button}
              onPress={() =>
                handleLancePress(
                  item.id,
                  item.dataFim,
                  item.produto.nomeProduto,
                  item.produto.urlImagemProduto,
                  item.usuario.nome
                )
              }
            >
              <Text style={styles.buttonText}>Dar Lance</Text>
            </TouchableOpacity>
          </View>
        ))}
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
  buttonText: {
    color: '#fff',
    fontSize: 16
  },
  linkText: {
    color: 'blue',
    fontSize: 15,
    textAlign: 'right',
    paddingTop: 15,
    paddingBottom: 15,
    fontWeight: 'bold'
  }
})

export default Lance
