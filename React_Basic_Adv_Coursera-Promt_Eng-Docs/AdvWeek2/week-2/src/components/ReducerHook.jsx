import { useReducer } from "react";
import "../App";

//  2 Params
const reducer = (mystate, myaction) => {
  if (myaction.mytype === "buy_ingredients") return { mymoney: mystate.mymoney - 10 };
  if (myaction.mytype === "sell_a_meal") return { mymoney: mystate.mymoney + 10 };
  if (myaction.mytype === "celebrity_visit") return { mymoney: mystate.mymoney + 5000 };
  if (myaction.mytype === "reset_wallet") return { mymoney: mystate.mymoney = 100 };
};

function ReducerHook() {
  const initialState = { mymoney: 100 };
  const [mystate, mydispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Wallet: {mystate.mymoney}</h1>
      <div>
        <button onClick={() => mydispatch({ mytype: "buy_ingredients" })}>
          Shopping for veggies!
        </button>
        <button onClick={() => mydispatch({ mytype: "sell_a_meal" })}>
          Serving Customer Meal!
        </button>
        <button onClick={() => mydispatch({ mytype: "celebrity_visit" })}>
          Celebrity Visit!
        </button>
        <button onClick={() => mydispatch({ mytype: "reset_wallet" })}>
          Reset Wallet!
        </button>
      </div>
    </div>
  );
}
export default ReducerHook;
