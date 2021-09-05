import React from 'react';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
 




class SelectedBeast extends React.Component {
    render() {
        return (
            <>
               

                <Modal  show={this.props.sendView} onHide={this.props.closing}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        
                        
                       <img src= {this.props.imageUrl} alt={this.props.title} />
                        <p>{this.props.description} </p>
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