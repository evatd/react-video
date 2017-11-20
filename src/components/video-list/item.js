// Video preview

import React from "react";

import {Item, Thumbnail, Title} from "./styles"

const VideoListItem = ({ video, onVideoSelect }) => {
  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    <Item onClick={() => onVideoSelect(video)}>
      <Thumbnail src={imageUrl} />
      <Title>{video.snippet.title}</Title>
    </Item>
  );
};

export default VideoListItem;
