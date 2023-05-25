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
    
    const handleLogIn= ()=>{
      navigate('/dashboard')
    }

    const handleNewAcount= ()=>{
      navigate('/signup')
    }

    const handleForgotPass= ()=>{
      navigate('/forgotpass')
    }

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
          <TextInput label="Email" placeholder="you@mantine.dev" required />
          <PasswordInput label="Password" placeholder="Your password" required mt="md" />
          <Group position="apart" mt="lg">
            <Checkbox label="Remember me" />
            <Anchor component="button" size="sm" onClick={handleForgotPass}>
              Forgot password?
            </Anchor>
          </Group>
          <Button fullWidth mt="xl" onClick={handleLogIn}>
            Login
          </Button>
        </Paper>
      </Container>
    );
  }