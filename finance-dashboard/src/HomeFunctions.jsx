import React from 'react';
import { useState } from 'react'
import './App.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { IncomeExpensesLine, SavingsInvestmentsLine } from './charts'
import { MonthlyDonut } from './charts'
import { CurrentMonthExpensesTest, IncomeExpenseTrendTest } from './TestData'
import { CurrentLastTest } from './TestData'
import { CurrentMonthIncomeTest } from './TestData'
import { SavingsInvestmentsTrendTest } from './TestData'

// ----- TEST DATA ----- //
let currentMonth = "(Current Month)";

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

export function IncomeList() {
    return (
        <p>This is a test</p>
    );
}

export function IncomeDonut() {
    return (
        <div className="donut-holder">
            < MonthlyDonut
                labels={CurrentMonthIncomeTest.map((data) => data.Type)}
                labelTitle={'Money Made '}
                dataValues={CurrentMonthIncomeTest.map((data) => data.Amount)} />
        </div>
    );
}

// Top card income section
export function MonthlyIncome() {
    // incomeView state switches between donut and income list
    const [incomeView, setIncomeView] = useState(true);
    return (
        <div className="col justify-content-center">
            <div className="d-flex flex-column justify-content-center">
                <h3 className="text-center">
                    Total Income:
                    <p className="text-success">${currentMonthIncomeTotal}
                        <button type="button" className="btn btn-outline-secondary ms-3" onClick={() => setIncomeView(!incomeView)}>
                            <i className="bi bi-info-circle"></i>
                        </button>
                    </p>
                </h3>
                <button type="button" className="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#addIncomeModal">
                    <i className="bi bi-plus-lg"></i>
                    Add Income
                </button>
            </div>
            {incomeView ? <IncomeDonut /> : <IncomeList />}
        </div>
    );
}

export function ExpenseDonut() {
    return (
        <div className="donut-holder">
            < MonthlyDonut
                labels={CurrentMonthExpensesTest.map((data) => data.Type)}
                labelTitle={'Money Spent '}
                dataValues={CurrentMonthExpensesTest.map((data) => data.Amount)} />
        </div>
    );
}

export function ExpenseList() {
    return ( 
        <p>This is a test</p>
    );
}

// Top card expense section
export function MonthlyExpenses() {
    const [expenseView, setExpenseView] = useState(true);
    return (
        <div className="col">
            <div className="d-flex flex-column justify-content-center">
                <h3 className="text-center">
                    Total Expenses:
                    <p className="text-danger">${currentMonthExpenseTotal}
                        <button type='button' className="btn btn-outline-secondary ms-3" onClick={() => setExpenseView(!expenseView)}>
                            <i className='bi bi-info-circle'></i>
                        </button></p>
                </h3>
                <button type="button" className="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#addExpenseModal">
                    <i className="bi bi-plus-lg"></i>
                    Add Expense
                </button>
            </div>
            {expenseView ? <ExpenseDonut /> : <ExpenseList />}
        </div>
    );
}

// Shows main card expense and income information
export function IncomeAndExpenses() {
    return (
        <div className='card mb-4'>
            <div className='card-header'>
                <h3 className='text-center'>Income and Expenses</h3>
            </div>
            <div className='card-body'>
                <div className="row">
                    <MonthlyExpenses></MonthlyExpenses>
                    <MonthlyIncome></MonthlyIncome>
                </div>
            </div>
        </div>
    );
};

export function SavingsAndInvestments() {
    return (
        <div className='card mb-4'>
            <div className='card-header'>
                <h3 className='text-center'>Savings and Investments</h3>
            </div>
            <div className='card-body'>
                <div className="row mt-4">
                    <div className='col'>
                        <div className="d-flex flex-column justify-content-center">
                            <h3 className="text-center">
                                Total Saved:
                                <p className="text-success">${currentMonthExpenseTotal}</p>
                            </h3>
                            <h3 className="text-center">
                                {currentMonth} Contributions:
                                <p className="text-success">${currentMonthExpenseTotal}</p>
                            </h3>
                            <button type="button" className="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#addSavingsModal">
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
                            <h3 className='text-center'>
                                {currentMonth} Contributions:
                                <p className='text-success'>${currentMonthExpenseTotal}</p>
                            </h3>
                            <button type="button" className="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#addInvestmentsModal">
                                <i className="bi bi-plus-lg"></i>
                                Add Investing Contribution
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
