import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 20,
  },
  contentContainer: {
    paddingBottom: 80,
  },
  head: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 30,
  },
  iconTrash: {
    color: "red",
  },
  textHeader: {
    fontSize: 25,
    textAlign: "left",
    paddingLeft: 30,
    width: "80%",
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
    width: "100%",
    height: "100%",
    borderRadius: 10,
    marginBottom: 10,
  },
  imagemPreviewBase: {
    width: "60%",
    height: "50%",
    borderRadius: 10,
    marginBottom: 10,
  },
  inputBox: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 10,
    height: 60,
  },
  inputTitle: {
    marginTop: 2,
    paddingBottom: 5,
    fontSize: 11,
    color: "#6f6f6f",
  },
  inputText: {
    height: 30,
    marginBottom: 5,
    fontSize: 16,
    color: "#000000",
  },
  button: {
    backgroundColor: "#666cff",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 5,
  },
  buttonDelete: {
    marginBottom: 8,
    height: 60,
    justifyContent: 'center',
    marginTop: 15,
    borderColor:'red',
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
    fontSize: 14,
    marginRight: 10,
  },
  duracaoInputContainer: {
    flexDirection: "row",
  },
  duracaoInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    alignItems: "center",
    paddingBottom: 0,
    paddingTop: 10,
    marginRight: 10,
    width: 60,
    fontSize: 11,
  },
  duracaoPlaceholder: {
    color: "#666cff",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    width: 60,
  },
  errorMessage: {
    color: "red",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  confirmationButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  confirmationText: { 
    padding: 10,
    fontSize: 12
  },
  buttonModal: {
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 5,
  },
  buttonDeleteModal: {
    backgroundColor: 'red',
  },
  buttonCancelModal: {
    backgroundColor: '#666cff',
  },
  buttonTextModal: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
