import React, { useState } from "react";
import "../App.css";

// Example of children prop & composition
// We have 2 generic components: Button & Alert
// Everything between the button tags (text) is considered the children
const Button = ({ children, backgroundColor, onClick }) => {
  return (
    <button style={{ backgroundColor }} onClick={onClick}>
      {children}
    </button>
  );
};

// Alert component is an empty container for a modal with grayed background
// The content between the Alert tags is the children prop
const Alert = ({ children }) => {
  return (
    <>
      <div className="Overlay" />
      <div className="Alert">{children}</div>
    </>
  );
};

// Example of composition using a component (Button)
// inside another component (CloseButton)
const CloseButton = ({ onClose }) => {
  return (
    <Button backgroundColor="red" onClick={onClose}>
      Close Modal
    </Button>
  );
};

function ChildrenDemo() {
  const [showAlert, setShowAlert] = useState(false);

  // Content between the Alert tags is the children that
  // are being passed to the Alert component above
  return (
    <div className="App">
      <h2>Little Lemon Restaurant 🍕</h2>
      <h3>Using children prop & composition</h3>
      <button onClick={() => setShowAlert(true)}>
        Show Alert Modal Component
      </button>
      {showAlert && (
        <Alert>
          <h4>
            Everything you see on this modal is the children prop for the Alert
            component
          </h4>
          <h3>Close Modal</h3>
          <p>Are you sure?</p>
          <CloseButton onClose={() => setShowAlert(false)} />
        </Alert>
      )}
    </div>
  );
}
export default ChildrenDemo;
