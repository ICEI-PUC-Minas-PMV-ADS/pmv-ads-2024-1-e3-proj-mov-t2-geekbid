// import { NavigationContainer } from '@react-navigation/native';
// import Route from './navegations/Route';

// import UserProvider from './contexts/UserContext';
// const App = () => {
//   return (
//     <UserProvider>
//       <NavigationContainer>
//         <Route />
//       </NavigationContainer>
//     </UserProvider>
//   );
// };

// export default App;

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MeusLeiloesDetalhes from './pages/MeusLeiloesDetalhes';
import MeusLeiloes from './pages/MeusLeiloes';

const App = () => {
  return (
    <NavigationContainer>
      <MeusLeiloes />
    </NavigationContainer>
  );
};

export default App
