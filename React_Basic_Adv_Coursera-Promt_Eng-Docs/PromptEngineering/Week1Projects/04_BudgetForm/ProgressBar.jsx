import React from 'react';
import './style.css';

const ProgressBar = ({ title, budget, spent }) => {
  const percentage = (spent / budget) * 100;
  let progressWidth = percentage > 100 ? 100 : percentage;
  let textColor = percentage > 100 ? 'red' : 'black';
  let color = "";

  if (percentage >= 100) {
    color = "#FF6961";  // Pastel Red
  } else if (percentage >= 75) {
    color = "#FDB147";  // Pastel Orange
  } else {
    color = "#77DD77";  // Pastel Green
  }

  return (
    <div className='budget'>
      <h2>{title}</h2>
      <div className='progress-bar'>
        <div className='progress' style={{ width: `${progressWidth}%`, backgroundColor: color }}></div>
      </div>
      <p style={{ color: textColor }}>Budget: ${budget} | Spent: ${spent}</p>
    </div>
  );
};

export default ProgressBar;


