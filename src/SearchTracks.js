import React, { Component } from 'react';
import axios from 'axios';
import { spotifySearchUrl } from './utils/spotify-api-links';

import TrackResults from './TrackResults';

class SearchTracks extends Component {
  state = {
    loading: false,
    results: null
  };

  onSearchSubmit = event => {
    event.preventDefault();
    this.setState({ loading: true });
    axios
      .get(spotifySearchUrl, {
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`
        },
        params: {
          q: this.query.value,
          type: 'artist'
        }
      })
      .then(res => {
        this.setState({ results: res.data });
      })
      .catch(err => console.warn(err))
      .finally(() => this.setState({ loading: false }));
    this.searchForm.reset();
  };

  render() {
    return (
      <section>
        <form
          onSubmit={event => this.onSearchSubmit(event)}
          ref={input => (this.searchForm = input)}
        >
          <h2>Search Tracks</h2>
          <input type="text" ref={input => (this.query = input)} />
          <button type="submit">Submit</button>
          {this.state.loading && <div>Loading</div>}
          <TrackResults results={this.state.results} />
        </form>
      </section>
    );
  }
}

export default SearchTracks;
