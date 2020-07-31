import React, { Component } from "react";

class EventPractice extends Component {
    state = {
        message: "",
    };

    render() {
        return (
            <div>
                <h1>Event Practice</h1>
                <input
                    type="text"
                    name="message"
                    placeholder="Input anything"
                    value={this.state.message}
                    onChange={(e) => {
                        console.log(e.target.value);
                        this.setState({ message: e.target.value });
                    }}
                ></input>
            </div>
        );
    }
}

export default EventPractice;
