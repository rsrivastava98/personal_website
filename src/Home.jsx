import React, { Component } from "react";
import Header from "./Header";
import About from "./About";
import Projects from "./Project";
import Counter from "./Counter";
import FilteredList from "./FilteredList"
import Container from 'react-bootstrap/Container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import Button from 'react-bootstrap/Button'


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

        <Container className = "footer">

        <Container fluid>
          <h3>Let's Chat!</h3>
          
        </Container>

        <Container>
            <p style={{fontSize: "20px", verticalAlign: "center"}}>Would be happy to chat about anything and everything 
            <span role="img" aria-label="smile" aria-hidden = "false"> 😊</span>

            </p>
            <Button className = 'icon-phone' href= "https://calendly.com/rudrasrivastava98/30min"> Schedule <FontAwesomeIcon  icon={faPhone}/></Button>
        </Container>

        </Container>

      </div>
    );
  }
}

export default Home;
