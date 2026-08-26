import { useState } from 'react'
import './App.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { IncomeExpensesLine, SavingsInvestmentsLine } from './charts'
import { MonthlyDonut } from './charts'
import { CurrentMonthExpensesTest, IncomeExpenseTrendTest } from './TestData'
import { CurrentLastTest } from './TestData'
import { CurrentMonthIncomeTest } from './TestData'
import { SavingsInvestmentsTrendTest } from './TestData'
import { IncomeAndExpenses, SavingsAndInvestments } from './HomeFunctions';

// ----- TEST DATA ----- //
let currentMonth = "July";

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
// ---------- //

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
              <IncomeAndExpenses></IncomeAndExpenses>
              <SavingsAndInvestments></SavingsAndInvestments>
            </div>
          </div>

          <div className="modal fade" id="addExpenseModal" tabindex="-1" aria-labelledby="addExpenseModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title fs-5" id="addExpenseModalLabel">Add Expense</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  <form>
                    <div className='mb-3'>
                      <label for='expenseName' className='form-label'>Name</label>
                      <input type='text' className='form-control' id='expenseName' aria-describedby='expenseNameHelp'></input>
                      <div id='expenseNameHelp' className='form-text'>Add a name to this expense</div>
                    </div>
                    <div className='mb-3'>
                      <label for='expenseType' className='form-label'>Type</label>
                      <input type='text' className='form-control' id='expenseType' aria-describedby='expenseTypeHelp'></input>
                      <div id='expenseTypeHelp' className='form-text'>Select Expense Type (i.e. Gas, Incidentals, Bills, etc.)</div>
                    </div>
                    <div className='mb-3'>
                      <label for='expenseAmount' className='form-label'>Amount</label>
                      <input type='text' className='form-control' id='expenseAmount' aria-describedby='expenseAmountHelp'></input>
                      <div id='expenseAmountHelp' className='form-text'>Input total amount spent on expense (i.e. 3.50)</div>
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" className="btn btn-primary">Save changes</button> 
                </div>
              </div>
            </div>
          </div>

          <div className="modal fade" id="addIncomeModal" tabindex="-1" aria-labelledby="addIncomeModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title fs-5" id="addIncomeModalLabel">Add Income</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  This is where income is added:
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" className="btn btn-primary">Save changes</button> 
                </div>
              </div>
            </div>
          </div>

          <div className="modal fade" id="addSavingsModal" tabindex="-1" aria-labelledby="addSavingsModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title fs-5" id="addSavingsModalLabel">Add Savings Contributions</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  This is where savings contributions are added:
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" className="btn btn-primary">Save changes</button> 
                </div>
              </div>
            </div>
          </div>

          <div className="modal fade" id="addInvestmentsModal" tabindex="-1" aria-labelledby="addInvestmentsModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title fs-5" id="addInvestmentsModalLabel">Add Investments</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  This is where investments contributions are added:
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" className="btn btn-primary">Save changes</button> 
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
