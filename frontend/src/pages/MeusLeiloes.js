import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const MeusLeiloes = () => {

  return (
    <View style={styles.container}>

      <View style={styles.titleContainer}>
        <Text style={styles.titlePage}>Meus Leilões</Text>
      </View>

      <View style={styles.row}>
        <View style={styles.itemContainer}>
        <Image
            style={styles.image}
            source={{ uri: 'asset:/src/assets/mulherMaravilha.PNG' }}
          />
          <Text style={styles.title}>Quadro Mulher Maravilha</Text>
          <View style={styles.infoContainer}>
            <Text style={styles.creator}>Criado por: Cleiton</Text>
            <Text style={styles.price}>Valor do Lance: R$ 100.00</Text>
          </View>
        </View>
        <View style={styles.itemContainer}>
        <Image
            style={styles.image}
            source={{ uri: 'asset:/src/assets/retroGeek.png' }}
          />         
          <Text style={styles.title}>Retro Geek Montável</Text>
          <View style={styles.infoContainer}>
            <Text style={styles.creator}>Criado por: Pedro</Text>
            <Text style={styles.price}>Valor do Lance: R$ 200.00</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    marginTop: 40,
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
  titleContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  titlePage: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 30,
  },
 
});


export default MeusLeiloes;
