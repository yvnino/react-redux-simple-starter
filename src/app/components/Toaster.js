
import React from 'react';
import PropTypes from 'prop-types';
import AlertContainer from 'react-alert';
import { connect } from 'react-redux';
import Ionicon from 'react-ionicons';

class Toaster extends React.Component {
  constructor(props) {
    super(props);
    this.showAlertSuccess = this.showAlertSuccess.bind(this);
    this.showAlertFail = this.showAlertFail.bind(this);
    this.msg = null;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.toasterState.showSuccessMsg) {
      this.showAlertSuccess(nextProps.toasterState.msg);
    } else if (nextProps.toasterState.showFailMsg) {
      this.showAlertFail(nextProps.toasterState.msg);
    }
  }

  showAlertSuccess(msg) {
    const toBeat = true;

    this.msg.show(msg, {
      time: 4000,
      type: 'success',
      icon: <Ionicon icon="md-checkmark" color="#5cb85c" fontSize="35px" beat={ toBeat } />
    });
  }
  showAlertFail(msg) {
    const toBeat = true;
    
    this.msg.show(msg, {
      time: 20000,
      type: 'error',
      icon: <Ionicon icon="ios-close-circle-outline" color="#d9534f" fontSize="35px" beat={ toBeat } />
    });
  }

  render() {
    const alertOptions = {
      offset: 14,
      position: 'top right',
      theme: 'light',
      time: 5000,
      transition: 'scale'
    };

    return (
      <div className="Toaster">
        <AlertContainer ref={ (a) => { this.msg = a; } } { ...alertOptions } />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    toasterState: state.toasterReducer
  };
};

Toaster.defaultProps = {
  toasterState: {}
};

Toaster.propTypes = {
  toasterState: PropTypes.object
};


const toaster = connect(mapStateToProps)(Toaster);

export default toaster;
