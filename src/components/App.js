import React, { Component } from 'react';

import videoApi from '../api/videoApi';
import SearchBar from './SearchBar';
import VideoList from './VideoList';

class App extends Component {
  state = { videos: [] }

  onTermSubmit = async (term) => {
    const response = await videoApi.get('/search', {
      params: {
        q: term
      }
    })
    this.setState({ videos: response.data.items })
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <VideoList videos={this.state.videos} />
      </div>
    )
  }
}

export default App;