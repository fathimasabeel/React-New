import ExpenseDate from './ExpenseDate';
import Card from "../UI/Card";
import './ExpenseItem.css';


const ExpenseDetails = (props) => {
    const clickHandler = () => {
        console.log('Expense deleted!!!');
        // Remove the expense from the DOM
        const removeExpense = document.querySelector('.expense-item');
        removeExpense.remove();
    }
    return (
        <Card className="expense-item">
            <div className="expense-item__description">
                <ExpenseDate date={props.date} />
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
                <button onClick={clickHandler}>Delete Expense</button>
            </div>
        </Card>
    )  
}
export default ExpenseDetails;