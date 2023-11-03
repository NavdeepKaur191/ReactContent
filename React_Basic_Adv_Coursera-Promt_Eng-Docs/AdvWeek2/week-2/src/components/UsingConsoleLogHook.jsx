import { useState } from "react";
import useConsoleLog from "../useConsoleLog";
  
function UsingConsoleLogHook(){
  const [count, setCount] = useState(0);
  useConsoleLog(`Count:  ${count}`);

  function increment() {
    setCount(prevCount => prevCount + 1);
  }

  return (
    <div>
      <h1>Custom Hook - useConsoleLog</h1>  
      <h2>Written to Console - Count: {count}</h2>
      <button onClick={increment}>Plus 1</button>
    </div>
  );
}
export default UsingConsoleLogHook;