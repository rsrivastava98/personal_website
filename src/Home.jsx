import React, { Component } from "react";
import Header from "./Header";
import About from "./About";
import Projects from "./Project";
import Counter from "./Counter";
import FilteredList from "./FilteredList"
import Container from 'react-bootstrap/Container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

import Button from 'react-bootstrap/Button'
import ScrollToTop from 'react-scroll-up'
import Footer from './Footer'


class Home extends Component {

  constructor(props){
      super(props)
  }
  render() {
    return (
        <div className="App">
        <Header/>

        <About/>

        <Container fluid className = 'blog'>
            <Container fluid className = 'blog-header'>
                <h2>These are my thoughts <span role="img" aria-label="thought" aria-hidden = "false" style = {{verticalAlign: "middle"}}> 💭 </span></h2>
            </Container>
            <Container fluid>
                <p>I enjoy writing about tech, food, soccer, personal finance and culture. Check out  my latest pieces <a href = 'https://medium.com/@rudra_srivastava'>here</a></p>
            </Container>
        </Container>
        
        
        <Projects projects = {this.props.projects}/>

        <Footer/>

        

      </div>
    );
  }
}

export default Home;
