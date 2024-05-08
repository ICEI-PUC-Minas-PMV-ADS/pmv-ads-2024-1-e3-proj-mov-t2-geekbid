import { createContext, useContext, useState } from 'react'

import { api } from './api'

export const AuthContext = createContext({})

function AuthProvider({ children }) {
  const [data, setData] = useState({})
  async function signIn({ email, senha }) {
    try {
      const response = await api.post('/sessao', { email, senha })
      const { usuario, token } = response.data
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`
      setData({ usuario, token })
      console.log(response)
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert('Não foi possível entrar.')
      }
    }
  }

  async function updatePerfil({ usuario }) {
    try {
      await api.put('/usuario', usuario)

      setData({ usuario, token: data.token })
      alert('Perfil atualizado.')
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert('Não foi possível entrar.')
      }
    }
  }
  return (
    <AuthContext.Provider
      value={{ signIn, updatePerfil, usuario: data.usuario }}
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
