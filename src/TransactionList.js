import React from 'react';
import TransactionItem from './TransactionItem';

function TransactionList({ transactions, deleteTransaction }) {
  return (
    <div className="transaction-list">
      <h3>Recent Transactions</h3>
      {transactions.length === 0 ? (
        <p>No transactions yet</p>
      ) : (
        <ul>
          {transactions.map((transaction) => (
            <TransactionItem
              key={transaction.id}
              transaction={transaction}
              deleteTransaction={deleteTransaction}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default TransactionList;
