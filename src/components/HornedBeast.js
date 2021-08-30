import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

class HornedBeast extends React.Component {
constructor(props){
 super(props);
 this.state={
    vote : 0
 }  
}

votingProcess = () => {
    console.log('hi');

    this.setState({
        vote : this.state.vote + 1
    })
}
render() {

        return (
            <>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.imageUrl} onClick={this.votingProcess} />
                    <Card.Body>
                        <Card.Title>{this.props.title} </Card.Title>
                        <Card.Text>
                        vote 💜 : {this.state.vote}
                        
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </>
        )
    }

}
export default HornedBeast;