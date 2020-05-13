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
        {"url": "/coronavirus", "description": "Coronavirus Dashboard", "short": "Data Driven Visualisations about the Virus"},
        {"url": "/guitar", "description": "Guitar Center", "short":  "A simple web interface to search and filter for guitars"},
        {"url": "/crowd", "description": "Crowd Counting", "short":  "Crowd Capacity estimation using Computer Vision and CNNs"}

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
