import React from "react";
import { View, Text, Pressable } from "react-native";
import editarLeilaoStyles from "./../css/EditarLeilaoStyles";

const ConfirmarExclusaoLeilao = ({ nomeProduto, idLeilao, onConfirmarExclusao, onCancel }) => {
  return (
    <View>
      <Text style={editarLeilaoStyles.confirmationText}>
        Tem certeza que deseja excluir o leilão do produto {nomeProduto}?
      </Text>
      <View style={editarLeilaoStyles.confirmationButtons}>
        <Pressable
          onPress={() => onConfirmarExclusao(idLeilao)}
        >
          <Text>Confirmar</Text>
        </Pressable>
        <Pressable
          onPress={onCancel}
        >
          <Text>Cancelar</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ConfirmarExclusaoLeilao;
