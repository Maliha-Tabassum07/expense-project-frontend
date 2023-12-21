import React, { useState } from 'react';
import './expense_page.css';

const ExpensePage = () => {
    const [newExpense, setNewExpense] = useState({
        expenseCategory: '',
        expenseName: '',
        description: '',
        date: '',
        amount: ''
    });

    const [expenses, setExpenses] = useState([
        {
            "expenseCategory": "Food",
            "expenseName": "Restaurant Bills",
            "description": "Restaurant Bill of birthday Party",
            "date": "2023-12-05",
            "amount": 602.45
        },
        {
            "expenseCategory": "Transport",
            "expenseName": "Bus Bills",
            "description": "Bus Bill of Home to Office",
            "date": "2023-12-05",
            "amount": 20
        }
    ]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewExpense((prevExpense) => ({
            ...prevExpense,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setNewExpense({
            expenseCategory: '',
            expenseName: '',
            description: '',
            date: '',
            amount: ''
        });

        const updatedExpenses = [...expenses, newExpense];
        setExpenses(updatedExpenses);
    };

    return (
        <div className="container">
            <h2>Expense Table</h2>
            <form onSubmit={handleSubmit} className="expense-form">
                <label>
                    Expense Category:
                    <select name="expenseCategory" onChange={handleChange}>
                        <option value="">Select Category</option>
                        <option value="Food">Food</option>
                    </select>
                </label>
                <label>
                    Expense Name:
                    <input type="text" name="expenseName" value={newExpense.expenseName} onChange={handleChange} />
                </label>
                <label>
                    Description:
                    <input type="text" name="description" value={newExpense.description} onChange={handleChange} />
                </label>
                <label>
                    Date:
                    <input type="date" name="date" value={newExpense.date} onChange={handleChange} />
                </label>
                <label>
                    Amount:
                    <input type="number" name="amount" value={newExpense.amount} onChange={handleChange} />
                </label>
                <button type="submit">Add Expense</button>
            </form>
            <table className="expense-table">
                <thead>
                    <tr>
                        <th>Expense Category</th>
                        <th>Expense Name</th>
                        <th>Description</th>
                        <th>Date</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {expenses.map((expense, index) => (
                        <tr key={index}>
                            <td>{expense.expenseCategory}</td>
                            <td>{expense.expenseName}</td>
                            <td>{expense.description}</td>
                            <td>{expense.date}</td>
                            <td>{expense.amount}$</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ExpensePage;
