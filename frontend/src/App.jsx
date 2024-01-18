import { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { Routes, Route, Link } from 'react-router-dom'

import LoginForm from './components/Login'
import NewBlog from './components/NewBlog'
import Notification from './components/Notification'
import Users from './components/Users'
import User from './components/User'
import Blogs from './components/Blogs'
import Blog from './components/Blog'
import Togglable from './components/Togglable'
import DarkModeToggle from './components/DarkModeToggle' // Import the DarkModeToggle component
import NavBar from './components/Navbar'

import { useNotification, useInitialization, useClearUser } from './hooks/index'

import { Flex, Heading, Button, useColorMode, useColorModeValue } from '@chakra-ui/react'




const App = () => {

  const blogFormRef = useRef()
  const stateInitializer = useInitialization()
  const notifyWith = useNotification()

  const clearUser = useClearUser()

  const user = useSelector(({ user }) => user)

  useEffect(() => {
    stateInitializer()
  }, [])

  const logout = async () => {
    clearUser()
    notifyWith('logged out')
  }

  const formBackground = useColorModeValue('gray.100', 'gray.700')

  if (!user) {
    return (
      <Flex height="100vh" alignItems="center" justifyContent="center">
        <Flex direction="column" backgroundColor={formBackground} p={12} rounded={6} alignItems="center">
          <Heading mb={6}>Log in</Heading>
          <Notification />
          <LoginForm />
          <DarkModeToggle />
        </Flex>
      </Flex>

    )
  }

  const padding = {
    padding: 5
  }

  return (
    <div>
      <NavBar user={user} logout={logout} />

      <Routes>
        <Route path="/users" element={ <Users />}></Route>
        <Route path="/users/:id" element={ <User />}></Route>
        <Route path="/blogs/:id" element={ <Blog />}></Route>
        <Route path="/" element={ <Blogs />}></Route>
      </Routes>

      <Togglable buttonLabel="new blog" ref={blogFormRef}>
        <NewBlog hideMe={() => blogFormRef.current.toggleVisibility()} />
      </Togglable>
    </div>
  )
}

export default App