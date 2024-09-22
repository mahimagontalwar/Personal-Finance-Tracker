import React from 'react';

function TransactionItem({ transaction, deleteTransaction }) {
  return (
    <li>
      <span>{transaction.description}</span>
      <span>{transaction.type}</span>
      <span>{transaction.amount < 0 ? '-' : '+'}${Math.abs(transaction.amount)}</span>
      <button onClick={() => deleteTransaction(transaction.id)}>X</button>
    </li>
  );
}

export default TransactionItem;
