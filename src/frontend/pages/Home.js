import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { BottomNavigation, IconButton } from 'react-native-paper';

import Perfil from './Perfil';
import Notificacao from './Notificacao';
import Lance from './Lance';
import Pesquisa from './Pesquisa';
import Footer from "./../navegations/Footer";

const Home = ({ navigation }) => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'Home', title: '' },
    { key: 'Notificacao', title: '' },
    { key: 'Perfil', title: '' },
    { key: 'Lance', title: '' },
  ]);

  const renderScene = ({ route }) => {
    switch (route.key) {
      case 'Home':
        return (
          <View style={styles.sceneContainer}>
            <Pesquisa />
            <Lance onPress={() => navigation.navigate('Lance')} />
          </View>
        );
      case 'Notificacao':
        return <Notificacao />;
      case 'Perfil':
        return <Perfil />;
      default:
        return null;
    }
  };

  const renderIcon = (key, icon, color, size) => {
    const isSelected = index === key;
    return (
      <IconButton
        key={key}
        icon={icon}
        color={isSelected ? '#ffffff' : color}
        size={size}
        style={[
          styles.iconButton,
          {
            backgroundColor: isSelected ? '#666cff' : 'transparent',
          },
        ]}
        onPress={() => setIndex(key)}
      />
    );
  };

  return (
    <View style={styles.container}>
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
        // activeColor="#666cff"
        // inactiveColor="#000000"
        // barStyle={{
          // backgroundColor: 'transparent',
          // elevation: 0,
          // position: 'absolute',
          // bottom: 0,
          // left: 0,
          // right: 0,
        // }}
        // shifting={false}
      />
      {/* <View style={styles.buttonContainer}>
        {renderIcon(0, 'home-outline', '#000000', 28)}
      </View>
      <View style={styles.profileNotificationsContainer}>
        {renderIcon(1, 'bell-outline', '#000000', 28)}
        {renderIcon(2, 'account', '#000000', 28)}
      </View> */}
      <View style={{  }}>
        <Footer />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    position: 'relative',
  },
  buttonContainer: {
    position: 'absolute',
    left: 16,
    bottom: 16,
  },
  profileNotificationsContainer: {
    position: 'absolute',
    right: 16,
    bottom: 16,
    flexDirection: 'row',
  },
  iconButton: {
    marginHorizontal: 8,
  },
  sceneContainer: {
    flex: 1,
  },
});

export default Home;
