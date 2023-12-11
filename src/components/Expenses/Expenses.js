// import ExpenseItem from "./ExpenseItem";
import ExpenseDetails from './ExpenseDetails';
import Card from '../UI/Card';
import './Expenses.css';
import { useState } from 'react';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2023')

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear)
    }
    return (
        <Card className="expenses">  
            {/* {props.items.map((expense) => (
                <ExpenseDetails
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                    locationOfExpenditure={expense.locationOfExpenditure} 
                />
            ))} */}
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
            <ExpenseDetails
                title = {props.items[0].title}
                amount = {props.items[0].amount}
                date = {props.items[0].date}
            />
            <ExpenseDetails
                title = {props.items[1].title}
                amount = {props.items[1].amount}
                date = {props.items[1].date}
            />
            <ExpenseDetails
                title = {props.items[2].title}
                amount = {props.items[2].amount}
                date = {props.items[2].date}
            />
            <ExpenseDetails
                title = {props.items[3].title}
                amount = {props.items[3].amount}
                date = {props.items[3].date}
            />
        </Card>
  
    )
}

export default Expenses;