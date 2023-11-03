import Workday from "./Workday";
import Weekend from "./Weekend";
import DayError from "./DayError";

function CurrentMessage({day}) {
  const weekday = (day >= 1 && day <=5);
  const weekend = (day >= 6 && day <=7);
  let message;


  if (weekday) {
    message = <Workday /> 
  }else if (weekend){
    message = <Weekend />
  } else {
    message = <DayError />
  }

  return(
    <div>
        {message}
    </div>
  )    
}
export default CurrentMessage;