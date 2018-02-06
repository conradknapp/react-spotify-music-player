import React, { Component } from 'react';
import SignIn from './SignIn';
import { setAuthorizationHeader } from './utils/helpers';
import { parseUrlHash } from './utils/parse-url-hash';
import { userAuthUrl } from './utils/spotify-api-links';
import axios from 'axios';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    let userHash;
    let storedAccessToken;

    if (this.props.location.pathname === '/authorized') {
      userHash = parseUrlHash(window.location.hash);
      setAuthorizationHeader(userHash.access_token);
      localStorage.setItem('accessToken', userHash.access_token);
    } else {
      storedAccessToken = localStorage.getItem('accessToken');
      setAuthorizationHeader(storedAccessToken);
    }

    if (userHash) {
      this.props.history.push('/search');
    }

    this.state = {
      accessToken: userHash ? userHash.accessToken : storedAccessToken,
      userAuthorized: null
    };
  }

  async componentDidMount() {
    try {
      const response = await axios.get(userAuthUrl);
      console.log(response);
      await this.setState({ userAuthorized: true });
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    // console.log(axios.defaults.headers.common['Authorization']);
    return (
      <div className="view">
        <SignIn userAuthorized={this.state.userAuthorized} />
      </div>
    );
  }
}

export default App;
