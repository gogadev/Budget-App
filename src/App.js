import React from "react";

import Navbar from "./components/navbar/Navbar";
import Balance from "./components/balance/Balance";
import AddTransaction from "./components/add-transaction/AddTransaction";
import IncomeList from "./components/income-list/IncomeList";
import ExpenseList from "./components/expense-list/ExpenseList";

import { GlobalContextProvider } from "./context/GlobalState";

import "./App.css";

const App = () => {
  return (
    <GlobalContextProvider>
      <div className="wrapper">
        <Navbar />
        <Balance />
        <AddTransaction />
        <IncomeList />
        <ExpenseList />
      </div>
    </GlobalContextProvider>
  );
};

export default App;
