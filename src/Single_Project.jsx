import React, { Component } from "react";
import Header from "./Header";
import About from "./About";
import Projects from "./Project";
import Counter from "./Counter";
import FilteredList from "./FilteredList"
import Container from 'react-bootstrap/Container'

class Project extends Component {
  constructor(props){
      super(props)
  }
    
  render() {
    return (
        <div className="App">
        <Header/>
        <h2 className = 'single-project-header'>{this.props.project.description}</h2>
        <Container>

        </Container>
        </div>
    );
  }
}

export default Project;
