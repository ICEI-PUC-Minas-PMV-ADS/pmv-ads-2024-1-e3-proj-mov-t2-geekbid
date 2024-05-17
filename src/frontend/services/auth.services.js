import { createContext, useContext, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { api } from './api'

export const AuthContext = createContext({})

function AuthProvider({ children }) {
  const [data, setData] = useState({})
  async function signIn({ email, senha }) {
    try {
      const response = await api.post('/sessao', { email, senha })
      const { usuario, token } = response.data

      AsyncStorage.setItem('@geekbid:usuario', JSON.stringify(usuario))
      AsyncStorage.setItem('@geekbid:token', token)

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

  function signOut() {
    AsyncStorage.removeItem('@geekbid:usuario')
    AsyncStorage.removeItem('@geekbid:token')

    setData({})
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

  // useEffect(() => {
  //   const token = AsyncStorage.getItem('@geekbid:token')
  //   const usuario = AsyncStorage.getItem('@geekbid:usuario')

  //   if (token && usuario) {
  //     api.defaults.headers.common['Authorization'] = `Bearer ${token}`

  //     setData({
  //       token,
  //       usuario: JSON.parse(usuario)
  //     })
  //   }
  // }, [])
  return (
    <AuthContext.Provider
      value={{ signIn, updatePerfil, usuario: data.usuario, signOut }}
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
