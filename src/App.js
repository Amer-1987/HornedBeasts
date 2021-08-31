import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import SelectedBeast from "./components/SelectedBeast ";
import data from "./components/data.json";
// import HornedBeast from "./components/HornedBeast";
import 'bootstrap/dist/css/bootstrap.min.css';



class app extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      view: false,
    }


  }
  update = () => {
    this.setState({
      view: true,
    })

    
  }

  closing = () => {
    this.setState({
      view: false,
    })
  }

  render() {
    return (
      <>
        <Header />
        <Main
          data={data}
          update={this.update}
        />
        <Footer />

        <SelectedBeast
          sendView={this.state.view}
          closing={this.closing}
          // close={this.state.view}
        />


      </>
    )

  }

}

export default app;
