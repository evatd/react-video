import React, { Component } from "react";
import _ from "lodash";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";
import logo from "./logo.svg";
import styled from "styled-components";

import SearchBar from "./components/search_bar";
import VideoList from "./components/video-list";
import VideoDetail from "./components/video_detail";

const API_KEY = "AIzaSyCe-j1Bmf1d6sm9LZ790MnqUJsAtpohiGg";

const AppWrapper = styled.div`
  font-family: "Work Sans", sans-serif;
  font-size: 14px;
  color: #2f2f2f;
`;
const SearchBarWrapper = styled.div`
  align-self: flex-start;
  flex: 1;

  /* the below is for the logo to be in the same line */
  display: flex;
  flex-wrap: wrap;
`;

const VideoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 16px;

  @media (min-width: 720px) {
    flex-direction: row;
    padding: 0 30px;
  }
`;

const VideoListWrapper = styled.div`
  flex: 2;
  margin-top: 10px;

  @media (min-width: 720px) {
    margin: 0;
  }
`;

const VideoDetailWrapper = styled.div`flex: 3;`;

const Logo = styled.img`
  height: 80px;
  padding: 15px 15px;

  animation: Logo-shake 1s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  @keyframes Logo-shake {
    10% {
      transform: translate3d(-1px, 0, 0);
    }

    20%,
    80% {
      transform: translate3d(1px, 0, 0);
    }

    30%,
    50%,
    70% {
      transform: translate3d(-1px, 0, 0);
    }
  }
`;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch("Ljubljana");
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, videos => {
      this.setState({
        videos,
        selectedVideo: videos[0]
      });
    });
  }

  // Used lodash, to throttle user input.
  render() {
    const videoSearch = _.debounce(term => {
      this.videoSearch(term);
    }, 400);

    return (
      <AppWrapper>
        <SearchBarWrapper>
          <Logo src={logo} />
          <SearchBar onSearchTermChange={term => this.videoSearch(term)} />
        </SearchBarWrapper>
        <VideoWrapper>
          <VideoDetailWrapper>
            <VideoDetail video={this.state.selectedVideo} />
          </VideoDetailWrapper>
          <VideoListWrapper>
            <VideoList
              onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
              videos={this.state.videos}
            />
          </VideoListWrapper>
        </VideoWrapper>
      </AppWrapper>
    );
  }
}

export default App;
