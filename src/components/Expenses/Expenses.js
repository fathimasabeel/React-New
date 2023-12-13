// import ExpenseItem from "./ExpenseItem";
// import ExpenseDetails from './ExpenseDetails';
import Card from '../UI/Card';
import './Expenses.css';
import { useState } from 'react';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2023')

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear)
    }
    const filterExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <div>
            <Card className="expenses">  
                <ExpensesFilter 
                    selected={filteredYear} 
                    onChangeFilter={filterChangeHandler}
                />           
                <ExpensesList items={filterExpenses}/>
            </Card>
        </div>
  
    )
}

export default Expenses;