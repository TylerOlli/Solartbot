import React from "react"
const Video = ({ videoSrcURL, videoTitle, ...props }) => (
  <div className="video" style={{padding:"56.39% 0 0 0",position:"relative"}}>
    <iframe
      src={videoSrcURL}
      title={videoTitle}
      style={{position:"absolute",top:0,left:0,width:"100%",height:"100%",maxWidth:"500px",maxHeight:"300px"}}
      allow="autoplay; fullscreen; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
    />
  </div>
)
export default Video