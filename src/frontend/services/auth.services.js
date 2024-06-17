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

      api.defaults.headers.authorization = `Bearer ${token}`
      setData({ usuario, token })

      return true
    } catch (error) {
      if (error.response) {
        alert('Email ou senha incorretos.')
      } else {
        alert('Não foi possível entrar.')
      }
      return false
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
        alert('Não foi possível atualizar.')
      }
    }
  }

  async function deleteAccount() {
    try {
      await api.delete('/usuario')
      await AsyncStorage.removeItem('@geekbid:usuario')
      await AsyncStorage.removeItem('@geekbid:token')

      setData({})
      alert('Conta excluída com sucesso.')
    } catch (error) {
      if (error.response) {
        console.log(data)
      } else {
        alert('Não foi possível excluir a conta.')
      }
    }
  }

  useEffect(() => {
    async function loadStorageData() {
      const token = await AsyncStorage.getItem('@geekbid:token')
      const usuario = await AsyncStorage.getItem('@geekbid:usuario')

      if (token && usuario) {
        api.defaults.headers.authorization = `Bearer ${token}`

        setData({
          token,
          usuario: JSON.parse(usuario)
        })
      }
    }

    loadStorageData()
  }, [])

  return (
    <AuthContext.Provider
      value={{
        signIn,
        updatePerfil,
        usuario: data.usuario,
        signOut,
        deleteAccount
      }}
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
