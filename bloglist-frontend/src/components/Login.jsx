import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { loginUser } from '../reducers/user'


import { useNotification } from '../hooks/index'


import {
  Button,
  Input,
  Flex,
  useColorMode, useColorModeValue
} from '@chakra-ui/react'

const LoginForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

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
    <form onSubmit={handleSubmit}>
      <div>
        <Input
          id="username"
          placeholder="Username"
          variant="filled"
          mb={3}
          value={username}
          onChange={({ target }) => setUsername(target.value)}
        />
      </div>
      <div>
        <Input
          id="password"
          placeholder="Password"
          variant="filled"
          mb={6}
          type="password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
      </div>
      <Flex justifyContent="center">
        <Button id="login-button" type="submit" colorScheme="teal">
          Login
        </Button>
      </Flex>
    </form>
  )
}

export default LoginForm
