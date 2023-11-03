import { useState } from "react";

export default function RevisitUseState() {
  const [restaurantName, setRestaurantName] = useState("Lemon");

  function updateRestaurantName() {
    setRestaurantName("Little Lemon");
  }

  return (
    <div>
      <h1>{restaurantName}</h1>
      <button onClick={updateRestaurantName}>Update Name</button>
    </div>
  );
}
