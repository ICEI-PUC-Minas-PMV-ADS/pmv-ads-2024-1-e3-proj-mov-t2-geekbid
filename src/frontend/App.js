import { NavigationContainer } from '@react-navigation/native'
import { useAuth } from './services/auth.services'
import Route from './navegations/Route'
import { AuthProvider } from './services/auth.services'

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
