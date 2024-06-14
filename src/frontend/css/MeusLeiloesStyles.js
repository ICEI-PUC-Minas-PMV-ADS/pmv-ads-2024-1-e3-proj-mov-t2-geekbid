import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  head: { 
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 30,
  },
  textHeader: { 
    fontSize: 22,
    textAlign: "left",
    paddingLeft: 30,
    width: "60%",
  },
  itemContainer: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 5,
  },
  lastItem: { 
    marginBottom: 80, 
  },
  image: {
    width: "100%",
    height: 160,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 5,
  },

  infoContainer: {
    flexDirection: "column",
    marginBottom: 10,
  },
  creator: {
    marginBottom: 5,
  },
  price: {
    marginBottom: 10,
  },
  container: { 
    flex: 1,
    paddingHorizontal: 5,
    backgroundColor: "#fff",
  },
  row: {
    justifyContent: "space-between",
    marginBottom: 20,
  },
  itemContainer: { 
    widht: "80%",
    height: "auto",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 5,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 10,
  },
  image: { 
    width: "100%",
    height: 160,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: { 
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 5,
  },
  infoContainer: {
    flexDirection: "column",
    marginBottom: 10,
  },
  creator: {
    marginBottom: 5,
  },
  price: {
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#666cff",
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  linkText: {
    color: "blue",
    fontSize: 15,
    textAlign: "right",
    paddingTop: 15,
    paddingBottom: 15,
    fontWeight: "bold",
  },
});

export default styles;
