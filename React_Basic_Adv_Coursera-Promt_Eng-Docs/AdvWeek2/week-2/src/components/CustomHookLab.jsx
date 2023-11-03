import { useState, useEffect, useRef } from "react";

export default function CustomHookLab() {
  const [day, setDay] = useState("Monday");
  const prevDay = usePrevious(day);
  const getNextDay = () => {
    if (day === "Monday") {
      setDay("Tuesday")
    } else if (day === "Tuesday") {
      setDay("Wednesday")
    } else if (day === "Wednesday") {
      setDay("Thursday")
    } else if (day === "Thursday") {
      setDay("Friday")
    } else if (day === "Friday") {
      setDay("Monday")
    }
  }
  return (
    <div style={{padding: "20px"}}>
      <h1>
        Today is: {day}<br />
        {
          prevDay && (
            <span>Previous work day was: {prevDay}</span>
          )
        }
      </h1>
      <button onClick={getNextDay}>
        Get next day
      </button>
    </div>
  );
}

//  CUSTOM HOOK usePrevious
function usePrevious(val) {
  const ref = useRef();

  useEffect(() => {
    ref.current = val;
  }, [val]);  //  Only run the effect when the value changes

  // Return the previous value (happens before the useEffect has run)
  return ref.current;
}