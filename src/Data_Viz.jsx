import React, { Component } from "react";
import main from "./main.js";
import './main.css'
import * as d3 from "d3";
import football from './football.csv'
import locations from './latlong2.csv'
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Emoji from './Emoji'


class Data_Viz extends Component {

    constructor(props){
        super(props)
    }
    componentDidMount(){
        main(d3, football, locations)
        
   }
  render() {
    return (
        <Container fluid className = "single-project-container">

            <div className = 'hidden-div' style = {{textAlign: "left", marginTop : '2rem'}}>
            <p>A Dashboard showing Football Data for nations across the years. Visualizations only visible on wide screen <Emoji label = "sad" emoji = "😔"/> </p>
            </div>

            <div className = 'viz-info-div' style = {{textAlign: "left", marginTop : '2rem'}}>
            <p>(Might take a bit to load) </p>
            </div>

            <Row className = 'data-viz' style = {{marginTop : '2rem'}}>
            
            <Col sm={12} md = {12} lg = {6}>
                <div id = "filter"> 
                    <label>Set Year: </label><select id="selectButton" className = "select"></select>
                </div>
                

                <div id="graph1"></div>
                <div id="graph2"></div>
            </Col>
            <Col sm={12} md = {12} lg = {6}>

                <div id = "filter-1">
                <label>Set Top Teams: </label><select id="selectButton2" className = "select"></select>
                <label>Set Min. Number of Games: </label><select id="selectButton3" className = "select"></select>
                </div>
                
                <div id="graph3"></div>
            </Col>
        
        <Container fluid style = {{marginTop: "2rem", textAlign: "center"}}>
            <p>Sources: Data from Kaggle Football Dataset <a href = "https://www.kaggle.com/martj42/international-football-results-from-1872-to-2017">here</a>. Image from <a href = "https://www.mlssoccer.com/post/2014/09/21/new-york-city-fcs-frank-lampard-scores-dramatic-goal-vs-chelsea-manchester-city">MLS</a></p>
        </Container>
        </Row>

        </Container>


        
    );
  }
}

export default Data_Viz;
