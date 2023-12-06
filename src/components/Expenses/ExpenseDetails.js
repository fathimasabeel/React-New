import Card from "../UI/Card";
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

const ExpenseDetails = (props) => {
    return (
        <Card className="expense-item">
            {/* <ExpenseDate date ={props.date} /> */}
            <div className="expense-item__description">
                <ExpenseDate date ={props.date} />

                <div>Location: {props.locationOfExpenditure}</div>
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
        </Card>    
    )  
}
export default ExpenseDetails;