import Counter from "./counter"
import StatCard from "./statCard"
import { Container, Grid, SimpleGrid} from '@mantine/core';
import Cravings from "./Cravings";


const style = {
  padding: '1rem',
  margin: '1rem',
  boxShadow: '1px 1px 1px gray'
}


export default function LeadGrid() {
  const mockData = [
    {
      label: "Lung Capacity",
      stats: "10,000",
      progress: 80,
      color: "green",
      icon: 'up' as const, // Use 'up' as const
    },
    {
      label: "Disease Risk",
      stats: "5,000",
      progress: 50,
      color: "red",
      icon: 'down' as const, // Use 'down' as const
    }
  ];
  
  
  // const theme = useMantineTheme();

  return (
    <Container my="md">
      <SimpleGrid cols={2} spacing="md" breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        <div style={style}>
        <Counter />
        </div>
        <Grid gutter="md">
          <Grid.Col span={10}>
            <StatCard data = {mockData}/>
          </Grid.Col>
          <Grid.Col>
            {/* <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} /> */}
          </Grid.Col>
          <Grid.Col span={6}>
            {/* <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} /> */}
            <Cravings/>
          </Grid.Col>
        </Grid>
      </SimpleGrid>
    </Container>
  );
}