import React, { useState } from 'react';
import './ExpenseForm.css'

const ExpenseForm = () => {
    const [enteredTitle, setEnteredTitle] = useState('');

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };

    const amountChangeHandler = event => {};

    const dateChangeHandler = event => {};

    return <form>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type='text' onChange={titleChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type='number' onChange={amountChangeHandler} min="0.01" step="0.01" />
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type='date' onChange={dateChangeHandler} min="2021-01-01" max="2022-12-31"/>
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
        </div>
    </form>
};

export default ExpenseForm;