import { NavigationContainer } from '@react-navigation/native';
import Route from './src/navegations/Route';

import UserProvider from './src/contexts/UserContext';
const App = () => {
  return (
    <UserProvider>
      <NavigationContainer>
        <Route />
      </NavigationContainer>
    </UserProvider>
  );
};

export default App;
