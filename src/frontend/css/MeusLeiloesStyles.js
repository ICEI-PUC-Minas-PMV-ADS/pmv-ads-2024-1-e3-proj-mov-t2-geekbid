import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal:20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
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
    textAlign:'left',
    paddingLeft: 30,
    width: '60%',
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
});

export default styles;
