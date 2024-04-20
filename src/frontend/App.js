import { NavigationContainer } from '@react-navigation/native';
import Route from './navegations/Route';

import UserProvider from './contexts/UserContext';
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
