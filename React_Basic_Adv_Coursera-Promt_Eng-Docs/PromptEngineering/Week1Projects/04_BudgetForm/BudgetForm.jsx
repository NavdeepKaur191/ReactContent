import React, { useState } from 'react';

const BudgetForm = ({ addBudget }) => {
  const [title, setTitle] = useState('');
  const [budget, setBudget] = useState('');
  const [spent, setSpent] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    addBudget({ title, budget, spent });
    setTitle('');
    setBudget('');
    setSpent('');
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="Budget Title" required />
      <input type="number" value={budget} onChange={e => setBudget(e.target.value)} placeholder="Budget" required />
      <input type="number" value={spent} onChange={e => setSpent(e.target.value)} placeholder="Spent" required />
      <button type="submit">Add Budget</button>
    </form>
  );
};

export default BudgetForm;
