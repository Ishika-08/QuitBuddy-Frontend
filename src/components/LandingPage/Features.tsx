import {
    createStyles,
    Badge,
    Group,
    Title,
    Text,
    Card,
    SimpleGrid,
    Container,
    rem,
  } from '@mantine/core';
  import { IconGauge, IconUser, IconCookie } from '@tabler/icons-react';
  
  const mockdata = [
    {
      title: ' Personalized Quit Plan',
      description:
      'Quit Buddy creates a personalized quit plan tailored to your smoking habits, providing step-by-step guidance to help you quit smoking for good. Whether you prefer a gradual approach or cold turkey, Quit Buddy offers a customized plan that fits your needs and maximizes your chances of success.',
      icon: IconGauge,
    },
    {
      title: 'Progress Tracking',
      description:
      'Keep track of your progress and celebrate your milestones with Quit Buddy’s progress tracking feature. Monitor the number of smoke-free days, cigarettes avoided, and the money saved. Visualize your journey towards a smoke-free life and stay motivated as you see the positive impact of quitting smoking.',
      icon: IconUser,
    },
    {
      title: 'Craving Management',
      description:
      'Quit Buddy equips you with effective strategies to manage cravings and resist the urge to smoke. From deep-breathing exercises and distraction techniques to mindful activities, Quit Buddy provides you with a toolbox of techniques to overcome cravings and stay on track with your quit journey.',
      icon: IconCookie,
    },
    {
        title: 'Community Support',
        description:
        'Connect with a supportive community of individuals who are also on their quit journey through Quit Buddy community support feature. Share your experiences, seek advice, and offer encouragement to others. Building a network of like-minded individuals can provide you with the support and motivation needed to successfully quit smoking.',
        icon: IconCookie,
      },
      {
        title: 'Health Benefits',
        description:
        'Explore the numerous health benefits that come with quitting smoking through Quit Buddy informative resources. Discover how your body recovers over time as you become smoke-free. From improved lung function and reduced risk of diseases to enhanced taste and smell, Quit Buddy highlights the positive changes you will experience on your journey to a smoke-free life.',
        icon: IconCookie,
      }
  ];
  
  const useStyles = createStyles((theme) => ({
    title: {
      fontSize: rem(34),
      fontWeight: 900,
  
      [theme.fn.smallerThan('sm')]: {
        fontSize: rem(24),
      },
    },
  
    description: {
      maxWidth: 600,
      margin: 'auto',
  
      '&::after': {
        content: '""',
        display: 'block',
        backgroundColor: theme.fn.primaryColor(),
        width: rem(45),
        height: rem(2),
        marginTop: theme.spacing.sm,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
  
    card: {
      border: `${rem(1)} solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]
      }`,
    },
  
    cardTitle: {
      '&::after': {
        content: '""',
        display: 'block',
        backgroundColor: theme.fn.primaryColor(),
        width: rem(45),
        height: rem(2),
        marginTop: theme.spacing.sm,
      },
    },
  }));
  
  export default function Features() {
    const { classes, theme } = useStyles();
    const features = mockdata.map((feature) => (
      <Card key={feature.title} shadow="md" radius="md" className={classes.card} padding="xl">
        <feature.icon size={rem(50)} stroke={2} color={theme.fn.primaryColor()} />
        <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
          {feature.title}
        </Text>
        <Text fz="sm" c="dimmed" mt="sm">
          {feature.description}
        </Text>
      </Card>
    ));
  
    return (
      <Container size="lg" py="xl" my={100}>
        <Group position="center">
          <Badge variant="filled" size="lg">
          Smoke-Free Champion
          </Badge>
        </Group>
  
        <Title order={2} className={classes.title} ta="center" mt="sm">
        Quit Buddy: Your Personalized Path to Freedom
        </Title>
  
        <Text c="dimmed" className={classes.description} ta="center" mt="md">
        Empowering You to Quit Smoking and Take Control of Your Life
        </Text>
  
        <SimpleGrid cols={2} spacing="xl" mt={50} breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
          {features}
        </SimpleGrid>
      </Container>
    );
  }