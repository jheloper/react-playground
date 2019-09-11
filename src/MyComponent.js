import React, { Component } from "react";
import ParentComponent from "./ParentComponent";

class MyComponent extends Component {
  render() {
    return (
      <div>
        This is My Component. My name is {this.props.name}.
        <ParentComponent></ParentComponent>
      </div>
    );
  }
}

export default MyComponent;
