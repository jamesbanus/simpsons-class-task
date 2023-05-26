import React, { Component } from "react";

class Search extends Component {
  // state = {  }
  render() {
    return (
      <>
        <label htmlFor="character">Search by Character!</label>
        <input
          onInput={this.props.onSearchInput}
          type="text"
          name="character"
        />
      </>
    );
  }
}

export default Search;
