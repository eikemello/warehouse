import React, { useState } from 'react'
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Heading,
  Grid,
  Flex,
  CircularProgress,
  Image
} from '@chakra-ui/react'

import history from '../../history'

import { useAuth } from '../../hooks/useAuth'
import ErrorMessage from '../../components/ErrorMessage'

import logoImg from '../../assets/login_image.png'
import { getLogTransfers, getLogWarehouse, getEquipments } from '../../services/firebase'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const { logIn, setIsAuthenticated } = useAuth()

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      setError('')
      setIsLoading(true)

      await logIn(email, password)

      setIsAuthenticated(true)
      getLogTransfers()
      getLogWarehouse()
      getEquipments()
      history.push('/dashboard')
    } catch (error) {
      setIsAuthenticated(false)
      setEmail('')
      setPassword('')
      setError("Error on login: " + error.message)
    }

    setIsLoading(false)
  }


  return (
    <Grid templateColumns="repeat(2, 1fr)" gap={6} p={10} height="100vh" background="white">
      <Flex justifyContent="center" alignItems="center">
        <Box
          w={[400, 500, 600]}
          border="1px"
          borderColor="#b1c0cd"
          borderRadius="md"
          padding={4}
          textAlign="left"
          boxShadow="lg"
        >
          <Box py={2}>
            <Heading>Company Warehouse</Heading>
          </Box>

          <form onSubmit={handleSubmit}>
            {error && <ErrorMessage message={error} />}

            <Box py={2}>
              <FormControl id="email" isRequired >
                <FormLabel>email</FormLabel>
                <Input
                  type="email"
                  autoComplete="false"
                  size="lg"
                  borderColor="#b1c0cd"
                  onChange={event => setEmail(event.currentTarget.value)}
                  value={email}
                />
              </FormControl>
            </Box>

            <Box py={2}>
              <FormControl id="password" isRequired >
                <FormLabel>password</FormLabel>
                <Input
                  type="password"
                  autoComplete="false"
                  size="lg"
                  borderColor="#b1c0cd"
                  onChange={event => setPassword(event.currentTarget.value)}
                  value={password}
                />
              </FormControl>
            </Box>

            <Box py={2}>
              <Button
                width="full"
                mt={4}
                type="submit"
                bg="#b1c0cd"
                size="lg"
                disabled={isLoading}
              >
                {isLoading ? (
                  <CircularProgress isIndeterminate size="24px" color="teal" />
                ) : (
                  'Sign In'
                )}
              </Button>
            </Box>
          </form>
        </Box>
      </Flex>

      <Flex justifyContent="center" alignItems="center">
        <Box boxSize="max" borderRadius="md">
          <Image src={logoImg} alt="Logo" />
        </Box>
      </Flex>
    </Grid>
  )
}

export default Login