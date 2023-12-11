import './ExpensesFilter.css';

const ExpensesFilter = (props) =>{
    const dropdownChangeHandler = (event) =>{
        props.onChangeFilter(event.target.value)
    }

    return(
        <div className='expense-filter'>
            <div className='expense-filter__controle'>
                <label>Filter by year</label>
                <select value={props.selected} onChange={dropdownChangeHandler}>
                    <option value='2024'>2024</option>
                    <option value='2024'>2023</option>
                    <option value='2024'>2022</option>
                    <option value='2024'>2021</option>
                    <option value='2024'>2020</option>
                </select>
            </div>
        </div>
    )
}
export default ExpensesFilter;