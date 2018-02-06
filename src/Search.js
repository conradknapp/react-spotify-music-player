import React, { Component } from 'react';
import axios from 'axios';
import { spotifySearchUrl } from './utils/spotify-api-links';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: null
    };

    this.onSearchSubmit = this.onSearchSubmit.bind(this);
  }

  onSearchSubmit(event) {
    event.preventDefault();
    this.setState({ loading: true });
    axios
      .get(spotifySearchUrl, {
        params: {
          q: this.query.value,
          type: 'artist'
        }
      })
      .then(res => console.log(res.data))
      .catch(err => console.error(err))
      .finally(() => this.setState({ loading: false }));
    this.searchForm.reset();
  }

  render() {
    return (
      <section>
        <form
          onSubmit={event => this.onSearchSubmit(event)}
          ref={input => (this.searchForm = input)}
        >
          <h2>Search Artists</h2>
          <input type="text" ref={input => (this.query = input)} />
          <button type="submit">Submit</button>
          {/* swap out loading div with spinner component */}
          {this.state.loading && <div>Loading</div>}
        </form>
      </section>
    );
  }
}

export default Search;
