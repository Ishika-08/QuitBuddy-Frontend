import { useState } from 'react';
import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
} from '@mantine/core';
import { useNavigate } from 'react-router-dom';

export default function AuthenticationTitle() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false); // Added loading state
  const [error, setError] = useState(false); // Added error state
  const [errorMessage, setErrorMessage] = useState(''); // Added error message state

  const handleLogIn = () => {
    navigate('/login');
  };

  const handleJoin = async () => {
    try {
      setLoading(true); // Set loading to true before making the request

      // Perform client-side validation
      if (!validateEmail(email)) {
        setError(true);
        setErrorMessage('Invalid email format');
        return;
      }

      if (password.length < 6) {
        setError(true);
        setErrorMessage('Password should be at least 6 characters long');
        return;
      }

      const response = await fetch('https://geeks-for-geeks-health-backend.up.railway.app/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
          email,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data); // You can do something with the response data here
      } else if (response.status === 500) {
        setError(true); // Set error to true for server error
      } else {
        const errorMessage = await response.text(); // Get the error message from the response
        setError(true); // Set error to true
        setErrorMessage(errorMessage); // Set the error message
      }
    } catch (error) {
      console.log('Error:', error.message);
    } finally {
      setLoading(false); // Set loading back to false after the request is completed
    }
  };

  const handleInputChange = () => {
    setError(false); // Reset error to false when input changes
    setErrorMessage(''); // Reset error message
  };

  // Email validation function
  const validateEmail = (email:any) => {
    // Basic email format validation using regex
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  return (
    <Container size={420} my={40}>
      <Title
        align="center"
        sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })}
      >
        Quit smoking, embrace freedom.!
      </Title>
      <Text color="dimmed" size="sm" align="center" mt={5}>
        Already have an account?{' '}
        <Anchor size="sm" component="button" onClick={handleLogIn}>
          Login
        </Anchor>
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <TextInput
          label="Email"
          placeholder="you@mantine.dev"
          required
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            handleInputChange();
          }}
        />
        <TextInput
          label="Username"
          placeholder="matrix#564"
          required
          mt="md"
          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
            handleInputChange();
          }}
        />
        <PasswordInput
          label="Password"
          placeholder="Your password"
          required
          mt="md"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
            handleInputChange();
          }}
        />
        {error && (
          <Text color="red" size="sm" mt="md" align="center">
            {errorMessage || 'Error occurred while joining. Please try again.'}
          </Text>
        )}
        {loading ? (
          // Render loading state while waiting for the response
          <Button fullWidth mt="xl" disabled>
            Loading...
          </Button>
        ) : (
          // Render the button to join when not loading
          <Button fullWidth mt="xl" onClick={handleJoin}>
            Join Now
          </Button>
        )}
      </Paper>
    </Container>
  );
}
