import React from "react";
import { View, Text, Pressable } from "react-native";
import editarLeilaoStyles from "./../css/EditarLeilaoStyles";

const ConfirmarExclusaoLeilao = ({ nomeProduto, idLeilao, onConfirmarExclusao, onCancel }) => {
  return (
    <View style={editarLeilaoStyles.confirmationContainer}>
      <Text style={editarLeilaoStyles.confirmationText}>
        Tem certeza que deseja excluir o leilão do produto {nomeProduto}?
      </Text>
      <View style={editarLeilaoStyles.confirmationButtons}>
        <Pressable
          style={[editarLeilaoStyles.confirmationButton, editarLeilaoStyles.confirmButton]}
          onPress={() => onConfirmarExclusao(idLeilao)}
        >
          <Text style={editarLeilaoStyles.confirmationButtonText}>Confirmar</Text>
        </Pressable>
        <Pressable
          style={[editarLeilaoStyles.confirmationButton, editarLeilaoStyles.cancelButton]}
          onPress={onCancel}
        >
          <Text style={editarLeilaoStyles.confirmationButtonText}>Cancelar</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ConfirmarExclusaoLeilao;
