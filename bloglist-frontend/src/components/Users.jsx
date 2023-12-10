// Users.jsx
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Table, Thead, Tbody, Tr, Th, Td, Link as ChakraLink } from '@chakra-ui/react';
import CenteredContainer from '../CenteredContainer'; // Adjust the path as needed

const Users = () => {
  const users = useSelector(({ users }) => users);

  return (
    <CenteredContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th isNumeric>Blogs Created</Th>
          </Tr>
        </Thead>
        <Tbody>
          {users.map(u => (
            <Tr key={u.id}>
              <Td>
                <ChakraLink as={Link} to={`/users/${u.id}`}>{u.name}</ChakraLink>
              </Td>
              <Td isNumeric>
                {u.blogs.length}
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </CenteredContainer>
  );
};

export default Users;
