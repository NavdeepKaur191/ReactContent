import React from "react";

function DessertsList(props) {
  const listDesserts = props.myData
    .filter((dessert) => {
      return dessert.calories < 500;
    })
    .sort((a, b) => {
      return a.calories - b.calories;
    })
    .map((dessert) => {
      return (
        <li key={dessert.name}>
          {dessert.name} - {dessert.calories} cal
        </li>
      );
    });
  return <ul>{listDesserts}</ul>;
}
export default DessertsList;
