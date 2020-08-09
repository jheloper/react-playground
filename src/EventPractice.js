import React, { Component } from "react";

class EventPractice extends Component {
    state = {
        username: "",
        message: "",
    };

    handleChange = (e) => {
        console.log(e);
        this.setState({ [e.target.name]: e.target.value });
    };

    handleClick = () => {
        alert(this.state.username + ": " + this.state.message);
        this.setState({ username: "", message: "" });
    };

    handleKeyPress = (e) => {
        if (e.key === "Enter") {
            this.handleClick();
        }
    };

    render() {
        return (
            <div>
                <h1>Event Practice</h1>
                <input
                    type="text"
                    name="username"
                    placeholder="User name"
                    value={this.state.username}
                    onChange={this.handleChange}
                ></input>
                <input
                    type="text"
                    name="message"
                    placeholder="Input anything"
                    value={this.state.message}
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress}
                ></input>
                <button onClick={this.handleClick}>확인</button>
            </div>
        );
    }
}

export default EventPractice;
