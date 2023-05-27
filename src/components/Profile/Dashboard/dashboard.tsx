import Counter from "./counter";
import StatCard from "./statCard";
import { Container, Grid, SimpleGrid } from '@mantine/core';
import Cravings from "./Cravings";
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

interface Userdata {
  username: string;
  email: string;
  perDayCount: number;
  cigarettesNotSmoked: number;
  lungCapacity?: number;
  diseaseRisk?: number;
}

const style = {
  padding: '1rem',
  margin: '1rem',
  boxShadow: '1px 1px 1px gray'
}

export default function LeadGrid() {
  const [Userdata, setUserdata] = useState<Partial<Userdata>>({});
  const { userID } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://geeks-for-geeks-health-backend.up.railway.app/${userID}/medicalData`
        );
        const data = await response.json();
        setUserdata(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [userID]);

  const mockData = [
    {
      label: "Lung Capacity",
      stats: `${Userdata.lungCapacity || 0} %`,
      progress: Userdata.lungCapacity || 0,
      color: "green",
      icon: Userdata.lungCapacity ? "up" : "down" as "up" | "down",
    },
    {
      label: "Disease Risk",
      stats: `${Userdata.diseaseRisk || 0} %`,
      progress: Userdata.diseaseRisk || 0,
      color: "red",
      icon: Userdata.diseaseRisk ? "up" : "down" as "up" | "down",
    }
  ];

  return (
    <Container my="md">
      <SimpleGrid cols={2} spacing="md" breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        <div style={style}>
          <Counter />
        </div>
        <Grid gutter="md">
          <Grid.Col span={10}>
            <StatCard data={mockData} />
          </Grid.Col>
          <Grid.Col>
            {/* <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} /> */}
          </Grid.Col>
          <Grid.Col span={6}>
            {/* <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} /> */}
            <Cravings />
          </Grid.Col>
        </Grid>
      </SimpleGrid>
    </Container>
  );
}
