import React, { useState, useEffect, useContext, createContext } from 'react'
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'

const AuthContext = createContext()

export const useAuth = () => {
  return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isAuthenticating, setIsAuthenticating] = useState(true)
  const isAuthenticated = !!user

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
      })
      .catch((error) => {
        throw new Error(error.message)
      })
  }

  //keep the latest auth object when is referenced
  useEffect(() => {
    const auth = getAuth()

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user)
      setIsAuthenticating(false)
    })

    return () => unsubscribe()
  }, [])

  const values = {
    user,
    isAuthenticating,
    isAuthenticated,
    logIn,
    logOut
  }

  return (
    <AuthContext.Provider value={values}>
      {!isAuthenticating && children}
    </AuthContext.Provider>
  )
}