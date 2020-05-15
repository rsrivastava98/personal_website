import React, { Component } from "react";
import Header from "./Header";
import About from "./About";
import Projects from "./Project";
import Counter from "./Counter";
import FilteredList from "./FilteredList"
import Container from 'react-bootstrap/Container'
import data from './data'
import Emoji from './Emoji'

class Project extends Component {
  constructor(props){
      super(props)
  }

  componentDidMount() {
    window.scrollTo(0, 0);
 }
    
  render() {
    return (
        <div className="App">
        <Header/>
        <h2 className = 'single-project-header'>{this.props.project.description} <Emoji label = {this.props.project.description} emoji = {this.props.project.emoji}/></h2>
        <Container fluid>
        {data[this.props.project.description]}
        </Container>
        </div>
    );
  }
}

export default Project;
