import { useState } from "react";

function Stateful(){
    const [word, setWord] = useState("Hello");

    return(
      <div>
        <h1>A state value:  {word}</h1>
        <button onClick={() => setWord(prevWord => (prevWord === "Hello" ? "Goodbye" : "Hello"))}>
            Toggle
        </button>
      </div>
    )
};
export default Stateful;