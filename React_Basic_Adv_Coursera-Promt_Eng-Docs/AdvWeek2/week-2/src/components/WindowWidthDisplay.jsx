import { useState, useEffect } from "react";

let listenerCountWith = 0;

function WindowWidthWith() {
  const [width, setWidth] = useState(window.innerWidth);  

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      console.log("Handler Created with useEffect");
    };

    window.addEventListener("resize", handleResize);

    listenerCountWith++;

    // Cleanup function: Removes the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("Handler Killed with useEffect cleanup");
    };
  }, []);
  // Empty dependency array ensures this effect runs once when the component
  // mounts and cleans up when it unmounts

  return(
    <div>
      <h2>With useEffect Window width is: {width}</h2>
      <p>Number of handlers created: {listenerCountWith}</p>
    </div>
  )  
}

// SEE HOW MANY MORE TIMES AN EVENTLISTENER IS CREATED WO useEffect
// External variable to track the number of event listeners
let listenerCountWO = 0;

function WindowWidthWO() {
  const [width, setWidth] = useState(window.innerWidth); 

  listenerCountWO++;

  // Without useEffect, this is problematic!
  window.addEventListener("resize", () => {
    setWidth(window.innerWidth);    
    console.log("Handler Created without useEffect");
  });

  return(
    <div>
      <h2>Without useEffect Window width is: {width}</h2>
      <p>Number of handlers created: {listenerCountWO}</p>
    </div>
  )
}

function WindowWidthDisplay() {
  return (
    <>
      <h1>Resize Window Width to See Difference</h1>
      <WindowWidthWO />
      <WindowWidthWith />
    </>
  );
}
export default WindowWidthDisplay;

//  Use the console in Dev Tools to see the difference between the number of
//  calls to create event handlers between using useEffect and not using useEffect
//  when resizing the window width.  It's created hundreds of times more and the
//  eventListener is never removed.
