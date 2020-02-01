import React from 'react'
import Item from './ExpenseItem'
import {MdDelete} from 'react-icons/md'

const ExpenseList = ({ expenses , handleCancelAll , handleCancel, handleEdit}) => {
    return (
        <>
            <ul className="list">
                {
                    expenses.map(expense => {
                        return < Item key={expense.id} expense={expense} handleCancel={handleCancel} handleEdit={handleEdit} />
                    })

                }
            </ul>
            {expenses.length > 0 && 
            <button className="btn" onClick={handleCancelAll}>Cancel <MdDelete className="btn-icon" /></button>}
        </>
    )
}

export default ExpenseList
