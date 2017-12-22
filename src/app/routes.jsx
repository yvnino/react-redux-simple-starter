import React from 'react';
import { Route, Switch, Redirect} from 'react-router-dom';
import App from './containers/App.jsx';
import Toaster from './components/Toaster.js';
import Navbar from './components/Navbar.jsx';

import css from './style/app.css';

class Router extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Router">
        <div className='navbarElm'>
            <Navbar />
        </div>
        <div className='appContainer'>
            <Route path="/" component={App} />
        </div>
        <Toaster />
      </div>
    );

  }
}
export default Router;