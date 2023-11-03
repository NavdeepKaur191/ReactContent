import React, { useState } from 'react';

const Counter = ({ incrementValue = 1 }) => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + incrementValue);
  };

  return (
    <button onClick={handleIncrement}>
      Count: {count}
    </button>
  );
};

export default Counter;