import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { VStack, Link as ChakraLink, Text, Box } from '@chakra-ui/react';
import CenteredContainer from '../CenteredContainer'; // Adjust the path as needed

const Blogs = () => {
  const byLikes = (b1, b2) => b2.likes - b1.likes;
  const blogs = useSelector(({ blogs }) => [...blogs].sort(byLikes));

  return (
    <CenteredContainer>
      <VStack spacing={4}>
        {blogs.map((blog) => (
          <Box
            key={blog.id}
            p={5}
            w="100%"
            borderWidth="1px"
            borderRadius="lg"
            boxShadow="sm"
            _hover={{ boxShadow: 'md' }}
          >
            <ChakraLink as={Link} to={`blogs/${blog.id}`} _hover={{ textDecoration: 'none' }}>
              <Text fontWeight="light" fontSize="xl">{blog.title}</Text>
            </ChakraLink>
          </Box>
        ))}
      </VStack>
    </CenteredContainer>
  );
};

export default Blogs;
