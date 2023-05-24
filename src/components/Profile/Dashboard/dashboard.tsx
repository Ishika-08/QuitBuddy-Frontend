import Counter from "./counter"
import StatCard from "./statCard"
import { Container, Grid, SimpleGrid, Skeleton, useMantineTheme, rem } from '@mantine/core';

const PRIMARY_COL_HEIGHT = rem(600);

export default function LeadGrid() {
  const mockData = [
    {
      label: "Lung Capacity",
      stats: "10,000",
      progress: 80,
      color: "green",
      icon: "up",
    },
    {
      label: "Disease Risk",
      stats: "5,000",
      progress: 50,
      color: "red",
      icon: "down",
    }
  ];
  
  const theme = useMantineTheme();
  const SECONDARY_COL_HEIGHT = rem(300);

  return (
    <Container my="md" width={rem(300)}>
      <SimpleGrid cols={2} spacing="md" breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        <Counter />
        <Grid gutter="md">
          <Grid.Col span={10}>
            <StatCard data = {mockData}/>
          </Grid.Col>
          <Grid.Col>
            {/* <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} /> */}
          </Grid.Col>
          <Grid.Col span={6}>
            <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} />
          </Grid.Col>
        </Grid>
      </SimpleGrid>
    </Container>
  );
}