import React from 'react';

function Balance({ transactions }) {
  const totalBalance = transactions.reduce((acc, transaction) => acc + transaction.amount, 0);

  return (
    <div className="balance">
      <h2>Total Balance: ${totalBalance.toFixed(2)}</h2>
    </div>
  );
}

export default Balance;
