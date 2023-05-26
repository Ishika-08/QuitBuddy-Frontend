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
import { useNavigate} from 'react-router-dom';

const URL = import.meta.env.REACT_APP_URL;
console.log(URL)
export default function AuthenticationTitle() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false); // Added loading state
  const [error, setError] = useState(false); // Added error state


  const handleLogIn = async () => {
    try {
      setLoading(true); // Set loading to true before making the request
      const response = await fetch(`https://geeks-for-geeks-health-backend.up.railway.app/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (response.ok) {
        const data = await response.json();

        // Access the response data here
        const userID = (data._id)

        // Redirect to a new page or perform other actions after successful login
        navigate(`/${userID}/dashboard`);
      } else if (response.status === 500) {
        setError(true); // Set error to true for wrong credentials
      } else {
        console.log('Error:', response.status);
      }
    } catch (error:any) {
      console.log('Error:', error.message);
    } finally {
      setLoading(false); // Set loading back to false after the request is completed
    }
  };

  const handleNewAcount = () => {
    navigate('/signup');
  };

  // const handleForgotPass = () => {
  //   navigate('/forgotpass');
  // };

  const handleInputChange = () => {
    setError(false); // Reset error to false when input changes
  };

  return (
    <Container size={420} my={40}>
      <Title
        align="center"
        sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })}
      >
        Welcome back!
      </Title>
      <Text color="dimmed" size="sm" align="center" mt={5}>
        Do not have an account yet?{' '}
        <Anchor size="sm" component="button" onClick={handleNewAcount}>
          Create account
        </Anchor>
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <TextInput
          label="Email"
          placeholder="abc@gmail.com"
          required
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
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
            Incorrect email or password. Please try again.
          </Text>
        )}
        <Group position="apart" mt="lg">
          <Checkbox label="Remember me" />
        </Group>
        {loading ? (
          // Render loading state while waiting for the response
          <Button fullWidth mt="xl" disabled>
            Loading...
          </Button>
        ) : (
          // Render the button to login when not loading
          <Button fullWidth mt="xl" onClick={handleLogIn}>
            Login
          </Button>
        )}
      </Paper>

      
    </Container>
  );
}
