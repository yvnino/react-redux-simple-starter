import React, { Component } from 'react';
import { Button, Modal} from 'react-bootstrap';
import GoogleMapReact from 'google-map-react';

class FormModal extends React.Component {
    constructor(props) {
        super(props);
    }

    onCancel = ()=>{
        this.props.onClose();
    }

    renderModalBody = () => {
            return(
                <div>
                <div>
                    <h2>Simple Modal</h2>
                </div>
            </div>
            )
    }

    render() {
            return (
                <Modal show={this.props.modal} >
                    <Modal.Header>MODAL</Modal.Header>
                    <Modal.Body >
                        {this.renderModalBody()}
                    </Modal.Body>
                    <Modal.Footer >
                        <Button className="pointer" color="secondary" onClick={this.onCancel}>Close</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default FormModal;