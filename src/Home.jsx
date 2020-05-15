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

        <Container fluid className = 'hi'>
            <Container fluid className = 'hi-header'>
                <h1>Hi there <span role="img" aria-label="thought" aria-hidden = "false" style = {{verticalAlign: "middle"}}> 👋 </span></h1>
            </Container>
            <Container >
                <p>I am a Rudra <span role="img" aria-label="thought" aria-hidden = "false" style = {{verticalAlign: "middle"}}> 👨🏽‍💻 </span> I am a rising senior at Brown University <span role="img" aria-label="thought" aria-hidden = "false" style = {{verticalAlign: "middle"}}> 🐻 </span> ‍concentrating in Computer Science-Economics, passionate about Software, Fintech and Product Management! I interned at Oracle last summer as a Software Engineer on the Oracle Analytics Team and will be joining Square <span role="img" aria-label="thought" aria-hidden = "false" style = {{verticalAlign: "middle"}}> ◼️ </span>as a Software Engineer Intern on the Business Operations Platforms team this summer!  </p>
            </Container>
        </Container>


        <Projects projects = {this.props.projects}/>

        <Container fluid className = 'blog'>
            <Container fluid className = 'blog-header'>
                <h2>These are my thoughts <span role="img" aria-label="thought" aria-hidden = "false" style = {{verticalAlign: "middle"}}> 💭 </span></h2>
            </Container>
            <Container fluid>
                <p>I enjoy writing about tech, food, soccer, personal finance and culture. Check out  my latest pieces <a href = 'https://medium.com/@rudra_srivastava'>here</a></p>
            </Container>
        </Container>
        

        <About/>

        <Footer/>

        

      </div>
    );
  }
}

export default Home;
