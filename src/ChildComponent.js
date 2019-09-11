import React, { Component } from "react";

class ChildComponent extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.parent.setState({
      testValue: event.target.value
    });
  }

  render() {
    return <input value={this.props.childValue} onChange={this.handleChange} />;
  }
}

export default ChildComponent;
