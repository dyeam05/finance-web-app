import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { IncomeExpensesLine, SavingsInvestmentsLine } from './charts'
import { MonthlyDonut } from './charts'
import { CurrentMonthExpensesTest, IncomeExpenseTrendTest } from './TestData'
import { CurrentLastTest } from './TestData'
import { CurrentMonthIncomeTest } from './TestData'
import { SavingsInvestmentsTrendTest } from './TestData'

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
        <h1 className="display-5 text-center mt-5">Personal Finance Dashboard</h1>

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
                <div className="col">
                  <div className="d-flex flex-column justify-content-center">
                    <h3 className="text-center">
                      Total Expenses:
                      <p className="text-danger">${currentMonthExpenseTotal} 
                      <button type='button' className="btn btn-outline-secondary ms-3">
                        <i className='bi bi-info-circle'></i>
                      </button></p>
                    </h3>
                    <button type="button" className="btn btn-outline-secondary">
                      <i className="bi bi-plus-lg"></i>
                      Add Expense
                    </button>
                  </div>
                  <div className="donut-holder">
                    < MonthlyDonut
                        labels={CurrentMonthExpensesTest.map((data) => data.Type)}
                        labelTitle={'Money Spent '}
                        dataValues={CurrentMonthExpensesTest.map((data) => data.Amount)} />
                  </div>
                </div>
                <div className="col justify-content-center">
                  <div className="d-flex flex-column justify-content-center">
                    <h3 className="text-center">
                      Total Income:
                      <p className="text-success">${currentMonthIncomeTotal}
                        <button type="button" className="btn btn-outline-secondary ms-3">
                          <i className="bi bi-info-circle"></i>
                        </button>
                      </p>
                    </h3>
                    <button type="button" className="btn btn-outline-secondary">
                      <i className="bi bi-plus-lg"></i>
                      Add Income
                    </button>
                  </div>
                  <div className="donut-holder">
                    < MonthlyDonut 
                        labels={CurrentMonthIncomeTest.map((data) => data.Type)}
                        labelTitle={'Money Made '}
                        dataValues={CurrentMonthIncomeTest.map((data) => data.Amount)} />
                  </div>
                </div>
              </div>
              <div className="row mt-4">
                <h3 className="text-center">Savings and Investments:</h3>
                <div className='col'>
                  <div className="d-flex flex-column justify-content-center">
                    <h3 className="text-center">
                      Total Saved:
                      <p className="text-success">${currentMonthExpenseTotal}</p>
                    </h3>
                    <button type="button" className="btn btn-outline-secondary">
                      <i className="bi bi-plus-lg"></i>
                      Add Savings Contribution
                    </button>
                  </div>

                </div>
                <div className='col'>
                  <div className="d-flex flex-column justify-content-center">
                    <h3 className="text-center">
                      Total Invested:
                      <p className="text-success">${currentMonthExpenseTotal}</p>
                    </h3>
                    <button type="button" className="btn btn-outline-secondary">
                      <i className="bi bi-plus-lg"></i>
                      Add Investing Contribution
                    </button>
                  </div>

                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <div className="d-flex justify-content-between">
                <button type="button" className="btn btn-outline-secondary">
                  <i className="bi bi-arrow-left"></i>
                </button>
                <h2 className="text-center">YTD (2026):</h2>
                <button type="button" className="btn btn-outline-secondary">
                  <i className="bi bi-arrow-right"></i>
                </button>
              </div>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col">
                  <h3 className="text-center">
                    Average Monthly Expenses:
                    <p className="text-danger">${currentMonthExpenseTotal}</p>
                  </h3>
                  <div className="donut-holder">
                    < MonthlyDonut
                        labels={CurrentMonthExpensesTest.map((data) => data.Type)}
                        labelTitle={'Money Spent '}
                        dataValues={CurrentMonthExpensesTest.map((data) => data.Amount)} />
                  </div>
                </div>
                <div className="col">
                  <h3 className="text-center">
                    Average Monthly Income:
                    <p className="text-success">${currentMonthIncomeTotal}</p>
                  </h3>
                  <div className="donut-holder">
                    < MonthlyDonut 
                        labels={CurrentMonthIncomeTest.map((data) => data.Type)}
                        labelTitle={'Money Made '}
                        dataValues={CurrentMonthIncomeTest.map((data) => data.Amount)} />
                  </div>
                </div>
              </div>

              <div className="row-md-4 mt-5">
                <h3 className="text-center">Income Vs. Expenses</h3>
                <div className="line-holder">
                  < IncomeExpensesLine
                    labels={IncomeExpenseTrendTest.map((data) => data.Month)}
                    incomeData={IncomeExpenseTrendTest.map((data) => data.Income)}
                    expensesData={IncomeExpenseTrendTest.map((data) => data.Expenses)}
                    />
                </div>
              </div>

              <div className="row-md-4 mt-5">
                <h3 className="text-center">Savings and Investments:</h3>
                <div className="line-holder">
                  < SavingsInvestmentsLine
                      labels={SavingsInvestmentsTrendTest.map((data) => data.Month)}
                      investmentsData={SavingsInvestmentsTrendTest.map((data) => data.InvestAmount)}
                      savingsData={SavingsInvestmentsTrendTest.map((data) => data.SavingsAmount)}
                    />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

  );
}

export default App
