import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";

import "./income-list.style.css";

import image from "../../assets/coins.jpg";
const IncomeList = () => {
  const { incomeTransactions, deleteTransaction } = useContext(GlobalContext);

  return (
    <div className="transactions">
      <div className="icon">
        {" "}
        <img className="image" src={image} alt="" />
      </div>
      <h2 className="subtitle">Transaction History</h2>
      <h4>Income</h4>
      <ul className="list">
        {incomeTransactions.map((incomeTransaction) => {
          return (
            <li key={incomeTransaction.id} className="transaction">
              <span className="text">{incomeTransaction.incomeText}</span>
              <span className="amount">${incomeTransaction.incomeAmount}</span>
              <button
                className="delete fas fa-trash"
                onClick={() => deleteTransaction(incomeTransaction.id)}
              ></button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default IncomeList;
