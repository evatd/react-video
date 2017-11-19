// Video player and the title and description below it

import React from "react";
import styled from "styled-components";

const SelectedVideoTitle = styled.div`
  font-family: "Montserrat", sans-serif;
  letter-spacing: 0.5px;
  font-size: 20px;
  font-weight: 500;
`;

const SelectedVideoDescription = styled.div``;
const VideoDetailStyle = styled.div`
  margin-top: 10px;
  padding: 1em;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const VideoFrame = styled.iframe`
  width: 100%;
  height: 400px;
`;

const VideoDetailWrapper = styled.div`
  position: relative;
  overflow: hidden;
  margin: auto;
`;

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }
  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <VideoDetailWrapper>
      <div>
        <VideoFrame src={url} />
      </div>
      <VideoDetailStyle>
        <SelectedVideoTitle>{video.snippet.title}</SelectedVideoTitle>
        <br />
        <SelectedVideoDescription>
          {video.snippet.description}
        </SelectedVideoDescription>
      </VideoDetailStyle>
    </VideoDetailWrapper>
  );
};

export default VideoDetail;
