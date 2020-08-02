import React, { Component } from "react";

class EventPractice extends Component {
    state = {
        message: "",
    };

    handleChange = (e) => {
        console.log(e);
        this.setState({ message: e.target.value });
    };

    handleClick = () => {
        alert(this.state.message);
        this.setState({ message: "" });
    }

    render() {
        return (
            <div>
                <h1>Event Practice</h1>
                <input
                    type="text"
                    name="message"
                    placeholder="Input anything"
                    value={this.state.message}
                    onChange={this.handleChange}
                ></input>
                <button onClick={this.handleClick}>확인</button>
            </div>
        );
    }
}

export default EventPractice;
