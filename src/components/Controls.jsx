import React, { Component } from "react";

class Controls extends Component {
  // state = {  }
  render() {
    const { onSearchInput, onSortInput } = this.props;

    return (
      <>
        <label htmlFor="character">Search by Character!</label>
        <input onInput={onSearchInput} type="text" name="character" />
        <select onInput={onSortInput} name="" id="">
          <option value=""></option>
          <option value="Asc">Asc</option>
          <option value="Desc">Desc</option>
        </select>
      </>
    );
  }
}

export default Controls;
