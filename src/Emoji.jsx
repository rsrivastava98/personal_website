import React, { Component } from "react";


class Emoji extends Component {

    constructor(props){
        super(props)
    }
  render() {
    return (
        <span role="img" aria-label= {this.props.label} aria-hidden = "false" style = {{verticalAlign: "middle"}}>{this.props.emoji}</span>
    );
  }
}

export default Emoji;
