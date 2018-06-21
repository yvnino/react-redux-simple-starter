import React from 'react';
import PropTypes from 'prop-types';
// import { Button } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as BaseActions from '../actions/BaseActions';

export class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  handleSyncClick = () => {
    this.props.actions.setTextSync('text');
  }

  handleAsyncClick = () => {
    this.props.actions.setTextAsync();
  }

  render() {
    return (
      <div>
        <div style={ { color: '#fff' } } >Loaded!</div>
        <div>
          <button variant="contained" color="secondary" id="SetTextSyncButton" onClick={ this.handleSyncClick }>
            SetTextSync
          </button>
        </div>
        <div>
          <button variant="contained" color="primary" id="SetTextAsyncButton" onClick={ this.handleAsyncClick }>
            SetTextAsync
          </button>
        </div>
        <div style={ { color: '#fff' } }>
          {this.props.text}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    text: state.baseReducer.text
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({ ...BaseActions }, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

App.defaultProps = {
  text: null
};

App.propTypes = {
  actions: PropTypes.object.isRequired,
  text: PropTypes.string
};

