import React from 'react';

const ArtistResults = ({ results }) => {
  const artistResults = results ? results.artists.items : '';
  return (
    <ul>
      {artistResults
        ? artistResults.map((el, i) => (
            <li key={i}>
              <a href={el.external_urls.spotify}>{el.name}</a>
              <img src={el.images[1] ? el.images[1].url : ''} alt={el.name} />
            </li>
          ))
        : ''}
    </ul>
  );
};

export default ArtistResults;
