import { useState } from "react";

//  THIS DEMONSTRATES WHAT TO DO WHEN ONLY THE 'place' PROPERTY IS 
//  CHANGING WHILE KEEPING THE REMAINING PROPERTIES UNCHANGED:  
//  USING THE SPREAD OPERATOR TO COPY THE prevState OBJECT AND UPDATES THE 
//  'place' PROPERTY ON THE COPY AND RETURNS A BRAND NEW OBJECT
export default function App() {
  const [greeting, setGreeting] = useState({
    greet: "Hello",
    place: "World",
  });
  console.log(greeting, setGreeting);

  function updateGreeting() {
    setGreeting((prevState) => {
      return { ...prevState, place: "World-Wide Web" };
    });
  }

  return (
    <div>
      <h1>
        {greeting.greet}, {greeting.place}
      </h1>
      <button onClick={updateGreeting}>Update greeting</button>
    </div>
  );
}




// USING THE SPREAD OPERATOR TO COPY THE STATE OBJECT AND UPDATE THE COPY
/* export default function App() { 
  const [greeting, setGreeting] = useState({ greet: "Hello, World" }); 
  console.log(greeting, setGreeting); 
 
  function updateGreeting() { 
    const newGreeting = {...greeting}; // Making the copy
    newGreeting.greet = "Hello, World-Wide Web"; 
    setGreeting(newGreeting); // Updating the copy
  } 
 
  return ( 
    <div> 
      <h1>{greeting.greet}</h1> 
      <button onClick={updateGreeting}>Update greeting</button> 
    </div> 
  ); 
}  */

//  THIS IS UPDATING THE greeting.greet DIRECTLY, THEN WHEN setGreeting
//  IS CALLED, React DOES A SHALLOW COMPARISON AND DOES NOT 'SEE' THE
//  CHANGES AND DOES NOT RERENDER THE DIRECT UPDATE
//  NO ERRORS OCCUR, JUST DOESN'T WORK
/* export default function Greeting() { 
  const [greeting, setGreeting] = useState({ greet: "Hello, World" }); 
  console.log(greeting, setGreeting); 
 
  function updateGreeting() { 
    greeting.greet = "Hello, World-Wide Web"; // Updating directly
    setGreeting(greeting); 
  } 
 
  return ( 
    <div> 
      <h1>{greeting.greet}</h1> 
      <button onClick={updateGreeting}>Update greeting</button> 
    </div> 
  ); 
}  */

//  UPDATING THE STATE OBJECT DIRECTLY WITHOUT MAKING A COPY
//  THIS DOES NOT WORK BECAUSE WE CAN'T REASSIGN A const VARIABLE
//  ERROR:  TypeError: Assignment to constant variable.
/* export default function App() { 
    const [greeting, setGreeting] = useState({ greet: "Hello, World" }); 
    console.log(greeting, setGreeting); 
   
    function updateGreeting() { 
      greeting = {greet: "Hello, World-Wide Web"}; //  TypeError: 
      setGreeting(greeting); 
    } 
   
    return ( 
      <div> 
        <h1>{greeting.greet}</h1> 
        <button onClick={updateGreeting}>Update greeting</button> 
      </div> 
    ); 
  }  */

//  HOLDING STATE IN AN OBJECT AND UPDATING IT BASED ON USER-GEREATED EVENTS
//  WORKS BUT WRONG WAY
/* export default function Greeting() { 
  const [greeting, setGreeting] = useState({ greet: "Hello, World" }); 
  console.log(greeting, setGreeting); 
 
  function updateGreeting() { 
    setGreeting({ greet: "Hello, World-Wide Web" }); 
  } 
 
  return ( 
    <div> 
      <h1>{greeting.greet}</h1> 
      <button onClick={updateGreeting}>Update greeting</button> 
    </div> 
  ); 
}  */
