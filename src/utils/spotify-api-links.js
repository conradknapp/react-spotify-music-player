const BASE_URL = `https://accounts.spotify.com/authorize`;
const CLIENT_ID = `8f410684b7f04b249085e71fee297086`;
const REDIRECT_URI = `http://localhost:3001/authorized`;

// used to get access token to make get requests to Spotify API
export const spotifyAuthUrl = `${BASE_URL}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=token`;

// used to retrieve Spotify user information
export const userAuthUrl = `https://api.spotify.com/v1/me`;

export const spotifySearchUrl = `https://api.spotify.com/v1/search`;
