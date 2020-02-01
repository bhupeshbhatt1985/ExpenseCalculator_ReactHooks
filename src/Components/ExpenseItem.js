import React from 'react'
import { MdEdit, MdDelete } from 'react-icons/md'

function ExpenseItem({ expense, handleCancel, handleEdit }) {
    const { id, name, amount } = expense
    return (
        <li className="item">
            <div className="info">
                <span className="expense">{name}</span>
                <span className="amount">{amount}</span>
            </div>
            <div>
                <button className="edit-btn" aria-label="edit" onClick={()=>handleEdit(id)} ><MdEdit /></button>
                <button className="clear-btn" aria-label="delete" onClick={()=>handleCancel(id)}><MdDelete /></button>
            </div>
        </li>

    )
}

export default ExpenseItem

