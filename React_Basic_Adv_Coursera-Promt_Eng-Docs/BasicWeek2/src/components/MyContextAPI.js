import MealsProvider from "../providers/MealsProvider";
import MealsList from "./MealsList";
import Counter from "./Counter.js";

function MyContextAPI(){
  return (
    <div>
      <MealsProvider>
        <MealsList />
        <Counter />
      </MealsProvider>    
    </div>  
  )
}
export default MyContextAPI;