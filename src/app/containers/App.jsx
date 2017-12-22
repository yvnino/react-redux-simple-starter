import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as StyleActions from '../actions/StyleActions.js';
import Ionicon from 'react-ionicons';
import { Button } from 'react-bootstrap';
import bootsrap from 'bootstrap/dist/css/bootstrap.css';
import SimpleModal from '../components/SimpleModal.jsx';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            modalOpen: false
        };
    }

    componentDidMount() {
        //get style from action
        this.props.actions.getAppStyle();
    }

    toggleModal = () => {
        this.setState({ modalOpen: !this.state.modalOpen });
    }

    render() {
        return (
            <div className='appContainer' style={{ display: 'flex', flexDirection: 'column', ...this.props.appStyle }}>
                <div style={{ display: 'flex', flexDirection: 'row', marginLeft: '40px' }}>
                    <Ionicon icon="ios-locate-outline" color="#5cb85c" fontSize="35px" className="pointer" /><h4>{'Sample React Rudux Starter'}</h4>
                </div>
                <div>                
                    <Button onClick={this.toggleModal}>Modal</Button>
                </div>                
                <SimpleModal modal={this.state.modalOpen} onClose={() => this.setState({ modalOpen: false })} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    const appStyle = Object.assign({}, state.styleReducer['appStyle']);

    return {
        appStyle
    }
}


function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({ ...StyleActions }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);