import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
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
          <Button variant="contained" color="secondary" id="SetTextSyncButton" onClick={ this.handleSyncClick }>
            SetTextSync
          </Button>
        </div>
        <div>
          <Button variant="contained" color="primary" id="SetTextAsyncButton" onClick={ this.handleAsyncClick }>
            SetTextAsync
          </Button>
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

