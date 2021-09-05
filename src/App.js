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

      title:'',
      imageUrl:'',
      description:'',

      hornsData: data,

    }
  }

  showData = (title,imageUrl,description)=>{
    this.setState({
      title:title,
      imageUrl:imageUrl,
      description:description,
    })


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

  updatingFilterData = (filteredData) => {
    this.setState({
      hornsData: filteredData,

    })

  }





  render() {
    return (
      <>
        <Header />

  
        <Main
          data={this.state.hornsData}
          update={this.update}

          showData={this.showData}

          updatingFilterData={this.updatingFilterData}

        />
        <Footer />

        <SelectedBeast
          sendView={this.state.view}
          closing={this.closing}

          title={this.state.title}
          imageUrl={this.state.imageUrl}
          description={this.state.description}          // close={this.state.view}

        // close={this.state.view}

        />


      </>
    )

  }

}

export default app;
