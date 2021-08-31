import React from 'react';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
 




class SelectedBeast extends React.Component {
    render() {
        return (
            <>
                <Button variant="primary" >
                    Launch demo modal
                </Button>

                <Modal show={this.props.sendView}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p> ff= {this.props.description} </p>
                        </Modal.Body> 
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.closing} >
                            Close
                        </Button>
                      
                    </Modal.Footer>
                </Modal>

            </>
        )

    }

}

export default SelectedBeast;