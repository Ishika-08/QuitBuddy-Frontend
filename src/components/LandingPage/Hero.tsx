import {
  createStyles,
  Image,
  Container,
  Title,
  Button,
  Group,
  Text,
  List,
  ThemeIcon,
  rem,
} from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import { useNavigate} from 'react-router-dom';
// import image from './public/HeroSection.jpg';

const useStyles = createStyles((theme) => ({
  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: `calc(${theme.spacing.xl} * 4)`,
    paddingBottom: `calc(${theme.spacing.xl} * 4)`,
  },

  content: {
    maxWidth: rem(480),
    marginRight: `calc(${theme.spacing.xl} * 3)`,

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
      marginRight: 0,
    },
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(44),
    lineHeight: 1.2,
    fontWeight: 900,

    [theme.fn.smallerThan('xs')]: {
      fontSize: rem(28),
    },
  },

  control: {
    [theme.fn.smallerThan('xs')]: {
      flex: 1,
    },
  },

  image: {
    flex: 1,

    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },

  highlight: {
    position: 'relative',
    backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
    borderRadius: theme.radius.sm,
    padding: `${rem(4)} ${rem(12)}`,
  },
}));

export default function HeroBullets() {
  const { classes } = useStyles();
  const navigate = useNavigate();
  const handleClick= ()=>{
    navigate('/signup')
  }
  return (
    <div>
      <Container>
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
            Start Your Journey to a <span className={classes.highlight}>Smoke-Free Life</span> with Quit Buddy 
            </Title>
            <Text color="dimmed" mt="md">
            With Quit Buddy, you'll have access to a range of tools and features designed to help you quit smoking successfully. 
            </Text>

            <List
              mt={30}
              spacing="sm"
              size="sm"
              icon={
                <ThemeIcon size={20} radius="xl">
                  <IconCheck size={rem(12)} stroke={1.5} />
                </ThemeIcon>
              }
            >
              <List.Item>
                <b>Tracking consumption</b> -Track your progress, celebrate milestones, and stay motivated with personalized insights and achievements.
              </List.Item>
              <List.Item>
                <b>Resources and Education</b> – Gain valuable knowledge about the benefits of quitting, the effects of smoking on your health,
                 and strategies to overcome cravings and triggers.
              </List.Item>
              <List.Item>
                <b>Community Support</b> – Connect with a supportive community of individuals who are also on their journey to quit smoking. Share your experiences,
                 seek advice, and find encouragement from others who understand what you're going through.
              </List.Item>
            </List>

            <Group mt={30}>
              <Button radius="xl" size="md" className={classes.control} onClick={handleClick}>
                Join Now
              </Button>
            </Group>
          </div>
          <Image src="./HeroSection.jpg" className={classes.image} />
        </div>
      </Container>
    </div>
  );
}