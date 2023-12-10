import React from 'react'
import { Button, useColorMode } from '@chakra-ui/react'

const DarkModeToggle = () => {
  const { toggleColorMode } = useColorMode()

  return (
    <Button
      id="toggle-color"
      colorScheme="teal"
      onClick={toggleColorMode}
      position="fixed"
      bottom="2rem"
      right="2rem"
    >
      Dark Mode
    </Button>
  )
}

export default DarkModeToggle
