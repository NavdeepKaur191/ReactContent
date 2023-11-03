import React, { useState, useEffect } from "react";
import "../App.css";

const MousePosition = ({ render }) => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMousePositionChange = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMousePositionChange);

    return () => {
      window.removeEventListener("mousemove", handleMousePositionChange);
    };
  }, []);

  return render(mousePosition);
};

const PanelMouseLogger = () => {
  return (
    <MousePosition
      render={(mousePosition) => (
        <div className="BasicTracker">
          <p>Mouse position:</p>
          <div className="RowData">
            <span>x: {mousePosition.x}</span>
            <span>y: {mousePosition.y}</span>
          </div>
        </div>
      )}
    />
  );
};

const PointMouseLogger = () => {
  return(
    <MousePosition
      render={(mousePosition) => (
        <p>
          ({mousePosition.x}, {mousePosition.y})   
        </p>  
      )} 
    />
  )
};

function RenderProps() {
  return (
    <div className="App">
      <h2>Render Props Lab</h2>
      <h3>Little Lemon Restaurant 🍕</h3>
      <PanelMouseLogger />
      <PointMouseLogger />
    </div>
  );
}
export default RenderProps;
