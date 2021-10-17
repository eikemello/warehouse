import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { Box, FormControl, FormLabel, Input, Button, Heading, Flex, CircularProgress } from '@chakra-ui/react'

import { useAuth } from '../../hooks/useAuth'
import ErrorMessage from '../../components/ErrorMessage'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const { logIn } = useAuth()
  const history = useHistory()

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      setError('')
      setIsLoading(true)
      await logIn(email, password)
      history.push('/dashboard')
    } catch (error) {
      setError("Error on login: " + error.message)
    }

    setIsLoading(false)
    setEmail('')
    setPassword('')
  }


  return (
    <Flex width="full" height="100vh" align="center" justifyContent="center">
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
                size="lg"
                onChange={event => setEmail(event.currentTarget.value)}
              />
            </FormControl>
          </Box>

          <Box py={2}>
            <FormControl id="password" isRequired >
              <FormLabel>Password:</FormLabel>
              <Input
                type="password"
                size="lg"
                onChange={event => setPassword(event.currentTarget.value)}
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
  )
}

export default Login