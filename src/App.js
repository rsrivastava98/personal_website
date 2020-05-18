import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import About from "./About";
import Projects from "./Project";
import Counter from "./Counter";
import FilteredList from "./FilteredList"
import Container from 'react-bootstrap/Container'
import Home from './Home'
import Project from "./Single_Project"
import { 
    BrowserRouter as Router, 
    Route, 
    Link, 
    Switch,
    withRouter
} from 'react-router-dom'; 




class App extends Component {

  projects = [
        {"url": "/projects/coronavirus", "description": "Government Policy Impact on the Coronavirus", "short": "A Data Science perspective", "emoji": "🦠" },
        {"url": "/projects/guitar", "description": "Guitar Center", "short":  "A simple web interface to search and filter for guitars", "emoji": "🎸"},
        {"url": "/projects/crowd", "description": "Crowd Counting", "short":  "Crowd Capacity estimation using Computer Vision and CNNs", "emoji": "👪"},
        {"url": "/projects/football", "description": "Football Dashboard", "short":  "Data Driven Visualizations for Football", "emoji": "⚽"},
        {"url": "/projects/ccv", "description": "Computing Cluster User Management", "short":  "A tool to help manage the large user base at the CCV ", "emoji": "🖥️"},
        {"url": "/projects/contact", "description": "Contact", "short":  "A fun multiplayer online game", "emoji": "🎮"}

       
  ]

  render() {
    return (
        
        <Router>

        <Route exact path = '/' render = {(props) => <Home projects = {this.projects} {...props}/>}></Route>

            {this.projects.map(function(project){
                return <Route path = {project.url} render = {(props) => <Project project = {project} {...props}/>}></Route>;
            }
            )}
            
        </Router>
    );
  }
}

export default App;
