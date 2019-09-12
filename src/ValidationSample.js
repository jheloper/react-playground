import React, { Component } from "react";
import "./ValidationSample.css";

class ValidationSample extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.inputReference = this.inputReference.bind(this);

    this.state = {
      password: "",
      clicked: false,
      validated: false
    };
  }

  handleChange(event) {
    this.setState({
      password: event.target.value
    });
  }

  handleButtonClick(event) {
    this.setState({
      clicked: true,
      validated: this.state.password === "0000"
    });
    this.input.focus();
  }

  inputReference(ref) {
    this.input = ref;
  }

  render() {
    return (
      <div>
        <input
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
          className={
            this.state.clicked
              ? this.state.validated
                ? "success"
                : "failure"
              : ""
          }
          ref={this.inputReference}
        ></input>
        <button onClick={this.handleButtonClick}>검증하기</button>
      </div>
    );
  }
}

export default ValidationSample;
