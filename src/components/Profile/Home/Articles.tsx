// import { Carousel } from '@mantine/carousel';
// import { useMediaQuery } from '@mantine/hooks';
// import { createStyles, Paper, Text, Title, Button, useMantineTheme, rem } from '@mantine/core';

// const useStyles = createStyles((theme) => ({
//   card: {
//     height: rem(440),
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'space-between',
//     alignItems: 'flex-start',
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//   },

//   title: {
//     fontFamily: `Greycliff CF, ${theme.fontFamily}`,
//     fontWeight: 900,
//     color: theme.white,
//     lineHeight: 1.2,
//     fontSize: rem(32),
//     marginTop: theme.spacing.xs,
//   },

//   category: {
//     color: theme.white,
//     opacity: 0.7,
//     fontWeight: 700,
//     textTransform: 'uppercase',
//   },
// }));

// interface CardProps {
//   image: string;
//   title: string;
//   category: string;
// }

// function Card({ image, title, category }: CardProps) {
//   const { classes } = useStyles();

//   return (
//     <Paper
//       shadow="md"
//       p="xl"
//       radius="md"
//       sx={{ backgroundImage: `url(${image})` }}
//       className={classes.card}
//     >
//       <div>
//         <Text className={classes.category} size="xs">
//           {category}
//         </Text>
//         <Title order={3} className={classes.title}>
//           {title}
//         </Title>
//       </div>
//       <Button variant="white" color="dark">
//         Read article
//       </Button>
//     </Paper>
//   );
// }

// const data = [
//   {
//     image:
//     '/Article/img6.jpg',
//     title: 'Quit Smoking',
//     category: 'nature',
//     key: 1
//   },
//   {
//     image:
//     '/Article/img2.jpg',
//     title:'Quit Smoking',
//     category: 'beach',
//     key: 2
//   },
//   {
//     image:
//     '/Article/img3.jpg',
//     title: 'Quit Smoking',
//     category: 'nature',
//     key: 3
//   },
//   {
//     image:
//     '/Article/img4.jpg',
//     title:'Quit Smoking',
//     category: 'nature',
//     key: 4
//   },
//   {
//     image:
//     '/Article/img5.jpg',
//     title: 'Quit Smoking',
//     category: 'tourism',
//     key: 5
//   },
//   {
//     image:
//     '/Article/img1.jpg',
//     title: 'Quit Smoking',
//     category: 'nature',
//     key: 6
//   },
// ];

// export default function CardsCarousel() {
//   const theme = useMantineTheme();
//   const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
//   const slides = data.map((item) => (
//     <Carousel.Slide key={item.key}>
//       <Card {...item} />
//     </Carousel.Slide>
//   ));

//   return (
//     <Carousel
//       slideSize="50%"
//       breakpoints={[{ maxWidth: 'sm', slideSize: '100%', slideGap: rem(2) }]}
//       slideGap="xl"
//       align="start"
//       slidesToScroll={mobile ? 1 : 2}
//     >
//       {slides}
//     </Carousel>
//   );
// }

import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { createStyles, Paper, Text, Title, Button, useMantineTheme, rem } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  card: {
    height: rem(440),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    color: theme.white,
    lineHeight: 1.2,
    fontSize: rem(32),
    marginTop: theme.spacing.xs,
  },

  category: {
    color: theme.white,
    opacity: 0.7,
    fontWeight: 700,
    textTransform: 'uppercase',
  },
}));

interface CardProps {
  image: string;
  title: string;
  category: string;
  articleLink: string;
}

function Card({ image, title, category, articleLink }: CardProps) {
  const { classes } = useStyles();

  const handleReadArticle = () => {
    window.open(articleLink, '_blank');
  };

  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      sx={{ backgroundImage: `url(${image})` }}
      className={classes.card}
    >
      <div>
        <Text className={classes.category} size="xs">
          {category}
        </Text>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
      </div>
      <Button variant="white" color="dark" onClick={handleReadArticle}>
        Read article
      </Button>
    </Paper>
  );
}

const data = [
  {
    image: '/Article/img6.jpg',
    title: 'World NO Tobacoo Day',
    category: 'WHO',
    articleLink: 'https://www.who.int/campaigns/world-no-tobacco-day',
    key: 1
  },
  {
    image: '/Article/img2.jpg',
    title: '13 Ways to quit smoking',
    category: 'smoking-cessation',
    articleLink: 'https://www.webmd.com/smoking-cessation/ss/slideshow-13-best-quit-smoking-tips-ever',
    key: 2
  },
  {
    image: '/Article/img3.jpg',
    title: 'Live a Healthy life',
    category: 'campaign',
    articleLink: 'https://www.cdc.gov/tobacco/campaign/tips/quit-smoking/index.html',
    key: 3
  },
  {
    image: '/Article/img4.jpg',
    title: 'Nicotine a new addiction',
    category: 'nicotine-craving',
    articleLink: 'https://www.mayoclinic.org/healthy-lifestyle/quit-smoking/in-depth/nicotine-craving/art-20045454',
    key: 4
  },
  {
    image: '/Article/img5.jpg',
    title: 'Helthy-lifestyle',
    category: 'Health',
    articleLink: 'https://www.mayoclinic.org/healthy-lifestyle/quit-smoking/in-depth/nicotine-craving/art-20045454',
    key: 5
  },
  {
    image: '/Article/img1.jpg',
    title: '',
    category: 'health',
    articleLink: 'https://www.mayoclinic.org/healthy-lifestyle/quit-smoking/in-depth/nicotine-craving/art-20045454',
    key: 6
  },
];

export default function CardsCarousel() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = data.map((item) => (
    <Carousel.Slide key={item.key}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <Carousel
      slideSize="50%"
      breakpoints={[{ maxWidth: 'sm', slideSize: '100%', slideGap: rem(2) }]}
      slideGap="xl"
      align="start"
      slidesToScroll={mobile ? 1 : 2}
    >
      {slides}
    </Carousel>
  );
}
