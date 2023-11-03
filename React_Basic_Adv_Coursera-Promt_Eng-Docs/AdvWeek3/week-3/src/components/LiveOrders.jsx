import React from "react";
import "../App";

// The children are all of the p tags
const Row = ({ children, spacing, textColor }) => {
  const childStyle = {
    marginLeft: `${spacing}px`,
    color: textColor
  };

  //  cloneElement makes a copy of an element that we can then modify
  //  In this example we are copying each p tag and changing the styling 
  return (
    <div className="Row">
      {React.Children.map(children, (child, index) => {
        return React.cloneElement(child, {
          style: {
            // Change text blue 
            // color: "blue",
            // Spread operator will overwite the blue with red
            ...child.props.style,
            ...(index > 0 ? childStyle : {}),
            color: "blue"
          },
        });
      })}
    </div>
  );
};

function LiveOrders() {
  return (
    <div className="App">
      <h2>React.cloneElement & React.Children</h2>
      <h3>Each child p tag element, has had been cloned and modified</h3>
      <Row spacing={32}  textColor="red">
        <p>Pizza Margarita</p>
        <p>2</p>
        <p>30$</p>
        <p>18:30</p>
        <p>John</p>
      </Row>
    </div>
  );
}
export default LiveOrders;
