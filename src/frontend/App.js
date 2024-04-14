import { NavigationContainer } from '@react-navigation/native';
import Route from './../frontend/navegations/Route';

import UserProvider from './../frontend/contexts/UserContext';
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
