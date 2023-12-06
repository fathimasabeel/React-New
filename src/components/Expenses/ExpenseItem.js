import ExpenseDetails from './ExpenseDetails'
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
    return (
        <div>
            <ExpenseDate date ={props.date}/>
            <ExpenseDetails amount={props.amount}  
                            locationOfExpenditure={props.locationOfExpenditure}   
                            title={props.title}
            />
        </div>
        // <div className="expense-item">
        //     <ExpenseDate date ={props.date} />
        //     <div className="expense-item__description">
        //         <div className="expense-item__price">${props.amount}</div>
        //         <h2>{props.title}</h2>
        //         <div>Location: {props.locationOfExpenditure}</div>
        //     </div>
        // </div>    
    )
}

export default ExpenseItem;


