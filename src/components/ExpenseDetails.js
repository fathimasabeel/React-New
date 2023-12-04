function ExpenseDetails(props){
    return (
        <div className="expense-item">
            {/* <div>
                <div>Location: {props.locationOfExpenditure}</div>
            </div>
            <div>
                <div className="expense-item__description">
                    <h2>{props.title}</h2>
                    <div className="expense-item__price">${props.amount}</div>
                </div>
            </div> */}
            <div className="expense-item__price">${props.amount}</div>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
            </div>

            <div>Location: {props.locationOfExpenditure}</div>

        </div>    
    )  
}
export default ExpenseDetails;