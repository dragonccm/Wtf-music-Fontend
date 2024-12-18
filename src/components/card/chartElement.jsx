import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { LineChart } from '@mui/x-charts/LineChart';
export default function ChartElement(series, xAxis) {

  return (
    <Card variant="outlined" sx={{ width: '100%' }}>
      <CardContent>
        <Typography component="h2" variant="subtitle2" gutterBottom>
          {"thống kê dữ liệu "}
        </Typography>
        <Stack sx={{ justifyContent: 'space-between' }}>
          <Stack
            direction="row"
            sx={{
              alignContent: { xs: 'center', sm: 'flex-start' },
              alignItems: 'center',
              gap: 1,
            }}
          >
          </Stack>
        </Stack>
        
        <LineChart
          borderRadius={8}
          xAxis={xAxis.xAxis}
          // yAxis={[{
          //   colorMap: {
          //     type: 'piecewise',
          //     thresholds: [0, 10, 20],
          //     colors: ['red', '#000', 'blue'],
          //   }
          // }]}
          series={series.series}
          height={250}
          margin={{ left: 50, right: 0, top: 20, bottom: 20 }}
          // grid={{ horizontal: true }}
          // slotProps={{
          //   legend: {
          //     hidden: true,
          //   },
          // }}
        />
      </CardContent>
    </Card>
  );
}