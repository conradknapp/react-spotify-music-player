import React from 'react';
import { spotifyAuthUrl } from './utils/spotify-api-links';

const SignIn = ({ userAuthorized }) => {
  return (
    <button>
      {!userAuthorized ? (
        <a href={spotifyAuthUrl}>Sign in with Spotify</a>
      ) : (
        'You are logged in'
      )}
    </button>
  );
};

export default SignIn;
