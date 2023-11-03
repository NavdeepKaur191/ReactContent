import "../RadioStyle.css";
import { RadioGroup, RadioOption } from "./Radio";
import { useState } from "react";

function RadioButtonLab() {
  // State to track the currently selected radio option
  const [selected, setSelected] = useState("");
  return (
    <div className="App">
      <h3>Using React.cloneElement & React.Children to create Radio Group</h3>
      <h3>How did you hear about Little Lemon?</h3>
      <RadioGroup onChange={setSelected} selected={selected}>
        <RadioOption value="social_media">Social Media</RadioOption>
        <RadioOption value="friends">Friends</RadioOption>
        <RadioOption value="advertising">Advertising</RadioOption>
        <RadioOption value="shopping">Shopping</RadioOption>
        <RadioOption value="other">Other</RadioOption>
      </RadioGroup>
      <button disabled={!selected}>Submit</button>
    </div>
  );
}

export default RadioButtonLab;

// RadioButtonLab is a parent component that uses the RadioGroup and
// RadioOption components to create a radio button group.

// It maintains state using the useState hook to track the currently selected radio option.

// Inside the return statement, it renders a RadioGroup component with several RadioOption
// components as its children, each representing a radio button option with a value and label.

// The onChange prop of RadioGroup is set to the setSelected function to update the selected
// value when a radio option is clicked.

// Finally, there's a submit button that is disabled if no radio option is selected (!selected).
