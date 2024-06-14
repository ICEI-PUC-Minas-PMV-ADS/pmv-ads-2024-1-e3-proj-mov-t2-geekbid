import React from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Container from '../components/Container'
import Header from '../components/Header'
import { useNavigation } from '@react-navigation/native'
import { useAuth } from '../services/auth.services'


const Perfil = () => {
  const { signOut, usuario } = useAuth()
  const navigation = useNavigation()

  function handleSignOut() {
    navigation.navigate('Inicial')
    signOut()
  }

  const handleMinhasInformacoesPress = () => {
    navigation.navigate('MinhasInformacoes')
  }
  const handleMeusLeiloesPress = () => {
    navigation.navigate('MeusLeiloes')
  }
  const handleMeusLancesPress = () => {
    navigation.navigate('MeusLances')
  }
  const handleNovoLeilaoPress = () => {
    navigation.navigate('NovoLeilao')
  }

  return (
    <Container>
      <Header title={'Perfil'} />
      <View style={styles.sceneContainer}>
        <TouchableOpacity
          onPress={handleMinhasInformacoesPress}
          style={styles.link}
        >
          <View style={styles.linkContent}>
            <Icon name="user" size={20} color="#666CFF" style={styles.icon} />
            <Text style={styles.linkText}> Minhas Informações</Text>
            <Icon
              name="angle-right"
              size={20}
              color="#666"
              style={styles.icon}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleMeusLeiloesPress} style={styles.link}>
          <View style={styles.linkContent}>
            <Icon name="image" size={20} color="#666CFF" style={styles.icon} />
            <Text style={styles.linkText}>Meus Leilões</Text>
            <Icon
              name="angle-right"
              size={20}
              color="#666"
              style={styles.icon}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleMeusLancesPress} style={styles.link}>
          <View style={styles.linkContent}>
            <Icon name="image" size={20} color="#666CFF" style={styles.icon} />
            <Text style={styles.linkText}>Meus Lances</Text>
            <Icon
              name="angle-right"
              size={20}
              color="#666"
              style={styles.icon}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleNovoLeilaoPress} style={styles.link}>
          <View style={styles.linkContent}>
            <Icon name="plus" size={20} color="#666CFF" style={styles.icon} />
            <Text style={styles.linkText}> Novo Leilão</Text>
            <Icon
              name="angle-right"
              size={20}
              color="#666"
              style={styles.icon}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSignOut} style={styles.sair}>
          <View style={styles.linkContent}>
            <Icon
              name="sign-out"
              size={20}
              color="#666CFF"
              style={styles.icon}
            />
            <Text style={styles.linkText}>Sair</Text>
          </View>
        </TouchableOpacity>
      </View>
    </Container>
  )
}

const styles = StyleSheet.create({
  sceneContainer: {
    flex: 1,
    marginTop: 40
  },
  link: {
    marginBottom: 20
  },
  sair: {
    marginBottom: 20,
    marginTop: 40
  },
  linkContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 0,
    borderBottomColor: '#ccc',
    paddingVertical: 10,
    marginBottom: 20
  },
  linkText: {
    fontSize: 16,
    color: '#333',
    marginLeft: 10,
    flex: 1,
    flexDirection: 'row'
  },
  icon: {
    marginRight: 20,
    marginLeft: 20
  }
})

export default Perfil
