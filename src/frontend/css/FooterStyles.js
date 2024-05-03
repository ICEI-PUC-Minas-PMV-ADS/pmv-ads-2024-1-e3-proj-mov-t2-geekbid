import { StyleSheet, Dimensions } from 'react-native';

var width = Dimensions.get('window').width; 

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    position: 'fixed',
    height: 60,
    flexDirection: 'row',
    alignSelf: 'center',
    width: width,
    borderTopWidth: 1, 
    borderTopColor: '#ccc',
  },
  iconButtonHome: {
    marginLeft: 20,
  },
  iconButtonNotificacao: {
    marginLeft: 180,
  },
});

export default styles;