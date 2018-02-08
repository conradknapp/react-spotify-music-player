import React from 'react';
import { spotifyAuthUrl } from './utils/spotify-api-links';

const SignIn = ({ user, logOutUser }) => {
  return (
    <button>
      {!user ? (
        <a href={spotifyAuthUrl}>Sign in with Spotify</a>
      ) : (
        <p onClick={logOutUser}>Log Out</p>
      )}
    </button>
  );
};

export default SignIn;
