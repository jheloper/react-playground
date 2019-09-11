import React, { Component } from "react";
import ParentComponent from "./ParentComponent";
import PropTypes from "prop-types";

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

MyComponent.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string
}

export default MyComponent;
