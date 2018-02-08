import React, { Component } from 'react';
import SignIn from './SignIn';
import Header from './Header';
import { setAuthorizationHeader } from './utils/helpers';
import { parseUrlHash } from './utils/parse-url-hash';
import { userAuthUrl } from './utils/spotify-api-links';
import SpotifyPlayer from 'react-spotify-player';
import axios from 'axios';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    let userHash;
    let storedAccessToken;

    if (this.props.location.pathname === '/authorized') {
      console.log(true);
      userHash = parseUrlHash(window.location.hash);
      setAuthorizationHeader(userHash.access_token);
      localStorage.setItem('accessToken', userHash.access_token);
    } else {
      storedAccessToken = localStorage.getItem('accessToken');
      setAuthorizationHeader(storedAccessToken);
    }

    // if (userHash) {
    //   this.props.history.push('/authorized');
    // }

    this.state = {
      accessToken: userHash ? userHash.accessToken : storedAccessToken,
      user: null
    };

    this.logOutUser = this.logOutUser.bind(this);
  }

  async componentDidMount() {
    try {
      const response = await axios.get(userAuthUrl);
      console.log(response);
      await this.setState({ user: response });
    } catch (err) {
      console.error(err);
    }
  }

  logOutUser() {
    localStorage.removeItem('accessToken');
    // deleteAuthorizationHeader();
    this.setState({ user: null });
    this.props.history.push('/');
  }

  render() {
    console.log(axios.defaults.headers.common['Authorization']);
    console.log(this.state.accessToken);
    // size may also be a plain string using the presets 'large' or 'compact'
    const size = {
      width: '100%',
      height: 300
    };
    const view = 'list'; // or 'coverart'
    const theme = 'black'; // or 'white'

    return (
      <div className="view">
        <Header user={this.state.user} />
        <SignIn user={this.state.user} logOutUser={this.logOutUser} />
        {this.state.user ? (
          <SpotifyPlayer
            uri="spotify:album:1TIUsv8qmYLpBEhvmBmyBk"
            size={size}
            view={view}
            theme={theme}
          />
        ) : (
          ''
        )}
      </div>
    );
  }
}

export default App;
