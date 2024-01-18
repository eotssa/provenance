import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Box, Button, Text, Input, VStack, Link as ChakraLink } from '@chakra-ui/react';

import { removeBlog, updateBlog, commentBlog } from '../reducers/blogs';
import { useNotification } from '../hooks/index';
import CenteredContainer from '../CenteredContainer'; // Adjust the import path as needed

const Blog = () => {
  const [comment, setComment] = useState('');
  const id = useParams().id;
  const blog = useSelector(({ blogs }) => blogs.find(u => u.id === id));
  const user = useSelector(({ user }) => user);

  const dispatch = useDispatch();
  const notifyWith = useNotification();
  const navigate = useNavigate();

  if (!blog || !user) {
    return null;
  }

  const canRemove = blog.user.username === user.username;

  const remove = () => {
    const ok = window.confirm(`Sure you want to remove '${blog.title}' by ${blog.author}`);
    if (ok) {
      dispatch(removeBlog(blog));
      notifyWith(`The blog '${blog.title}' by '${blog.author}' was removed`);
      navigate('/');
    }
  };

  const like = () => {
    const blogToUpdate = { ...blog, likes: blog.likes + 1, user: blog.user.id };
    dispatch(updateBlog(blogToUpdate));
    notifyWith(`A like for the blog '${blog.title}' by '${blog.author}'`);
  };

  const addComment = () => {
    dispatch(commentBlog(blog.id, comment));
    notifyWith('Comment added!');
    setComment('');
  };

  const commentsList = blog.comments && Array.isArray(blog.comments) 
    ? blog.comments.map((c, i) => <li key={i}>{c}</li>)
    : null;

  return (
    <CenteredContainer>
      <VStack spacing={4} align="stretch">
        <Text fontSize="2xl" fontWeight="bold">{blog.title}</Text>
        <Text fontSize="lg">by {blog.author}</Text>
        <ChakraLink as={Link} to={blog.url} isExternal>
          {blog.url}
        </ChakraLink>
        <Text>likes {blog.likes} <Button onClick={like}>like</Button></Text>
        {canRemove && <Button onClick={remove}>delete</Button>}
        <Text fontSize="lg" mt={2}>comments:</Text>
        <Input value={comment} onChange={({ target }) => setComment(target.value)} />
        <Button onClick={addComment}>add comment</Button>
        <ul>{commentsList}</ul>
      </VStack>
    </CenteredContainer>
  );
};

export default Blog;
