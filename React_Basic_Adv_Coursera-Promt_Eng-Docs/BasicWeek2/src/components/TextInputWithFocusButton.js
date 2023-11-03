import { useRef } from "react";

export default function TextInputWithFocusButton(){
    const inputElement = useRef(null);
    const onButtonClick = () => {
        inputElement.current.focus();
    }

    return(
      <>
        <input ref={inputElement} type="text" /> {" "}
        <button onClick={onButtonClick}>Focus the Input</button>
      </>
    )
}