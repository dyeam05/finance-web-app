import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BarChart } from './charts'
import { MonthlyDonut } from './charts'
import { CurrentMonthExpensesTest } from './TestData'
import { CurrentMonthIncomeTest } from './TestData'

// Using foreach for now as a test. Eventually, backend will calculate and send sum in data.
let currentMonthExpenseTotal = 0;
let currentMonthIncomeTotal = 0;

CurrentMonthExpensesTest.forEach((expenseType) => {
  currentMonthExpenseTotal += expenseType.Amount;
});

CurrentMonthIncomeTest.forEach((incomeType) => {
  currentMonthIncomeTotal += incomeType.Amount;
})

currentMonthExpenseTotal = currentMonthExpenseTotal.toFixed(2);
currentMonthIncomeTotal = currentMonthIncomeTotal.toFixed(2);


function App() {
  return (
    // Nav bar
    <div className="container-fluid">
      <div className="container">
        <h1 className="display-5 text-center mt-5">Personal Finances</h1>

        <div className="row mt-5">
          <div className="card mb-4">
            <div className="card-header">
              <div className="d-flex justify-content-between">
                <button type="button" className="btn btn-outline-secondary">
                  <i className="bi bi-arrow-left"></i>
                </button>
                <h2 className="text-center">Current Month</h2>
                <button type="button" className="btn btn-outline-secondary">
                  <i className="bi bi-arrow-right"></i>
                </button>
              </div>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col md-4">
                  <h3 className="text-center">
                    Total Expenses:
                    <p className="text-danger">${currentMonthExpenseTotal}</p>
                  </h3>
                  < MonthlyDonut
                      labels={CurrentMonthExpensesTest.map((data) => data.Type)}
                      labelTitle={'Money Spent '}
                      dataValues={CurrentMonthExpensesTest.map((data) => data.Amount)} />
                </div>
                <div className="col md-4">
                  <h3 className="text-center">
                    Total Income:
                    <p className="text-success">${currentMonthIncomeTotal}</p>
                  </h3>
                  < MonthlyDonut 
                      labels={CurrentMonthIncomeTest.map((data) => data.Type)}
                      labelTitle={'Money Made '}
                      dataValues={CurrentMonthIncomeTest.map((data) => data.Amount)} />
                </div>
              </div>
              <div className="row">
                <h3 className="text-center">Savings and Investments:</h3>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <div className="d-flex justify-content-between">
                <button type="button" className="btn btn-outline-secondary">
                  <i className="bi bi-arrow-left"></i>
                </button>
                <h2 className="text-center">YTD Average (2026):</h2>
                <button type="button" className="btn btn-outline-secondary">
                  <i className="bi bi-arrow-right"></i>
                </button>
              </div>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col md-4">
                  <h3 className="text-center">
                    Total Expenses:
                    <p className="text-danger">${currentMonthExpenseTotal}</p>
                  </h3>
                  < MonthlyDonut
                      labels={CurrentMonthExpensesTest.map((data) => data.Type)}
                      labelTitle={'Money Spent '}
                      dataValues={CurrentMonthExpensesTest.map((data) => data.Amount)} />
                </div>
                <div className="col md-4">
                  <h3 className="text-center">
                    Total Income:
                    <p className="text-success">${currentMonthIncomeTotal}</p>
                  </h3>
                  < MonthlyDonut 
                      labels={CurrentMonthIncomeTest.map((data) => data.Type)}
                      labelTitle={'Money Made '}
                      dataValues={CurrentMonthIncomeTest.map((data) => data.Amount)} />
                </div>
              </div>
              <div className="row">
                <h3 className="text-center">Savings and Investments:</h3>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

  );
}

export default App
