import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Lance = ({ item }) => {
  const navigation = useNavigation();

  const handleLancePress = () => {
    console.log('handleLancePress');
    navigation.navigate('EnviarLance');
  };

  // const handlePress = () => {
  //   console.log('handlePress!');
  // };

  const [leiloes, setLeiloes] = useState([]);

  const getLeiloes = () => {
    fetch("http://localhost:3000/leilao/home")
    .then(res => res.json())
    .then(data => setLeiloes(data.leiloes))
    .catch(error => console.error(error))
  }

  useEffect(() => {
    getLeiloes();
  }, []);

  console.log("Leilões: ", leiloes);

  return (
    <ScrollView>

      <View style={styles.container}>
        {/* <View style={styles.container}>
          <TouchableOpacity style={styles.link} onPress={handlePress}>
            <Text style={styles.linkText}>Filtrar</Text>
          </TouchableOpacity>
        </View> */}
        
        <View style={styles.container}>
          <View>
            {leiloes.map((item, index) =>
              <View style={styles.itemContainer} key={item.id}>
                <Image
                  style={styles.image}
                  source={{ uri: item.produto.urlImagemProduto }}
                />
                <Text style={styles.title} key={index}>{item.produto.nomeProduto}</Text>
                <View style={styles.infoContainer}>
                  <Text style={styles.creator}>Criado por: {item.usuario.nome}</Text>
                  <Text style={styles.price}>Valor do Lance: R$ {item.precoAtual}</Text>
                </View>
                <TouchableOpacity style={styles.button} onPress={handleLancePress}>
                  <Text style={styles.buttonText}>Dar Lance</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
        
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  itemContainer: {
    widht: '80%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 5,
    marginLeft: 15,
    marginRight: 15
  },
  image: {
    width: '100%',
    height: 160,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  infoContainer: {
    flexDirection: 'column',
    marginBottom: 10,
  },
  creator: {
    marginBottom: 5,
  },
  price: {
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#666cff',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  linkText: {
    color: 'blue',
    fontSize: 15,
    textAlign: 'right',
    paddingTop: 15,
    paddingBottom: 15,
    fontWeight: 'bold'
  },  
});

export default Lance;