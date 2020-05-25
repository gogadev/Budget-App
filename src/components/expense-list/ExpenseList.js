import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";

const ExpenseList = () => {
  const { expenseTransactions, deleteTransaction } = useContext(GlobalContext);

  return (
    <div className="transactions">
      <h2 className="subtitle">Transaction History</h2>
      <h4>Expense</h4>
      <ul className="list">
        {expenseTransactions.map((expenseTransaction) => {
          return (
            <li key={expenseTransaction.id} className="transaction">
              <span className="text">{expenseTransaction.expenseText}</span>
              <span className="amount">
                ${expenseTransaction.expenseAmount}
              </span>
              <button
                className="delete fas fa-trash"
                onClick={() => deleteTransaction(expenseTransaction.id)}
              ></button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ExpenseList;
