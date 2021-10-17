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
    <Grid templateColumns="repeat(2, 1fr)" gap={6} height="100vh">
      <Flex justifyContent="center" alignItems="center">
        <Box
          w={[300, 400, 500]}
          border="1px"
          borderColor="gray.200"
          borderRadius="md"
          padding={4}
          textAlign="left"
          boxShadow="lg"
        >
          <Box py={2}>
            <Heading>Login</Heading>
          </Box>

          <form onSubmit={handleSubmit}>
            {error && <ErrorMessage message={error} />}

            <Box py={2}>
              <FormControl id="email" isRequired >
                <FormLabel>Email:</FormLabel>
                <Input
                  type="email"
                  autoComplete="false"
                  size="lg"
                  onChange={event => setEmail(event.currentTarget.value)}
                  value={email}
                />
              </FormControl>
            </Box>

            <Box py={2}>
              <FormControl id="password" isRequired >
                <FormLabel>Password:</FormLabel>
                <Input
                  type="password"
                  autoComplete="false"
                  size="lg"
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
                colorScheme="blue"
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
        <Box boxSize="xl" borderRadius="md">
          <Image src={logoImg} alt="Logo" />
        </Box>
      </Flex>
    </Grid>
  )
}

export default Login