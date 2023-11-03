import "../App.css"
import { useState } from "react";

function Feedback(){
  const [score, setScore] = useState("10");
  const [comment, setComment] = useState("");

  function handleSubmit(e){
    e.preventDefault();
    if (score <= 5 && comment.length <= 10){
      alert("Please provide comment why score is 5 or less.");
      return;
    }
    console.log(`Form Submitted:  ${comment}`);
    setComment("");
    setScore("10");
  }

  return(
    <div className="App">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Feedback Form</h2>
          <div className="Field">
            <label>Score: {score}</label>
            <input 
              type="range" 
              min="0" 
              max="10"
              value={score}
              onChange={e => setScore(e.target.value)}
              className="Slider" 
            />
          </div>
          <div className="Field">
            <label>Comment: </label>
            <textarea
              value={comment}
              onChange={e => setComment(e.target.value)} 
            />
          </div>
          <button type="submit">Submit</button>   
        </fieldset>
      </form>
    </div>
  );
};
export default Feedback