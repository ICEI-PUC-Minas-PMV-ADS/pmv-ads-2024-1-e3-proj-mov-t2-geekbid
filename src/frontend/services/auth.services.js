import { createContext, useContext } from 'react'

import { api } from './api'

export const AuthContext = createContext({})

function AuthProvider({ children }) {
  return (
    <AuthContext.Provider
      value={{ nome: 'Gabriel', email: 'gabriel@hotmail.com' }}
    >
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext)

  return context
}

export { AuthProvider, useAuth }
