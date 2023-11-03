import React, { useRef, useState } from "react";


function Controlled() { 
  const [value, setValue] = useState("");
  const inputRef = useRef(null);
  
  function handleChange(e){
    setValue(e.target.value)
  }
   
  return ( 
    <form > 
      <input 
        ref={inputRef}
        value={value}
        onChange={handleChange} 
        type="text" 
      />
      <p>
        Input Value: {value}
      </p> 
    </form> 
  ); 
};
export default Controlled; 

// This flow pushes the value changes to the form component instead of pulling like uncontrolled
// The Form component always has the input's current value without needing to ask for it.

// As a result, your data (React state) and UI (input tags) are always in sync.