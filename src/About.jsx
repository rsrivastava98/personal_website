import React, { Component } from "react";
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'


import profile from './profile.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'




class About extends Component {

  download = () => {

    fetch('http://localhost:3000/resume.pdf')
    .then(response => {
        console.log(response)

        response.blob().then(blob => {

            var newBlob = new Blob([blob], {type: "application/pdf"})

            if (window.navigator && window.navigator.msSaveOrOpenBlob) {
                        window.navigator.msSaveOrOpenBlob(newBlob);
                        return;
            } 

            let url = window.URL.createObjectURL(newBlob);
            let a = document.createElement('a');
            a.href = url;
            a.download = "resume.pdf";
            a.click();
            setTimeout(function(){
                window.URL.revokeObjectURL(url);
            }, 100);
                });
  });
}

    

  render() {
    return (
      <Container className="about">
          <Row>
                <Col xs = {12} md = {12} lg = {6}>
                <Image src={profile} className="profile" alt='profile' rounded/>
                </Col>
                <Col xs = {12} md = {12} lg = {6} className = "bio">
                <h3>About Me <span role="img" aria-label="man" aria-hidden = "false" style = {{verticalAlign: "middle"}}> 👨‍💻 </span></h3>
                <p>I grew up in Bhopal, India however spent 6 years of my life boarding at the Doon School in the foothills of the Indian Himalayas before moving to Providence, RI.
                 Catch me at rehearsal for Brown Barsaat, Brown's premier south asian fusion acapella group, on the soccer field playing or indoors watching a game, or at your nearest Indian restaurant (Kebab and Curry for brown students!) </p>
                <Container>
                    <a href = "https://www.linkedin.com/in/rudra-srivastava1998" className = 'icon'><FontAwesomeIcon icon={faLinkedin} size="2x"/></a>
                    <a href = "https://www.instagram.com/rsrivastava98" className = 'icon'><FontAwesomeIcon icon={faInstagram} size="2x"/></a>
                    <a href = "https://www.facebook.com/rsrivastava98" className = 'icon'><FontAwesomeIcon icon={faFacebook} size="2x"/></a>
                    <a href = "mailto:rudrasrivastava98@gmail.com" className = 'icon'><FontAwesomeIcon icon={faEnvelope} size="2x"/></a>
                    <Button onClick = {() => this.download()} className='resume'>Resume</Button>
                </Container>
                
                </Col>
          </Row>
       

      </Container>
    );
  }
  
}

export default About;
