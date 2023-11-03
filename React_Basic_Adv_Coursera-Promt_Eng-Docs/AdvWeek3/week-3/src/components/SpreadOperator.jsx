import React from "react";
import "../App.css";

// A generic Button component that accepts a type (primary or secondary) and other props
const Button = ({ type, children, ...btnProps }) => {
  // Determine the class name based on the type prop being passed
  const className = type === "primary" ? "PrimaryButton" : "SecondaryButton";
  return (
    // Render a button element with the determined class name and spread the props
    <button className={`Button ${className}`} {...btnProps}>
      {children}
    </button>
  );
};

// A LoginButton component that is a specialized version of the Button component
const LoginButton = ({ type, children, ...btnProps }) => {
  return (
    // Use the Button component with a "secondary" type and additional props
    <Button
      type="secondary"
      // Spread operator copies all props including alert("Signing Up!"), to the
      // new LoginButton component, which is overridden with new onClick functionality
      // NOTE:  Order is important!  The spread operator should be first.
      {...btnProps}
      onClick={() => {
        alert("Logging In!");
      }}
    >
      {children}
    </Button>
  );
};

function SpreadOperator() {
  return (
    <div className="App">
      <h2>Using the Spread Operator to copy the Button props to the LoginButton</h2>
      <h3>Little Lemon Restaurant 🍕</h3>
      {/* Render a Button component with a "primary" type */}
      <Button
        type="primary"
        onClick={() => alert("Signing Up!")}
        location="House"
      >
        Sign Up
      </Button>
      {/* Render a LoginButton component that uses the Button component */}
      <LoginButton
        type="secondary"
        onClick={() => alert("Signing Up!")}
        sweet="Yes"
      >
        Log In
      </LoginButton>
    </div>
  );
}
export default SpreadOperator;

// To clarify, props themselves are immutable in React, but you can certainly override
// them by passing new values or functions. In the case of the LoginButton component,
// it overrides the onClick prop by providing a new function. This is a common practice
// when composing components to customize behavior while reusing props from a parent component.

// So, while the original onClick prop passed to LoginButton from its parent component
// remains unchanged, the LoginButton component creates its own onClick behavior by providing
// a new function when rendering the Button component. This is a valid and common approach in
// React for customizing component behavior while keeping props reusable and relatively unchanged.
