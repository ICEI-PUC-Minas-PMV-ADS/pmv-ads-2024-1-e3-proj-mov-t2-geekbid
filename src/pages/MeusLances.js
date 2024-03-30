import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const MeuLanceItem = ({ onPress, descricao, foto }) => {
  return (
    <TouchableOpacity style={styles.lanceItemContainer} onPress={onPress}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: foto }} style={styles.image} />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.descricao}>{descricao}</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Lance</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const MeusLances = () => {
  const lances = [
    {
      id: 1,
      descricao: 'Descrição do lance 1',
      foto: 'https://via.placeholder.com/80',
    },
    {
      id: 2,
      descricao: 'Descrição do lance 2',
      foto: 'https://via.placeholder.com/80',
    },
    {
      id: 3,
      descricao: 'Descrição do lance 3',
      foto: 'https://via.placeholder.com/80',
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Meus Lances</Text>
      </View>
      <View style={styles.lancesContainer}>
        {lances.map((lance) => (
          <MeuLanceItem
            key={lance.id}
            descricao={lance.descricao}
            foto={lance.foto}
            onPress={() => {}}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 30,
  },
  lancesContainer: {
    flex: 1,
  },
  lanceItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginVertical: 10,
  },
  imageContainer: {
    marginRight: 10,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 5,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  descricao: {
    fontSize: 16,
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#666cff',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 15,
    height: 25,
  },
});

export default MeusLances;
