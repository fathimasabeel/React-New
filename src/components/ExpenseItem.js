import ExpenseDetails from './ExpenseDetails'
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem(props){
    return (
        <div>
            <ExpenseDate date ={props.date} />
            <ExpenseDetails amount={props.amount}  
                            locationOfExpenditure={props.locationOfExpenditure}   
                            title={props.title}
            />
        </div>
    )
}

export default ExpenseItem;

