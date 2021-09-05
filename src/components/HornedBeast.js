import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from "react-bootstrap/Col";

class HornedBeast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            vote: 0

        }
    }

    votingProcess = () => {
        console.log('hi');

        this.setState({
            vote: this.state.vote + 1
        })

        this.props.update();
        this.props.showData(this.props.title, this.props.imageUrl, this.props.description);


        
    }


    

    render() {

        return (
            <>
                <Col>
                    <Card style={{ width: '18rem' }}
                    bg="dark"
                    text="light"
                    onClick={this.votingProcess}
                    >
                        <Card.Img variant="top" src={this.props.imageUrl} 
                         />
                        <Card.Body>
                            <Card.Title>{this.props.title} </Card.Title>
                            <Card.Text>
                               <p> vote 💜 : {this.state.vote}</p> 
                               <p> {this.props.description} </p>
                            </Card.Text>

                           

                            <Card.Text>
                               <p> horns 🦄 : {this.props.horns}</p> 
                               
                            </Card.Text>
                            <Button variant="primary" onClick={this.props.update}> Showing Details</Button>

                        </Card.Body>
                    </Card>
                </Col>
            </>
        )
    }

}
export default HornedBeast;