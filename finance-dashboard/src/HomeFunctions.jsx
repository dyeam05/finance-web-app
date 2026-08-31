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

// Income List Display
export function IncomeList() {
    return (
        <p>This is a test</p>
    );
}

// Income Donut Graph
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
                        <button type="button" className="btn btn-outline-secondary ms-3" 
                        onClick={() => setIncomeView(!incomeView)} data-bs-toggle='tooltip' data-bs-placement='bottom'
                        title={`${incomeView ? "View Income Source List" : "View Income Totals Donut"}`}>
                            <i className={`bi ${incomeView ? 'bi-card-list' : 'bi-graph-up'}`}></i>
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

// Expense Donut Graph
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

// Expense List Display
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
                        <button type='button' className="btn btn-outline-secondary ms-3"
                            onClick={() => setExpenseView(!expenseView)} data-bs-toggle='tooltip' data-bs-placement='bottom'
                            title={`${expenseView ? 'View Full Expense List' : 'View Expense Totals Donut'}`}>
                            <i className={`bi ${expenseView ? 'bi-card-list' : 'bi-graph-up'}`}></i>
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

export function DynamicForm() {
    const [inputFields, setInputFields] = useState([{value: ''}]);

    // Handle input change
    const handleInputChange = (index, event) => {
        const values = [...inputFields];
        values[index].value = event.target.value;
        setInputFields(values);
    };

    // Add new field
    const handleAddFields = () => {
        setInputFields([...inputFields, { value: ''}]);
    };

    // Remove field
    const handleRemoveFields = index => {
        const values = [...inputFields];
        values.splice(index, 1);
        setInputFields(values);
    };

    // Handle form submission
    const handleSubmit = e => {
        e.preventDefault();
        console.log('Form Values:', inputFields);
    };

    return (
        <form onSubmit={handleSubmit}>
            {inputFields.map((inputField, index) => (
                <div className='row'>
                    <div className='col mb-3'>
                        <label for='expenseName' className='form-label'>Name</label>
                        <input type='text' className='form-control' id='expenseName' aria-describedby='expenseNameHelp'></input>
                        <div id='expenseNameHelp' className='form-text'>Add a name to this expense</div>
                    </div>
                    <div className='col mb-3'>
                        <label for='expenseType' className='form-label'>Type</label>
                        <input type='text' className='form-control' id='expenseType' aria-describedby='expenseTypeHelp'></input>
                        <div id='expenseTypeHelp' className='form-text'>Select Expense Type (i.e. Gas, Incidentals, Bills, etc.)</div>
                    </div>
                    <div className='col mb-3'>
                        <label for='expenseAmount' className='form-label'>Amount</label>
                        <input type='text' className='form-control' id='expenseAmount' aria-describedby='expenseAmountHelp'></input>
                        <div id='expenseAmountHelp' className='form-text'>Input total amount spent on expense (i.e. 3.50)</div>
                    </div>
                    <div className='col mb-3 align-content-center col-auto'>
                        <button type='button mb-3' className='btn btn-sm btn-outline-secondary col-auto h-auto' onClick={handleAddFields}>
                            <i className='bi bi-plus-circle'></i>
                        </button>
                        <button type='button mb-3' className='btn btn-sm btn-outline-danger col-auto h-auto' onClick={handleRemoveFields}>
                            <i className='bi bi-x-circle'></i>
                        </button>
                     </div>
                </div>
            ))}
        </form>
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
