import {
  BarChart,
  LineChart,
  AxisSubDomain,
  AxisDirection,
  FixedTickPosition,
  GaugeContainer,
  PieChart
} from "@/components/charts";
import { Card, Box, CardCover, CardContent, Typography } from "@mui/joy";

export default function Home() {
  return (
    <Box
      component="ul"
      sx={{
        display: "flex",
        gap: 2,
        flexWrap: "wrap",
        p: 0,
        m: 0,
        padding: "10px",
        flex: 1,
      }}
    >
      <Card component="li" sx={{ minWidth: 450, minHeight: 350 }}>
        <CardCover sx={{ display: 'flex', justifyContent:'center', alignItems: 'center'}}>
          <BarChart />
        </CardCover>
      </Card>
      <Card component="li" sx={{ minWidth: 450, minHeight: 350 }}>
        <CardCover sx={{ display: 'flex', justifyContent:'center', alignItems: 'center'}}>
          <LineChart />
        </CardCover>
      </Card>
      <Card component="li" sx={{ minWidth: 450, minHeight: 350 }}>
        <CardCover sx={{ display: 'flex', justifyContent:'center', alignItems: 'center'}}>
          <AxisSubDomain />
        </CardCover>
      </Card>
      <Card component="li" sx={{ minWidth: 450, minHeight: 350 }}>
        <CardCover sx={{ display: 'flex', justifyContent:'center', alignItems: 'center'}}>
          <AxisDirection />
        </CardCover>
      </Card>
      <Card component="li" sx={{ minWidth: 450, minHeight: 350 }}>
        <CardCover sx={{ display: 'flex', justifyContent:'center', alignItems: 'center'}}>
          <FixedTickPosition />
        </CardCover>
      </Card>
      <Card component="li" sx={{ minWidth: 450, minHeight: 350,  }}>
        <CardCover sx={{ display: 'flex', justifyContent:'center', alignItems: 'center'}}>
          <GaugeContainer />
        </CardCover>
      </Card>
      <Card component="li" sx={{ minWidth: 450, minHeight: 350,  }}>
        <CardCover sx={{ display: 'flex', justifyContent:'center', alignItems: 'center'}}>
          <PieChart />
        </CardCover>
      </Card>
    </Box>
  );
}
