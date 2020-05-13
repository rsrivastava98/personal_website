import React, { Component } from "react";
import Header from "./Header";
import About from "./About";
import Projects from "./Project";
import Counter from "./Counter";
import FilteredList from "./FilteredList"
import Container from 'react-bootstrap/Container'

class Home extends Component {

  constructor(props){
      super(props)
  }
  render() {
    return (
        <div className="App">
        <Header/>

        <About/>

        <Projects projects = {this.props.projects}/>

      </div>
    );
  }
}

export default Home;
