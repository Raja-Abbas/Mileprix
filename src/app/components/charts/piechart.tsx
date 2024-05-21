import React from 'react';
import Chart from 'react-apexcharts';

export default function PieActiveArc() {
  const series = [10, 15, 20]; // Data values for the pie chart
  const labels = ['series A', 'series B', 'series C']; // Labels for each data value

  const options: ApexCharts.ApexOptions = {
    chart: {
      type: 'donut', // Use 'donut' for inner radius
      height: 290,
    },
    labels: labels,
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: 'bottom'
        }
      }
    }],
    plotOptions: {
      pie: {
        donut: {
          size: '60%', // Adjust this for innerRadius equivalent
          labels: {
            show: true,
            name: {
              show: true,
              fontSize: '22px',
            },
            value: {
              show: true,
              fontSize: '16px',
              formatter: (val) => `${val}`,
            },
            total: {
              show: true,
              showAlways: true,
              label: 'Drivers',
              formatter: function (w: ApexCharts.W) {
                return w.globals.seriesTotals.reduce((a, b) => a + b, 0);
              }
            }
          }
        },
        expandOnClick: true, // Allows arc to expand on click
      },
    },
    fill: {
      opacity: 1,
    },
    stroke: {
      width: 1,
      colors: ['#fff'],
    },
    legend: {
      position: 'bottom',
      offsetY: 0,
    },
    dataLabels: {
      enabled: false,
      formatter: function (val, opts) {
        return opts.w.globals.labels[opts.seriesIndex] + ": " + val;
      }
    },
  };

  return (
    <div className="bg-white p-4 w-[100%] inline-flex flex-col">
      <Chart options={options} series={series} type="donut" height={290} />
    </div>
  );
}
