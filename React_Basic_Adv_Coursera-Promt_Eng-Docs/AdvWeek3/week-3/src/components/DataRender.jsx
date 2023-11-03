import React, { useState, useEffect } from "react";
import "../App.css";

const DataFetcher = ({ render, url }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (url.includes("desserts")) {
      setData(["cake", "ice cream", "pie", "brownie"]);
    } else {
      setData(["water", "soda", "juice"]);
    }
  }, [url]);
  return render(data);
};

const DessertCount = () => {
  return (
    <DataFetcher
      url="https://littlelemon/desserts"
      render={(data) => <p>{data.length} desserts</p>}
    />
  );
};

const DrinksCount = () => {
  return (
    <DataFetcher
      url="https://littlelemon/drinks"
      render={(data) => <h3>{data.length} drinks</h3>}
    />
  );
};

function DataRender() {
  return (
    <div className="App">
      <h2>Using Render Props</h2>
      <h3>Little Lemon Restaurant 🍕</h3>
      <DessertCount />
      <DrinksCount />
    </div>
  );
}
export default DataRender;
