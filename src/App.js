import React, { useState } from 'react';
import Balance from './Balance';
import TransactionList from './TransactionList';
import TransactionForm from './TransactionForm';
import './App.css';

function App() {
  const [transactions, setTransactions] = useState([]);
   
  

  const addTransaction = (newTransaction) => {
    setTransactions([newTransaction, ...transactions]);
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter(transaction => transaction.id !== id));
  };

  return (
    <div className="container">
      <h1>Personal Finance Tracker</h1>
      <Balance transactions={transactions} />
      <TransactionForm addTransaction={addTransaction} />
      <TransactionList transactions={transactions} deleteTransaction={deleteTransaction} />
    </div>
  );
}

export default App;
