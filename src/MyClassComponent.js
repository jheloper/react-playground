import React, { Component } from "react";
import PropTypes from "prop-types";

class MyClassComponent extends Component {
    render() {
        const { name, favoriteNumber, children } = this.props; // 비구조화 할당
        return (
            <div>
                Hi, my name is {name}.<br />
                Children props is {children}.<br />
                My favorite number is {favoriteNumber}.
            </div>
        );
    }
}

MyClassComponent.defaultProps = {
    name: "Default name",
};

MyClassComponent.propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired,
};

export default MyClassComponent;
