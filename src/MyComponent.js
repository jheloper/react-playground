import React, { Component } from "react";
import ParentComponent from "./ParentComponent";

class MyComponent extends Component {
  render() {
    return (
      <div>
        This is My Component. My name is {this.props.name}.
        <br/>
        {this.props.description}
        <ParentComponent></ParentComponent>
      </div>
    );
  }
}

MyComponent.defaultProps = {
  name: "Default Name",
  description: "This is default props example description."
}

export default MyComponent;
