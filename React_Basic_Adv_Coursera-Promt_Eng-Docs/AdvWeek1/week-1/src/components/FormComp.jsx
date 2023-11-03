// CONTROLLED FORM - STATE CONTROLLED BY React
import { useState } from "react";
import "../App.css";

function FormComp(){
  const [name, setName] = useState("");

  function handleSubmit(e){
    e.preventDefault();
    setName("");
    console.log("Form submitted!")
  }

  return(
    <div className="App">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <div className="Field">
            <label htmlFor="name">Name:</label>
            <input
              id="name" 
              type="text" 
              placeholder="Name" 
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)} 
            />
          </div>
          <button disabled={!name} type="submit">Submit</button>
        </fieldset>
      </form>
    </div>
  )
};
export default FormComp;




// UNCONTROLLED FORM - STATE HANDLED BY DOM
/* function FormComp(){

    return(
      <div className="App">
        <form>
          <fieldset className="Field">
            <div>
              <label>Name: </label>
              <input type="text" placeholder="Name" name="name" />
            </div>
            <button type="submit">Submit</button>
          </fieldset>
        </form>
      </div>
    )
  };
  export default FormComp; */

