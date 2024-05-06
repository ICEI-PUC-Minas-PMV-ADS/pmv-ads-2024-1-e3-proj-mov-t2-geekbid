import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Lance = ({ item }) => {
  const navigation = useNavigation();

  const handleLancePress = () => {
    navigation.navigate('EnviarLance');
  };

  const handlePress = () => {
    console.log('Link pressed!');
  };

  const [leilao, setLeilao] = useState([]);

  const getLeilao = () => {
    fetch("http://localhost:3000/leilao")
    .then(res => res.json())
    .then(json => setLeilao(json))
    // .then(leilao.map((item, index) => <Text key={index}>{item.text}</Text>))
    .catch(error => console.error(error))
  }

  useEffect(() => {
    getLeilao();
  }, []);

  console.log("Leilões: ", leilao);

  function renderLeiloes() {
    return leilao.map((item, index) => <Text key={index}>{item.id}</Text>);
  };

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.link} onPress={handlePress}>
          <Text style={styles.linkText}>Filtrar</Text>
        </TouchableOpacity>
      </View>

      <View>{renderLeiloes()}</View>

      <View style={styles.row}>
        <View style={styles.itemContainer}>
        <Image
            style={styles.image}
            source={{ uri: 'asset:/src/assets/mulherMaravilha.png' }}
          />
          <Text style={styles.title}>Quadro Mulher Maravilha</Text>
          <View style={styles.infoContainer}>
            <Text style={styles.creator}>Criado por: Cleiton</Text>
            <Text style={styles.price}>Valor do Lance: R$ 100.00</Text>
          </View>
          <TouchableOpacity style={styles.button} onPress={handleLancePress}>
            <Text style={styles.buttonText}>Dar Lance</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.itemContainer}>
        <Image
            style={styles.image}
            source={{ uri: 'asset:/src/assets/retroGeek.png' }}
          />
          <Text style={styles.title}>Retro Geek Colecionável</Text>
          <View style={styles.infoContainer}>
            <Text style={styles.creator}>Criado por: Pedro</Text>
            <Text style={styles.price}>Valor do Lance: R$ 200.00</Text>
          </View>
          <TouchableOpacity style={styles.button} onPress={handleLancePress}>
            <Text style={styles.buttonText}>Dar Lance</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  itemContainer: {
    flex: 1,
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