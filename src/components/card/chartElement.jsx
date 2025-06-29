import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import {
  areaElementClasses,
  LineChart,
  lineElementClasses,
} from "@mui/x-charts/LineChart";
import { axisClasses } from "@mui/x-charts/ChartsAxis";

export default function ChartElement(series, xAxis) {
  const colors = ["#465fff", "#EC407A"];

  return (
    <Card variant="outlined" sx={{ width: "100%" }}>
      <CardContent>
        {/* <Typography component="h2" variant="subtitle2" gutterBottom>
          {"Thống kê dữ liệu "}
        </Typography> */}
        <Stack sx={{ justifyContent: "space-between" }}>
          <Stack
            direction="row"
            sx={{
              alignContent: { xs: "center", sm: "flex-start" },
              alignItems: "center",
              gap: 1,
            }}
          ></Stack>
        </Stack>

        <LineChart
          borderRadius={8}
          xAxis={xAxis.xAxis}
          sx={{
            [`& .${lineElementClasses.root}`]: {
              strokeWidth: 2,
            },
            [`& .${areaElementClasses.root}`]: {
              fillOpacity: 0.3, // độ trong suốt của phần dưới line
            },
            [`& .${axisClasses.root}`]: {
              [`& .${axisClasses.tick}, & .${axisClasses.line}`]: {
                stroke: "#1d2939",
                strokeWidth: 2,
              },
              [`& .${axisClasses.tickLabel}`]: {
                fill: "#ffffff",
                fontWeight: 600,
              },
            },
            "& .MuiChartsLegend-root, & .MuiChartsTooltip-root, & text": {
              fill: "#ffffff !important", // màu chữ trắng cho tất cả text
            },
            border: "1px solid rgba(0, 0, 0, 0.1)",
            color: "#fff",
            backgroundSize: "35px 35px",
            backgroundPosition: "20px 20px, 20px 20px",
          }}
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
