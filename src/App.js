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

  render() {
    return (
      <>
        <Header />
        <Main
          data={data}
          update={this.update}
          showData={this.showData}
        />
        <Footer />

        <SelectedBeast
          sendView={this.state.view}
          closing={this.closing}
          title={this.state.title}
          imageUrl={this.state.imageUrl}
          description={this.state.description}          // close={this.state.view}
        />


      </>
    )

  }

}

export default app;
