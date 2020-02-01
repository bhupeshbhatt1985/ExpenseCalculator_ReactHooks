import React from 'react'
import { MdSend } from 'react-icons/md'
const ExpenseForm = ({ name, amount, handleNameChange, handleAmountChange, handleSubmit, edit }) => {
    const buttonText = edit ? "Edit" : "Submit"


    return (

        <form onSubmit={handleSubmit}>
            <div className="form-center">
                <div className="form-group">
                    <label htmlFor="name">name</label>
                    <input type="text" className="form-control" id="name" name="name" placeholder="e.g. rent" value={name} onChange={handleNameChange}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="amount">amount</label>
                    <input type="text" className="form-control" id="amount" name="amount" placeholder="e.g. 100" value={amount} onChange={handleAmountChange}></input>
                </div>
            </div>
            <button type="submit" className="btn">{buttonText}<MdSend className="btn-icon" /></button>




        </form>
    )
}

export default ExpenseForm

