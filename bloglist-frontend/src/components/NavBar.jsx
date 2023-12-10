import { Flex, Box, Text, Button, Link, useColorModeValue, IconButton } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { HamburgerIcon } from '@chakra-ui/icons' // Assuming you have a similar icon for the theme toggle

const NavBar = ({ user, logout }) => {
  const bgColor = useColorModeValue('#ffffff40', '#20202380')
  const color = useColorModeValue('gray.800', 'whiteAlpha.900')
  const hoverBgColor = useColorModeValue('gray.200', 'gray.600')

  //const bgColor = 'rgba(23, 25, 35, 0.85)';

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={bgColor}
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={2}
    >
      <Flex
        display="flex"
        p={2}
        maxW="container.md"
        align="center"
        justify="center"
        margin="0 auto"
      >
        {/* Logo or Title - assuming you have a logo component */}
        {/* ... */}

        {/* Centered navigation links */}
        <Box display={{ base: 'none', md: 'flex' }} alignItems="center">
          <Link as={RouterLink} to="/" px={2} py={1} _hover={{ bg: hoverBgColor }}>
            Blogs
          </Link>
          <Link as={RouterLink} to="/users" px={2} py={1} _hover={{ bg: hoverBgColor }}>
            Users
          </Link>
        </Box>

        {/* User info and logout */}
        <Flex align="center">
          <Text px={2} py={1}>
            {user.name} logged in
          </Text>
          <Button onClick={logout} px={2} py={1} _hover={{ bg: hoverBgColor }}>
            Logout
          </Button>

          {/* Theme toggle button */}
          <IconButton
            aria-label="Toggle theme"
            icon={<HamburgerIcon />} // Replace with your theme toggle icon
            variant="outline"
            ml={2}
          />
        </Flex>

        {/* Hamburger menu for mobile view */}
        {/* ... */}
      </Flex>
    </Box>
  )
}

export default NavBar
