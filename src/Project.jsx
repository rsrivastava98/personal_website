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

import profile from './profile.jpg';

import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { 
    BrowserRouter as Router, 
    Route, 
    Link, 
    Switch,
    withRouter
} from 'react-router-dom'; 


class Projects extends Component {

  constructor(props){
      super(props)
  }

  createRow = (projects) => {

    return(
    <CardDeck className = "cards">

        {projects.map(function(project){

                return <Card  className = "card">
                <Card.Body>
                    <Card.Title>{project.description}</Card.Title>
                    <Card.Text>
                    {project.short}
                    </Card.Text>
                    <Link to = {project.url}>
                    <Button variant = 'info'>View</Button>
                    </Link>
                </Card.Body>
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
        <Container className = "projects">

        <Container fluid className="projects-header">
          <h2>Projects </h2>
          
        </Container>

        <Container>

        {this.createProjects()}
        
        </Container>

        </Container>


      
    );
  }
}

export default Projects;
