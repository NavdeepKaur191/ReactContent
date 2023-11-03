function DayMessages(){
  const time = new Date();
  const day = time.toLocaleString("en-us", {weekday: "long"});
  const morning = time.getHours() >= 6 && time.getHours() <=12;
  let dayMessage;

  if (day.toLowerCase() === "monday"){
    dayMessage = `Happy ${day}`;
  } else if (day.toLowerCase() === "tuesday"){
    dayMessage = `${day}, four days to go`
  } else if (day.toLowerCase() === "wednesday"){
    dayMessage = `${day}, halfway there`
  } else if (day.toLowerCase() === "thursday"){
    dayMessage = `${day}, start planning the weekend`
  } else if (day.toLowerCase() === "friday"){
    dayMessage = `${day}, Woo - Hoo, the weekend is coming`
  } else{
    dayMessage = "Keep having fun!!"
  }

  return (
    <div>
      <h1>
        {dayMessage}
      </h1>
      {morning ? <h2>Have you had breakfast?</h2> : ""}
    </div>
  )

};
export default DayMessages;