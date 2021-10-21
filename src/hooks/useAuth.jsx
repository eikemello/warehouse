import React, { useState, useEffect, useContext, createContext } from 'react'
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'

import history from '../history'

const AuthContext = createContext()

export const useAuth = () => {
  return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isAuthenticating, setIsAuthenticating] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const logIn = (email, password) => {
    const auth = getAuth()

    return signInWithEmailAndPassword(auth, email, password) 
    // .then((userCredentials) => {
    //   //signed in
    //   // console.log(userCredentials)
    //   setUser(userCredentials.user)
    // })
    // .catch((error) => {
    //   setUser(null)
    //   throw new Error(error.message)
    // })
  }

  const logOut = () => {
    const auth = getAuth()

    signOut(auth)
      .then(() => {
        // log out successful
        setUser(null)
        setIsAuthenticated(false)
        history.push('/')
      })
      .catch((error) => {
        throw new Error(error.message)
      })
  }

  //keep the latest auth object when is referenced
  useEffect(() => {
    const auth = getAuth()

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticating(false)
      setUser(user)
    })

    return () => unsubscribe()
  }, [])

  const values = {
    user,
    isAuthenticating,
    isAuthenticated,
    setIsAuthenticated,
    logIn,
    logOut
  }

  return (
    <AuthContext.Provider value={values}>
      {!isAuthenticating && children}
    </AuthContext.Provider>
  )
}