import React, {useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Pesquisa = () => {

  const [queryPesquisa, setQueryPesquisa] = useState('');
  const [leiloesPesquisa, setLeiloesPesquisa] = useState([]);

  const handlePesquisa = () => {
    fetch(`http://localhost:3000/leilao/pesquisa?`)
    // .then(console.log(".then() queryPesquisa", queryPesquisa))
    .then(res => res.json())
    .then(data => console.log("data.leiloesPesquisa: ", data.leiloesPesquisa))
    .catch(error => console.error(error))
  }

  const handleFiltro = () => {
    console.log("handleFiltro");
  }

  // useEffect(() => {
  //   handlePesquisa();
  // }, []);

  // console.log("Leilões: ", leiloes);

  return (
    <View>
      <Text style={styles.title}>Olá Fulano</Text>
      <Text style={styles.subtitle}>Vamos começar o leilão!</Text>
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <Icon name="search" size={20} color="#666" style={styles.icon} />
          <TextInput
            placeholder="Pesquisar"
            onChangeText={text => setQueryPesquisa(text)}
            value={queryPesquisa}
            placeholderTextColor="#666"
            style={styles.input}
          />
          <Button title="Pesquisar" onPress={handlePesquisa()} />
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.containerFiltrar}>
          <TouchableOpacity style={styles.link} onPress={handleFiltro}>
            <Text style={styles.linkText}>Filtrar</Text>
          </TouchableOpacity>
        </View>
        </View>    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    paddingHorizontal: 20,
    marginTop: 15,
    height: 60,
  },
  containerFiltrar: {
    paddingHorizontal: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
    marginTop: 60,
    paddingLeft: 10,
    marginLeft: 15
    
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'left',
    marginBottom: 4,
    paddingLeft: 10,
    marginLeft: 15
  },
  searchContainer: {
    flexDirection: 'row',
    textAlign: 'left',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderColor: 'grey',
    borderWidth: 1,
    width:'100%',
    paddingHorizontal: 20,
    paddingVertical: 20,

  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 12,
    backgroundColor: 'white',
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

export default Pesquisa;
