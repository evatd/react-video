// our search bar component

import React, { Component } from "react";
import { SearchBarStyle, InputStyle } from "./styles";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: "" };
  }
  render() {
    return (
      <SearchBarStyle>
        <InputStyle
          value={this.state.term}
          placeholder="Search for a video..."
          onChange={event => this.onInputChange(event.target.value)}
        />
      </SearchBarStyle>
    );
  }

  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
