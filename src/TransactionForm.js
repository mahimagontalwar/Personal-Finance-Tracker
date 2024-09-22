import React, { useState } from 'react';

function TransactionForm({ addTransaction }) {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('Income');

  const handleSubmit = (e) => {
    e.preventDefault();
     const transactionAmount = type === 'Income' ? +amount : -Math.abs(+amount);
    const newTransaction = {
      id: Date.now(),
      description,
      amount: transactionAmount,
      type,
    };
    addTransaction(newTransaction);
    setDescription('');
    setAmount('');
  };

  return (
    <div className="transaction-form">
      <h3>Add New Transaction</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="Income">Income</option>
          <option value="Expense">Expense</option>
        </select>
        <button type="submit">Add Transaction</button>
      </form>
    </div>
  );
}

export default TransactionForm;
