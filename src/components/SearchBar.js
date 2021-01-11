import React, { Component } from 'react';

class SearchBar extends Component {
  state = { term: '' };

  onHandleChange = (e) => {
    this.setState({ term: e.target.value });
  }

  onFormSubmit = (e) => {
    e.preventDefault();
  }

  //TODO: Make sure we call callback from parent component

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label htmlFor="search">Video Search</label>
            <input
              type="text"
              value={this.state.term}
              id="search"
              onChange={this.onHandleChange}
            />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar;