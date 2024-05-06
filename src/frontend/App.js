import { NavigationContainer } from '@react-navigation/native'
import Route from './navegations/Route'
import { AuthProvider } from './services/auth.services'

import UserProvider from './contexts/UserContext'
const App = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Route />
      </AuthProvider> 
    </NavigationContainer>
  )
}

export default App
