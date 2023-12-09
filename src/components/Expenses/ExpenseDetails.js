import ExpenseDate from './ExpenseDate';
import Card from "../UI/Card";
import './ExpenseItem.css';
import React, { useState } from 'react';

const ExpenseDetails = (props) => {
    const [title, setTitle] = useState(props.title);
    console.log('ExpenseDetails Evaluated by React')

    const clickHandler = () => {
        setTitle('100$!');
        console.log(title)

        // console.log('Expense deleted!!!');
        // Remove the expense from the DOM
        // const removeExpense = document.querySelector('.expense-item');
        // removeExpense.remove();
    };

    return (
        <Card className="expense-item">
            <div className="expense-item__description">
                <ExpenseDate date={props.date} />
                <h2>{title}</h2>
                <div className="expense-item__price">${props.amount}</div>
                <button onClick={clickHandler}>Delete Expense</button>
            </div>
        </Card>
    )  
}
export default ExpenseDetails;