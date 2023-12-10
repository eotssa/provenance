// useBackgroundStyle.js
import { useColorModeValue } from '@chakra-ui/react'

export const useBackgroundStyle = () => {
  return {
    bg: useColorModeValue('#ffffff40', '#20202380'),
    css: { backdropFilter: 'blur(10px)' }
  }
}
