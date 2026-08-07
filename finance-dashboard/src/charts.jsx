import React from 'react';
import { Doughnut, Line, Bar } from 'react-chartjs-2';
import 'chart.js/auto'; 
import { CurrentMonthExpensesTest } from './TestData';

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

export function TwoMonthComparisonBar({currentMonth, lastMonth}) {
  const config = {
    type: 'bar'
  };

  const chartData = {
    labels: '$ Amount',
    datasets: [
      {
        label: 'Current Month Amount',
        data: [currentMonth, lastMonth]
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
        text:'Last Month Vs Current Month'
      }
    }
  };

  return <Bar data={chartData} options={options} />
}

export function IncomeExpensesLine({labels, incomeData, expensesData}) {
  const config = {
    type: 'line'
  };

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'Monthly Income',
        data: incomeData
      },
      {
        label: 'Monthly Expenses',
        data: expensesData
      }
    ]
  };
  
  const options = {
    responsive: true,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    stacked: false,
    plugins: {
        title: {
          display: true,
          text: 'Monthly Income Vs Spending Line Chart'
        }
    },
    scales: {
      y: {
        beginAtZero: true
      },
    },
  };

  return <Line data={chartData} options={options} />
}

export function SavingsInvestmentsLine({labels, savingsData, investmentsData}) {

  const totalAmount = savingsData.map((num, idx) => num + investmentsData[idx]);

  const config = {
    type: 'line'
  };

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'Money Invested',
        data: investmentsData
      },
      {
        label: 'Money Saved',
        data: savingsData
      },
      {
        label: 'Total',
        data: totalAmount
      }
    ]
  };

  const options = {
    responsive: true,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    stacked: false,
    plugins: {
        title: {
          display: true,
          text: 'Investments and Savings Line Chart'
        }
    },
    scales: {
      y: {
        beginAtZero: true
      },
    },
  };

  return <Line data={chartData} options={options} />
};

