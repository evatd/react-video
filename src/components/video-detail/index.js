// Video player and the title and description below it

import React from "react";
import {
  VideoDetailWrapper,
  VideoFrame,
  VideoTitle,
  VideoDetailStyle
} from "./styles";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }
  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <VideoDetailWrapper>
      <VideoFrame src={url} />
      <VideoDetailStyle>
        <VideoTitle>{video.snippet.title}</VideoTitle>
        <br />
        {video.snippet.description}
      </VideoDetailStyle>
    </VideoDetailWrapper>
  );
};

export default VideoDetail;
