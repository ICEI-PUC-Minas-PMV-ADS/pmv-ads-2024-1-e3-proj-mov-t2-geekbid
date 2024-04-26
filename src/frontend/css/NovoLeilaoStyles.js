import { StyleSheet, } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
    },
    scrollContent: {
      flexGrow: 1,
    },
    head: {
      flexDirection: "row",
      justifyContent: 'flex-start',
      alignItems: 'center',
      marginTop: 20,
      marginBottom: 30,
    },
    textHeader: {
      fontSize: 25,
    },
    trashIcon: {
      width: 20,
      height: 20,
      marginLeft: 100,
    },
    uploadButton: {
      backgroundColor: "#f0f0f0",
      alignItems: "center",
      justifyContent: "center",
      height: 200,
      borderRadius: 10,
      marginBottom: 20,
      width: "60%",
      alignSelf: "center",
    },
    uploadButtonText: {
      color: "#333",
      fontSize: 16,
      textAlign: "center",
    },
    imagemContainer: {
      width: "100%",
      height: "100%",
      borderRadius: 10,
      marginBottom: 10,
      borderWidth: 1,
      borderColor: "#ccc",
      borderStyle: "dashed",
      alignItems: "center",
      justifyContent: "center",
    },
    imagemPreview: {
      width: "60%",
      height: "60%",
      borderRadius: 10,
      marginBottom: 10,
    },
    input: {
      borderWidth: 1,
      borderColor: "#ccc",
      borderRadius: 5,
      paddingLeft: 10,
      paddingBottom: 15,
      marginBottom: 20,
      marginTop: 0,
      fontSize: 10,
    },
    inputDescription: {
      borderWidth: 1,
      borderColor: "#ccc",
      borderRadius: 5,
      paddingLeft: 10,
      paddingBottom: 35,
      marginBottom: 20,
      marginTop: 0,
      fontSize: 10,
    },
    button: {
      backgroundColor: "#666cff",
      padding: 15,
      borderRadius: 5,
      alignItems: "center",
      marginBottom: 5,
    },
    buttonPublicar: {
      backgroundColor: "#666cff",
      padding: 15,
      borderRadius: 5,
      alignItems: "center",
      marginBottom: 100,
    },
    buttonText: {
      color: "#fff",
      fontSize: 16,
      fontWeight: "bold",
    },
    duracaoContainer: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 20,
    },
    duracaoLabel: {
      color: "gray",
      fontSize: 10,
      marginRight: 10,
    },
    duracaoInputContainer: {
      flexDirection: "row",
    },
    duracaoInput: {
      borderWidth: 1,
      borderColor: "#ccc",
      borderRadius: 5,
      textAlign: "center",
      paddingBottom: 0,
      paddingTop: 10,
      marginRight: 10,
      width: 50,
      fontSize: 8,
    },
  });

  export default styles;
  
  