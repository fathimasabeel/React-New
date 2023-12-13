import ExpenseDetails from './ExpenseDetails';
import './ExpensesList.css';

const ExpensesList = (props) => {
    let expenseContent = null;

    if(props.items.length === 0){
        expenseContent = <h2 className='expenses-list__fallback'>Found no expense.</h2>        
    }
    else if(props.items.length === 1){
        expenseContent = (
            <div>
                {expenseContent = props.items.map((expense) => (
                    <ExpenseDetails
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />
                ))}
                <p className='expenses-list__fallback'>"Only single Expense here. Please add more..."</p>
            </div>
        );   
    }
    else{
        expenseContent = props.items.map((expense) => (
            <ExpenseDetails
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />
        ))
    }

    return (
        <div className='expenses-list'>
            {expenseContent}
        </div>
    )
}

export default ExpensesList;

