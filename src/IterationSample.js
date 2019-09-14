import React, { Component } from "react";

class IterationSample extends Component {
  render() {
    const names = ["Tom", "Jane", "Thomas", "Kate"];
    const nameList = names.map(function(name) {
      return <li>{name}</li>;
    });

    return <ul>{nameList}</ul>;
  }
}

export default IterationSample;
