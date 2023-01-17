import React, { useState } from 'react';

import './Expenses.css';
import '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import ExpensesList from './ExpensesList';



const Expenses = (props) => {
    const [filteredyear, setFilteredYear] = useState('2020');
    const filterChangeHandler = selectedyear => {
        setFilteredYear(selectedyear)
        // console.log('Expenses.js');
        // console.log(selectedyear);
    };

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredyear
    })
    
    return (
        <div>

            <Card className="expenses">
                <ExpensesFilter selected={filteredyear}
                 onChangeFilter={filterChangeHandler} 
                 />
                <ExpensesList items={filteredExpenses}/>
                
                {/* {filteredExpenses.length === 0 && <p>No expenses found
                </p> }
                {filteredExpenses.length>  0 &&
                } */}



            </Card>


        </div>
    )
}
export default Expenses;