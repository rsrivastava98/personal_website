import React, { Component , Fragment} from "react";
import About from "./About"
import Home from "./Home"
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'

import Button from 'react-bootstrap/Button'

import guitar from './guitar.png';
import CV from './shanghaitech.png'
import newplot from './newplot.png'
import football from './football.jpeg'
import ml from './ml.jpg'
import Emoji from './Emoji'
import game from "./game.png"

import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import { 
    BrowserRouter as Router, 
    Route, 
    Link, 
    Switch,
    withRouter
} from 'react-router-dom'; 

export const images = {

    "Guitar Center": guitar,
    "Football Dashboard": football,
    "Government Policy Impact on the Coronavirus": newplot,
    "Crowd Counting": CV,
    "Computing Cluster User Management": ml,
    "Contact": game

}


class Projects extends Component {


  constructor(props){
      super(props)
      
  }


  createRow = (projects) => {
    
    return(
    <CardDeck className = "cards">

        {projects.map(function(project){

                return <Card  className = "card">
                    <a href = {project.url}>
                    <Card.Img className = "card-img" variant = 'top' src = {images[project.description]}/>
                <Card.Body>
                    <Card.Title>{project.description} <Emoji label = {project.description} emoji = {project.emoji}/></Card.Title>
                    <Card.Text>
                    {project.short}
                    </Card.Text>
                </Card.Body>
                
                    </a>
                    </Card>
                
        }
        )}

    </CardDeck>)


  }

  createProjects = () => {
      var arr = []
      for(var i = 0; i < this.props.projects.length; i=i+3){
          
        arr.push(this.createRow(this.props.projects.slice(i, i+3)))
          
      }

      return(arr)
  }




  render() {
    return (
        <Container fluid className = "projects">

        <Container fluid className="projects-header">
          <h2>Here is my work so far  <Emoji emoji = "📖" label = "projects" /></h2>
          
        </Container>

        <Container className = 'projects-contents'>

        {this.createProjects()}
        
        </Container>

        </Container>


      
    );
  }
}

export default Projects;
