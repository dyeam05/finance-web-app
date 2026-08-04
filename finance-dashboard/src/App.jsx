import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BarChart } from './charts'
import { MonthlyDonut } from './charts'
import { CurrentMonthExpensesTest } from './TestData'

function App() {
  return (
    // Nav bar
    
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Finance Dashboard</a>
        </div>
      </nav>

      <div className="container">
        <h1 className="display-5">Personal Finances</h1>

        <div className="row mt-5">
          <div className="card">
            <div className="card-header">
              <h2>Current Month</h2>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col md-6">
                  <h3>Total Expenses:</h3>
                  < MonthlyDonut
                      labels={CurrentMonthExpensesTest.map((data) => data.Type)}
                      labelTitle={'Money Spent '}
                      dataValues={CurrentMonthExpensesTest.map((data) => data.Amount)} />
                </div>
                <div className="col md-6">
                  <h3>Total Income:</h3>
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
