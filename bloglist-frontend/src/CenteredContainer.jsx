import { Box } from '@chakra-ui/react';

const CenteredContainer = ({ children }) => {
  return (
    <Box pt="90px" display="flex" justifyContent="center" width="100%">
      <Box overflowX="auto" maxW="container.md" w="100%">
        {children}
      </Box>
    </Box>
  );
};

export default CenteredContainer;
