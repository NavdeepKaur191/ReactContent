import { useState } from "react";
import MyChild from "./MyChild";

export default function MyState(props){
    const [date] = useState(new Date());

    return (
      <div>
        <MyChild message={date.toLocaleTimeString()} />
      </div>
    )
}