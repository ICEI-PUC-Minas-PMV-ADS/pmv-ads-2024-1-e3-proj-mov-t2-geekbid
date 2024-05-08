import { NavigationContainer } from '@react-navigation/native'
import { useAuth } from './services/auth.services'
import Route from './navegations/Route'
import { AuthProvider } from './services/auth.services'

const App = () => {
  const { usuario } = useAuth()

  return (
    <NavigationContainer>
      <AuthProvider>{{ usuario } ? '/inicial' : <Route />}</AuthProvider>
    </NavigationContainer>
  )
}

export default App
