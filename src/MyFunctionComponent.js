import React from "react";

const MyComponent = (props) => {
    const { name, children } = props;
    return (
        <div>
            Hi, my name is {name}.<br />
            children props is {children}.
        </div>
    );
};

MyComponent.defaultProps = {
    name: "Default name",
};

export default MyComponent;
