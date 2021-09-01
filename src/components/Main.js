import React from "react";
import HornedBeast from "./HornedBeast";
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
// import SelectedBeast from "./SelectedBeast ";
import Form from "react-bootstrap/Form"

class Main extends React.Component {

    filtring = (e) => {

        let horns= parseInt(e.target.value)
            console.log(horns);
        let newHornsArr = this.props.data.filter(item => item.horns === horns);
        this.props.updatingFilterData(newHornsArr);
      
        console.log(this.props);
        console.log(newHornsArr);
return (newHornsArr)

    }


    render() {
        return (
            <>

                <Form>
                    <Form.Label>How many Horns?</Form.Label>

                    <Form.Control as='select' onChange={this.filtring} aria-label="Default select example">
                        <option>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                        <option value="100">woow</option>

                    </Form.Control>

                    {/* <Button variant="primary" type="submit">
                    Submit
                </Button> */}
                    <br />
                    <br />

                    <br />

                </Form>

                <Row xs={1} md={5} className="g-4">

                    {
                        this.props.data.map((item) => {
                            return (
                                <>
                                    <HornedBeast
                                        title={item.title}
                                        imageUrl={item.image_url}
                                        description={item.description}
                                        horns={item.horns}

                                        update={this.props.update}

                                    />
                                    {/* <SelectedBeast

                                        title={item.title}
                                        imageUrl={item.image_url}
                                        description={item.description} */}
                                    {/* /> */}
                                </>
                            )

                        })
                    }
                </Row>
            </>



        )
    }
}
export default Main;





