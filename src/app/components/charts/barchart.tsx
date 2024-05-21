import React, { useState } from 'react';
import Chart from 'react-apexcharts';
import { MenuItem, FormControl, Select } from '@mui/material';

export default function ChartsOverviewDemo() {
  const [timeframe, setTimeframe] = useState('monthly');

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setTimeframe(event.target.value as string);
  };

  const series = [
    {
      name: 'Earning',
      data: [2500, 10000, 20000, 15000, 25000, 15000, 25000, 20000, 5000, 10000, 20000, 25000],
    },
  ];

  const options: ApexCharts.ApexOptions = {
    chart: {
      type: 'bar',
      height: 290,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: false,
        columnWidth: '60%',
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
      ],
    },
    fill: {
      colors: ['#00AA00'],
    },
    yaxis: {
      labels: {
        formatter: (val) => `${val / 1000}k`,
      },
    },
    grid: {
      show: false,
    },
  };

  return (
    <div className="bg-white p-4 w-[100%] relative">
      <div className="absolute right-4 top-4 z-[1000]">
        <FormControl variant="standard" size="small">
          <Select
            labelId="timeframe-select-label"
            value={timeframe}
            label="Timeframe"
          >
            <MenuItem value="daily">Daily</MenuItem>
            <MenuItem value="monthly">Monthly</MenuItem>
            <MenuItem value="yearly">Yearly</MenuItem>
          </Select>
        </FormControl>
      </div>
      <Chart options={options} series={series} type="bar" height={290} />
    </div>
  );
}
