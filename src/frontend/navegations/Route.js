import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Inicial from './Inicial';
import Register from '../pages/Register';
import Login from '../pages/Login';
import Home from '../pages/Home';
import MinhasInformacoes from '../pages/MinhasInformacoes';
import MeusLeiloes from '../pages/MeusLeiloes';
import MeusLeiloesDetalhes from '../pages/MeusLeiloesDetalhes';
import MeusLances from '../pages/MeusLances';
import NovoLeilao from '../pages/NovoLeilao';
import EnviarLance from '../pages/EnviarLance';
import Perfil from '../pages/Perfil';
import Notificacao from '../pages/Notificacao';
import Footer from './Footer';

const Stack = createNativeStackNavigator();

const Route = () => {
  return (
    <Stack.Navigator initialRouteName="Inicial">
      <Stack.Screen
        name="Inicial"
        component={Inicial}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="MinhasInformacoes"
        component={MinhasInformacoes}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="MeusLeiloes"
        component={MeusLeiloes}
        options={{
          headerShown: false,
        }}
      />
            <Stack.Screen
        name="MeusLeiloesDetalhes"
        component={MeusLeiloesDetalhes}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="MeusLances"
        component={MeusLances}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="NovoLeilao"
        component={NovoLeilao}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="EnviarLance"
        component={EnviarLance}
        options={{
          headerShown: false,
        }}
      />
            <Stack.Screen
        name="Perfil"
        component={Perfil}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Notificacao"
        component={Notificacao}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Footer"
        component={Footer}
        options={{
          headerShown: false,
        }}
      />

    </Stack.Navigator>
  );
};

export default Route;
