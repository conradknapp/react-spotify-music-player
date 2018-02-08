import React from 'react';

const Header = ({ user }) => {
  return (
    <header>
      {user ? (
        <p>
          You are signed in as
          <a href={user.data.external_urls.spotify}>{user.data.display_name}</a>
        </p>
      ) : (
        ''
      )}
    </header>
  );
};

export default Header;
