import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginUser } from '../reducers/user'
import { useNotification } from '../hooks/index'
import { Input, Button, Box, ChakraProvider } from '@chakra-ui/react'

const LoginForm = () => {
  const [username, setUsername] = useState('mluukkai')
  const [password, setPassword] = useState('mluukkai')

  const dispatch = useDispatch()
  const notifyWith = useNotification()

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      dispatch(loginUser({ username, password }))
    } catch (e) {
      notifyWith('wrong username or password', 'error')
    }
  }

  return (
    <ChakraProvider>
      <form onSubmit={handleSubmit}>
        <Box mb={4}>
          <Input
            id="username"
            placeholder="Username"
            variant="filled"
            mb={3}
            value={username}
            onChange={({ target }) => setUsername(target.value)}
          />
        </Box>
        <Box mb={4}>
          <Input
            id="password"
            placeholder="Password"
            variant="filled"
            mb={6}
            type="password"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
        </Box>
        <Button id="login-button" type="submit" colorScheme="teal">
          Login
        </Button>
      </form>
    </ChakraProvider>

  )
}

export default LoginForm
