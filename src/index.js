import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import App from './App';
import SearchArtists from './SearchArtists';
import SearchTracks from './SearchTracks';

import './index.css';
import registerServiceWorker from './registerServiceWorker';

const Root = () => (
  <Router>
    <Switch>
      <Route path="/search/artists" component={SearchArtists} />
      <Route path="/search/tracks" component={SearchTracks} />
      <Route path="/authorized" component={SearchArtists} />
      <Route path="/" component={App} />
    </Switch>
  </Router>
);

render(<Root />, document.getElementById('root'));
registerServiceWorker();

if (module.hot) {
  module.hot.accept();
}
