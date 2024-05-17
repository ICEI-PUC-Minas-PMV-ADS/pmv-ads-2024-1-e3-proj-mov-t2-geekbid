import { Pressable } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import ConfirmarExclusaoLeilaoStyles from "./../css/ConfirmarExclusaoLeilaoStyles";

const ConfirmarExclusaoLeilao = ({ nomeProduto, usuario, idLeilao, onConfirmarExclusao, onCancel }) => {
  return (
    <View style={ConfirmarExclusaoLeilaoStyles.container}>
      <Text style={ConfirmarExclusaoLeilaoStyles.titulo}>Confirma exclusão do leilão?</Text>
      <Text style={ConfirmarExclusaoLeilaoStyles.texto}>{nomeProduto}</Text>
      <Text style={ConfirmarExclusaoLeilaoStyles.textoBy}>By: {usuario}</Text>
      <Text style={ConfirmarExclusaoLeilaoStyles.texto}>Código do leilão: {idLeilao}</Text>
      <View style={ConfirmarExclusaoLeilaoStyles.espaco}></View>
      <Pressable title="Confirmar" onPress={onConfirmarExclusao} color="#666cff" />
      <Pressable title="Cancelar" onPress={onCancel} />
    </View>
  );
};

export default ConfirmarExclusaoLeilao;
