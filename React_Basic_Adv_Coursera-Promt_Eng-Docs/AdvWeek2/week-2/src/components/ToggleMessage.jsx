import React, { useEffect, useState } from "react";
import "../App";

function ToggleMessage() {
  const [toggle, setToggle] = useState(true);

  const clickHandler = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    document.title = toggle
      ? "Welcome to Little Lemon"
      : "Using the useEffect Hook";
  }, [toggle]);

  return (
    <div>
      <h1>Using the useEffect Hook</h1>
      <button onClick={clickHandler}>Toggle Message</button>
      {toggle && <h2>Welcome to Little Lemon</h2>}
    </div>
  );
}
export default ToggleMessage;
