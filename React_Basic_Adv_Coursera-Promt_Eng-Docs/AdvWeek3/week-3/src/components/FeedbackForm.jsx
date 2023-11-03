import "../App.css"
import { useState } from "react";

function FeedbackForm({onSubmit}){
    const [score, setScore] = useState("10");
    const [comment, setComment] = useState("");

    const isDisabled = Number(score) < 5 && comment.length <= 10;

    const textAreaPlaceholder = isDisabled
      ? "Please provide a comment why the experience was not good.  Minimum length 10 characters."
      : "Optional Feedback";
  
    function handleSubmit(e){
      e.preventDefault();
      onSubmit({score, comment})
    }
  
    return(
      <div className="App">
        <form onSubmit={handleSubmit}>
          <fieldset>
            <h2>Feedback Form</h2>
            <div className="Field">
              <label htmlFor="score">Score: {score}</label>
              <input
                id="score" 
                type="range" 
                min="0" 
                max="10"
                value={score}
                onChange={(e) => {
                  setScore(e.target.value)    
                }}
                className="Slider" 
              />
            </div>
            <div className="Field">
              <label htmlFor="comment">Comments: </label>
              <textarea
                id="comment"
                placeholder={textAreaPlaceholder}
                name="comment"
                value={comment}
                onChange={(e) => {
                  setComment(e.target.value)    
                }} 
              />
            </div>
            <button type="submit" disabled={isDisabled}>Submit</button>   
          </fieldset>
        </form>
      </div>
    );
  };
  export default FeedbackForm;
