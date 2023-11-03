import React from "react";
import ReactPlayer from "react-player/youtube";


const MyMedia = () => {
  return(
    <div className="layout">
      <MyVideo />
    </div>
  )
};

const MyVideo = () => {
    return(
      <ReactPlayer url="https://www.youtube.com/watch?v=bjFScgPPK3U" />
    )
};

export default MyMedia;

