import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { AuthProvider } from './services/auth.services'
import Route from './navegations/Route'

const App = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Route />
      </NavigationContainer>
    </AuthProvider>
  )
}

export default App
