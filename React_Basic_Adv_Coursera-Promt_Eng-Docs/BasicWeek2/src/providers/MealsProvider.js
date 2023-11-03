import React, { useContext, useState } from "react";

const MealsContext = React.createContext();
const todaysMeals = [ "Baked Beans", "Baked Sweet Potato", "Baked Potatoes", "Ice Cream"];

const MealsProvider = ({children}) =>{
  const [meals] = useState(todaysMeals);

  return (
    <MealsContext.Provider value={{ meals }}>
      {children}
    </MealsContext.Provider>
  )
}
export const useMealsListContext = () => useContext(MealsContext)
export default MealsProvider;
