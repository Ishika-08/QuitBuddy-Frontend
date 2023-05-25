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
  const navigate = useNavigate()
  const handleLogIn = ()=>{
    navigate('/login')
  }
  const handleJoin = ()=>{
    navigate('/quiz')
  }
  return (
    <Container size={420} my={40}>
      <Title
        align="center"
        sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })}
      >
        Quit smoking, embrace freedom.!
      </Title>
      <Text color="dimmed" size="sm" align="center" mt={5}>
        Already have an accoun?{' '}
        <Anchor size="sm" component="button" onClick={handleLogIn}>
          Login
        </Anchor>
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <TextInput label="Email" placeholder="you@mantine.dev" required />
        <TextInput label="Text" placeholder="matrix#564" required mt="md"/>
        <PasswordInput label="Password" placeholder="Your password" required mt="md" />
        <Button fullWidth mt="xl" onClick={handleJoin}>
          Join Now
        </Button>
      </Paper>
    </Container>
  );
}