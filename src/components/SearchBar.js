import React, { Component } from 'react';

class SearchBar extends Component {
  state = { term: '' }
  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={(e) => e.preventDefault()}>
          <div className="field">
            <label htmlFor="search">Video Search</label>
            <input
              type="text"
              value={this.state.term}
              id="search"
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar;