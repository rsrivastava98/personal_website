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


class Footer extends Component {

  constructor(props){
      super(props)
  }
  render() {
    return (
        <Container fluid className = "footer">

        <Container fluid style={{paddingTop: "2rem"}}>
          <h3>Let's Chat!</h3>
          
        </Container>

        <Container>
            <p style={{fontSize: "20px"}}>Would be happy to talk about anything and everything 
            <span role="img" aria-label="smile" aria-hidden = "false" style = {{verticalAlign: "middle"}}> 😊</span>

            </p>
            <Button className = 'icon-phone' href= "https://calendly.com/rudrasrivastava98/30min"> Schedule <FontAwesomeIcon  icon={faPhone}/></Button>

            <ScrollToTop showUnder={0} duration={1000}>
                <span><FontAwesomeIcon className = 'scroll' icon={faArrowUp} size='2x'/></span>
            </ScrollToTop>

            <p style = {{fontSize: "14px", paddingBottom: "2rem", paddingTop: '2rem', margin:0}}> © 2020 Rudra Srivastava. All Rights Reserved.</p>
        </Container>

        </Container>
    );
  }
}

export default Footer;