// Video preview

import React from "react";
import styled from "styled-components";

const VideoListWrapper = styled.div`
  flex: 1 0 auto;
  transition: background 0.3s ease;

  padding: 5px 0;
  border-top: 1px solid #ddd;

  &:last-child {
    border-bottom: 1px solid #ddd;
  }

  &:hover {
    background-color: #f5f5f1;
  }
`;

const VideoTitle = styled.div`
  font-family: "Montserrat", sans-serif;
  letter-spacing: 0.5px;
  font-size: 15px;
  font-weight: 600;
`;
const ListGroupItem = styled.li`
  cursor: pointer;
  display: flex;
`;
const VideoThumbnail = styled.img`
  flex: 0 0 auto;

  max-width: 120px;
  margin-right: 5px;
`;

const VideoListItem = ({ video, onVideoSelect }) => {
  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    <VideoListWrapper>
      <ListGroupItem onClick={() => onVideoSelect(video)}>
        <VideoThumbnail src={imageUrl} />
        <VideoTitle>{video.snippet.title}</VideoTitle>
      </ListGroupItem>
    </VideoListWrapper>
  );
};

export default VideoListItem;
