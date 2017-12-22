import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Ionicon from 'react-ionicons';
// import { connect } from 'react-redux';

import css from '../style/navbar.css';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="nav-bar">
          <nav>
            <Link to='/'><div title='Home'><Ionicon icon="ios-locate-outline" color="#5cb85c" fontSize="35px" className="pointer" /></div></Link>
          </nav>
        </div>
      </div>
    );
  }

}


export default Navbar;