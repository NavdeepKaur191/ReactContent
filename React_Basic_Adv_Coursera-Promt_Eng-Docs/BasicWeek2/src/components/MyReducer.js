import { useReducer } from "react";

const reducer = (state, action) => {
  if (action.type === "ride")  return {money: state.money + 10}
  if (action.type === "fuel")  return {money: state.money - 50}
  return new Error();
}

function MyReducer(){
  const initialState = {money: 100};
  const [state, dispatch] = useReducer(reducer, initialState);

  return(
    <div className="App">
      <h1>Wallet: {state.money}</h1>
      <div>
        <button onClick={() => dispatch({type: "ride"})}>New Customer!</button>
        <button onClick={() => dispatch({type: "fuel"})}>Refill Tank!</button>
      </div>
    </div>
  ) 
}
export default MyReducer;