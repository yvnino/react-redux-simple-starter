import React from 'react';
import { Route } from 'react-router-dom';
import Toaster from './components/Toaster';
import App from './components/App';

import './style/app.sass';

class Router extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="appContainer">
          <Route path="/" component={ App } />
        </div>
        <Toaster />
      </div>
    );
  }
}
export default Router;
