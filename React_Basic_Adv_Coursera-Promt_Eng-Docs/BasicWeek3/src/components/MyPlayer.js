import React from "react";
import ReactPlayer from "react-player";

function MyPlayer(){

    const vidUrl = "https://www.facebook.com/facebook/videos/10153231379946729/";
    
    return(
      <div>
        <h1>React Player Example</h1>
        <div className="layout">
        <ReactPlayer
          url={vidUrl}
          playing={false}
          volume={0.5} 
        />
        </div>
      </div>
    )
}
export default MyPlayer;