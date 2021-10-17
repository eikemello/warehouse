import React from 'react'
import { AuthProvider } from './hooks/useAuth';
import { ChakraProvider } from "@chakra-ui/react"

import './services/firebase'

import Routes from './routes';

import './styles/global.css';

function App() {
  return (
    <ChakraProvider>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ChakraProvider>
  );
}

export default App;
