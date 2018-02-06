import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './App';
import Search from './Search';

import './index.css';
import registerServiceWorker from './registerServiceWorker';

const Root = () => (
  <Router>
    <div>
      <Route path="/" component={App} />
      <Route exact path="/search" component={Search} />
    </div>
  </Router>
);

render(<Root />, document.getElementById('root'));
registerServiceWorker();

if (module.hot) {
  module.hot.accept();
}
