import React from 'react';
import { Route } from 'react-router-dom';
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
      </div>
    );
  }
}
export default Router;
