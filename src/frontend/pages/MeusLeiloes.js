import React from 'react';
import { View, Text,Image, ScrollView, Button, Headline} from 'react-native';
import { useNavigation } from "@react-navigation/native";

import Footer from './../navegations/Footer';
import meusLeiloesStyles from './../css/MeusLeiloesStyles';


const MeusLeiloes = () => {

  const navigation = useNavigation();

  return (
    <ScrollView>
    <View style={meusLeiloesStyles.container}>

    <View style={meusLeiloesStyles.head}>
        <Button
          icon="chevron-left"
          onPress={() => navigation.goBack()}
        ></Button>
        <Headline style={meusLeiloesStyles.textHeader}>Meus Leilões</Headline>
      </View>

      <View style={meusLeiloesStyles.row}>
        <View style={meusLeiloesStyles.itemContainer}>
        <Image
            style={meusLeiloesStyles.image}
            source={{ uri: 'asset:/src/assets/mulherMaravilha.PNG' }}
          />
          <Text style={meusLeiloesStyles.title}>Quadro Mulher Maravilha</Text>
          <View style={meusLeiloesStyles.infoContainer}>
            <Text style={meusLeiloesStyles.creator}>Criado por: Cleiton</Text>
            <Text style={meusLeiloesStyles.price}>Valor do Lance: R$ 100.00</Text>
          </View>
        </View>
        <View style={meusLeiloesStyles.itemContainer}>
        <Image
            style={meusLeiloesStyles.image}
            source={{ uri: 'asset:/src/assets/retroGeek.png' }}
          />         
          <Text style={meusLeiloesStyles.title}>Retro Geek Montável</Text>
          <View style={meusLeiloesStyles.infoContainer}>
            <Text style={meusLeiloesStyles.creator}>Criado por: Pedro</Text>
            <Text style={meusLeiloesStyles.price}>Valor do Lance: R$ 200.00</Text>
          </View>
        </View>
      </View>
      <View>
        <Footer />
      </View>
    </View>
    </ScrollView>
  );
};

export default MeusLeiloes;