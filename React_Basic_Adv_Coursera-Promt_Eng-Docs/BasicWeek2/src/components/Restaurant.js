import React, {useState} from "react";
import Heading from "./Heading";

function Restaurant(){
  const [word, setWord] = useState("Eat")

  // setWord won't work - Get a white page - need to use inside a function
  //setWord("Drink")
  function handleClick(){
    if (word === "Eat"){
        setWord("Drink")
    }else{
        setWord("Eat")
    }    
  }

  return(
    <div>
      <Heading message={word + " at Little Lemon"} />
      <button onClick={handleClick}>Click Me</button>
    </div>
  )
};
export default Restaurant;