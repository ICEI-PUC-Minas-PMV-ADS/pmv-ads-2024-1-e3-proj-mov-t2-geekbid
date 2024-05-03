import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { IconButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import footerStyles from './../css/FooterStyles';

const BottomNavigation = () => {
  const navigation = useNavigation();

  const handleNavigation = (routeName) => {
    if (routeName === 'Home') {
      navigation.replace(routeName);
    } else {
      navigation.navigate(routeName);
    }
  };

  return (
    <View style={footerStyles.container}>
      <IconButton
        icon="home-outline"
        onPress={() => handleNavigation('Home')}
        style={footerStyles.iconButtonHome}
        size={28}
      />
      <IconButton
        icon="bell-outline"
        onPress={() => handleNavigation('Notificacao')}
        style={footerStyles.iconButtonNotificacao}
        size={28}
      />
      <IconButton
        icon="account"
        onPress={() => handleNavigation('Perfil')}
        size={28}
      />
    </View>
  );
};

export default BottomNavigation;
