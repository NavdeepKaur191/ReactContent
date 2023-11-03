import { useState, useEffect } from "react";

//  HOOKS SHOULD ONLY BE USED IN A REACT FUNCTIONAL COMPONENT
function PetNames() {
  // useState variable should always be at the outermost scope of function
  const [petName, setPetName] = useState("Fluffy");

  // The set function can be used anywhere in component
  function nameLooper() {
    if (petName === "Fluffy") {
      setPetName("Rexy");
    } else if (petName === "Rexy") {
      setPetName("Gizmo");
    } else if (petName === "Gizmo") {
      setPetName("Fluffy");
    }
  }

  //  This will cause Invalid hook call - ERROR
  //  Because of useState being used inside of function
  /*   function nameLooper() {
    if (petName === "Fluffy") {
      useState("Rexy");
    } else if (petName === "Rexy") {
      useState("Gizmo");
    } else if (petName === "Gizmo") {
      useState("Fluffy");
    }
  }   */

  return (
    <div>
      <h1>I'm thinking to name my pet {petName}</h1>
      <button onClick={nameLooper}>Pick a New Name</button>
    </div>
  );
}

//  The useState is calling the hook with count first and name as second
//  That order is maintained for the useEffect hooks and the update state calls
function CompOrder() {
  // 1. First hook: useState for count
  const [count, setCount] = useState(0);

  // 3. Third hook: useEffect for document title
 
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);

  // 2. Second hook: useState for name

  const [name, setName] = useState("John");

  // 4. Fourth hook: useEffect for greeting
  useEffect(() => {
    console.log(`Hello, ${name}!`);
  }, [name]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>

      <p>Hello, {name}</p>
      <button onClick={() => setName("Jane")}>Change Name</button>
    </div>
  );
}

function HookRules() {
  return (
    <>
      <PetNames />
      <CompOrder />
    </>
  );
}
export default HookRules;
