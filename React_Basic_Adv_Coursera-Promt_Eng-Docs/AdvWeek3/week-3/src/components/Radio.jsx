import React, { Children, cloneElement } from "react";
import "../RadioStyle.css";


// The RadioGroup component with the RadioOptions as children
export function RadioGroup({ onChange, selected, children }) {
  // Map over the children and clone them with updated props
  const RadioOptions = Children.map(children, (child) => {
    return cloneElement(child, {
      checked: child.props.value === selected,
      onChange: onChange,
    });
  });
  // Render the RadioOptions inside a containing div with styling
  return <div className="RadioGroup">{RadioOptions}</div>;
}

// RadioOption child component
// Use const instead of function because a child cannot be a function
export const RadioOption = ({ value, checked, onChange, children }) => {
  function handleChange(e) {
    onChange(e.target.value);
  }
  return (
    <div className="RadioOption">
      {/* Radio input element */}
      <input
        id={value}
        type="radio"
        name={value}
        value={value}
        checked={checked}
        onChange={handleChange}
      />
      {/* Label for the radio input */}
      <label htmlFor={value}>{children}</label>
    </div>
  );
};


// RadioGroup is a component that acts as a container for a group of radio options.

// Inside RadioGroup, it uses Children.map to iterate over its child components (RadioOptions) 
// and clone them with updated props. It sets the checked prop based on whether the value of 
// the child matches the currently selected value, and it passes the onChange function to handle changes.

// RadioOption is a component representing individual radio options. It takes props like 
// value, checked, onChange, and children, where value is the value of the radio option, 
// checked indicates whether it's currently selected, and onChange is a function to handle changes.
