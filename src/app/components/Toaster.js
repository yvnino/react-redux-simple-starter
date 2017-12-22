
import React, { Component } from 'react';
import AlertContainer from 'react-alert';
import { connect } from 'react-redux';
import Ionicon from 'react-ionicons';

class Toaster extends React.Component {
    constructor(props) {
        super(props)

        this.showAlertSuccess = this.showAlertSuccess.bind(this);
        this.showAlertFail = this.showAlertFail.bind(this);
    }

    componentWillReceiveProps(nextProps) {
   
        if(nextProps.toasterState.showSuccessMsg){
            this.showAlertSuccess(nextProps.toasterState.msg);
           
        }
        else if(nextProps.toasterState.showFailMsg){
            this.showAlertFail(nextProps.toasterState.msg);
        }
       
    }

    showAlertSuccess(msg) {   
        this.msg.show(msg, {
            time: 4000,
            type: 'success',
            icon: <Ionicon icon="md-checkmark" color="#5cb85c" fontSize="35px" beat={true}/>
        })
    }
    showAlertFail(msg) {   
        this.msg.show(msg, {
            time: 20000,
            type: 'error',
            icon: <Ionicon icon="ios-close-circle-outline" color="#d9534f" fontSize="35px" beat={true}/>
        })
    }

    render() {
        const alertOptions = {
            offset: 14,
            position: 'top right',
            theme: 'light',
            time: 5000,
            transition: 'scale'
        }
        return (
            <div className="Toaster">
                <AlertContainer ref={a => this.msg = a} {...alertOptions} />
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        toasterState: state.toasterReducer
    }
}

Toaster = connect(mapStateToProps)(Toaster)
export default Toaster;