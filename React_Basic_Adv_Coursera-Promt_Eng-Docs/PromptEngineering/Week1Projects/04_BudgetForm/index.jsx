import React, { useState } from "react"; 
import ReactDOM from 'react-dom/client';
import ProgressBar from './ProgressBar';
import BudgetForm from './BudgetForm';

function App() {
  const [budgets, setBudgets] = useState([
    { title: 'Rent', budget: 800, spent: 800 },
    { title: 'Pet Supplies', budget: 150, spent: 50 },
    { title: 'Groceries', budget: 200, spent: 150 },
    { title: 'Utilities', budget: 100, spent: 75 },
    { title: 'Entertainment', budget: 150, spent: 200 },
  ]);

  const addBudget = (budget) => {
    setBudgets([...budgets, budget]);
  };

  return (
    <div>
      <h1>Budget Tracker</h1>
      <BudgetForm addBudget={addBudget} />
      {budgets.map((budget, index) => (
        <ProgressBar key={index} title={budget.title} budget={budget.budget} spent={budget.spent} />
      ))}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />); 