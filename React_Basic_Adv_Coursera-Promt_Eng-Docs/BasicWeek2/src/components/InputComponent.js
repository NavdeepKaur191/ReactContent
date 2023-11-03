import { useState } from "react";

export default function InputComponent(){
    const [inputText, setInputText] = useState("Hello");

    function handleChange(e){
        setInputText(e.target.value);
    }

    return(
        <>
          <input value={inputText} onChange={handleChange} />
          <p>You typed:  {inputText}</p>
          <button onClick={() => setInputText("Hello")}>
            Reset
          </button>
        </>
    )
}