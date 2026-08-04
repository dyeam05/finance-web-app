import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto'; 
import { CurrentMonthExpensesTest } from './TestData';

export const BarChart = () => {
  // 1. Define the structural data for the chart
  const chartData = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Monthly Sales ($)',
        data: [1200, 1900, 3000, 5000, 2400],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  // 2. Define optional configuration configurations
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Q1 & Q2 Performance Overview',
      },
    },
  };

  return (
    <div style={{ width: '600px', margin: '0 auto' }}>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export function MonthlyDonut({labels, labelTitle, dataValues}) {
    const config = {
        type: 'doughnut'
    };
    const chartData = {
        labels: labels,
        datasets: [
            {
                label: labelTitle,
                data: dataValues
            }
        ]
    };
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Expenses',
            },
        },
    };
    return <Doughnut data={chartData} options={options} />;
};

