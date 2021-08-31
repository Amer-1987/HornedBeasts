import React from "react";
import HornedBeast from "./HornedBeast";
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import SelectedBeast from "./SelectedBeast ";

class Main extends React.Component {





    render() {
        return (
            <>
                <Row xs={1} md={3} className="g-4">

                    {
                        this.props.data.map((item) => {
                            return (
                                <>
                                    <HornedBeast
                                        title={item.title}
                                        imageUrl={item.image_url}
                                        description={item.description}
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





