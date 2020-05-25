import React, { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";

import { GlobalContext } from "../../context/GlobalState";

import "./add-transaction.style.css";

const AddTransaction = () => {
  const { addIncome, addExpense } = useContext(GlobalContext);
  
  const [income, setIncome] = useState({
    incomeText: "",
    incomeAmount: 0,
  });
  const [expense, setExpense] = useState({
    incomeText: "",
    incomeAmount: 0,
  });

  // Income
  const { incomeText, incomeAmount } = income;

  const onSubmitIncome = (e) => {
    e.preventDefault();

    if (incomeText !== "") {
      const newIncomeTransaction = {
        id: uuidv4(),
        incomeText,
        incomeAmount: incomeAmount * 1,
      };
      addIncome(newIncomeTransaction);

      setIncome({
        incomeText: "",
        incomeAmount: 0,
      });
    }
  };

  const onChangeIncome = (e) => {
    setIncome({ ...income, [e.target.name]: e.target.value });
  };

  // Expense
  const { expenseText, expenseAmount } = expense;

  const onSubmitExpense = (e) => {
    e.preventDefault();

    if (expenseText !== "") {
      const newExpenseTransaction = {
        id: uuidv4(),
        expenseText,
        expenseAmount: expenseAmount * 1,
      };
      addExpense(newExpenseTransaction);

      setExpense({
        expenseText: "",
        expenseAmount: 0,
      });
    }
  };

  const onChangeExpense = (e) => {
    setExpense({ ...expense, [e.target.name]: e.target.value });
  };

  return (
    <div className="form-container">
      <form onSubmit={onSubmitIncome} className="form">
        <div className="income">
          <input
            type="text"
            name="incomeText"
            value={incomeText}
            placeholder="Add Income..."
            autoComplete="off"
            onChange={onChangeIncome}
          />
          <input
            type="number"
            name="incomeAmount"
            value={incomeAmount}
            placeholder="Amount"
            autoComplete="off"
            onChange={onChangeIncome}
          />
          <button className="button" type="submit">Add Income</button>
        </div>
      </form>
      <form onSubmit={onSubmitExpense} className="form">
        <div className="expense">
          <input
            type="text"
            name="expenseText"
            value={expenseText}
            onChange={onChangeExpense}
            placeholder="Add Expense..."
            autoComplete="off"
          />
          <input
            type="number"
            name="expenseAmount"
            value={expenseAmount}
            onChange={onChangeExpense}
            placeholder="Amount"
            autoComplete="off"
          />
          <button className="button" type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
};

export default AddTransaction;
