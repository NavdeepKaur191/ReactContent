import React, { useRef } from "react";
import "../App";

function UseRefHook(){
  const formInputRef = useRef(null);
  const focusInput = () => {
    formInputRef.current.focus();
  }
  


  return(
    <>
      <h1>Using useRef to access underlying DOM</h1>
      <input id="refInput" ref={formInputRef} type="text"/>
      <button onClick={focusInput}>
        Focus Input
      </button>
    </>
  )
};
export default UseRefHook;