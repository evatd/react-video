// The list of video previews

import React from "react";
import styled from "styled-components";

import { List } from "./styles";
import Item from "./item";

const VideoList = ({ videos, onVideoSelect }) => {
  return (
    <List>
      {videos.map(video => (
        <Item key={video.etag} onVideoSelect={onVideoSelect} video={video} />
      ))}
    </List>
  );
};

export default VideoList;
