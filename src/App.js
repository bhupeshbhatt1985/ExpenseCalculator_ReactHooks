import React, { useState } from 'react';
import './App.css';
import Alert from './Components/Alert'
import ExpenseForm from './Components/ExpenseForm'
import ExpenseList from './Components/ExpenseList'
import uuid from 'uuid/v4'

const initialExpense = [
  { id: uuid(), amount: 1000, name: 'rent' },
  { id: uuid(), amount: 2000, name: 'car' },
  { id: uuid(), amount: 3000, name: 'credit card' }
];



function App() {
  const [expenses, setExpenses] = useState(initialExpense)
  const [name, setName] = useState("")
  const [amount, setAmount] = useState("")
  const [alert, setAlert] = useState({ show: false })
  const [edit, setEdit] = useState(false)
  const [editId, setEditId] = useState()

  const handleAmountChange = (e) => {
    setAmount(e.target.value)

  }

  const handleNameChange = (e) => {
    setName(e.target.value)

  }

  const handleAlertChange = (type, text) => {
    setAlert({ show: true, type, text })
    setTimeout(() => {
      setAlert({ show: false })
    }, 7000)

  }

  const handleCancelAll = () => {
    setExpenses([])
    handleAlertChange("danger", "Cleared all expenses")
  }
  const handleEdit = (id) => {
    let tempExpense = expenses.find(expense => expense.id === id)
    setName(tempExpense.name)
    setAmount(tempExpense.amount)
    setEditId(id)
    setEdit(true)
  }

  const handleCancel = (id) => {
    let tempExpense = expenses.filter((expense) => {
      if (expense.id !== id)
        return expense
    })
    setExpenses(tempExpense)
    handleAlertChange("danger", "Deleted expense")
  }

  const handleSubmit = (e) => {

    e.preventDefault();
    if (name !== "" && amount > 0) {
      if (edit) {
        const tempExpense = expenses.map((expense) => {
          return expense.id === editId ? { ...expense, name, amount } : expense
        })
        setExpenses(tempExpense);
        setEdit(false)
      }
      else {
        const newExpense = { id: uuid(), amount, name }
        setExpenses([...expenses, newExpense]);
      }
      setAmount("")
      setName("")
      handleAlertChange("success", "expense is added successfully")
    }
    else {
      handleAlertChange("danger", "name should not be empty and amount should be greater than zero.")
    }

  }
  return (

    <>
      {alert.show && <Alert type={alert.type} text={alert.text} />}

      <h1>Expense Calculator</h1>
      <div className="App">
        <ExpenseForm
          name={name}
          amount={amount}
          handleAmountChange={handleAmountChange}
          handleNameChange={handleNameChange}
          handleSubmit={handleSubmit}
          edit={edit}
        />
        <ExpenseList expenses={expenses} handleCancelAll={handleCancelAll} handleCancel={handleCancel} handleEdit={handleEdit} />
      </div>
      <h1>Total Spending<span className="total"> {
        expenses.reduce((acc, curr) => {
          return (acc = acc + parseInt(curr.amount))
        }, 0)}
      </span></h1>

    </>
  );
}

export default App;
