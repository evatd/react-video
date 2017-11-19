// The list of video previews

import React from "react";
import VideoListItem from "./video_list_item";
import styled from "styled-components";

const ListVideos = styled.li`
  list-style: none;

  @media (min-width: 720px) {
    margin-left: 10px;
  }
`;

const VideoList = props => {
  const videoItems = props.videos.map(video => {
    return (
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        video={video}
        key={video.etag}
      />
    );
  });

  return <ListVideos>{videoItems}</ListVideos>;
};

export default VideoList;
