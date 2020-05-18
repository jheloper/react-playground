import React, { Fragment } from "react";
import "./App.css";

function FunctionApp() {
    const name = "리액트";
    return (
        <Fragment>
            Hello, <b>react</b>
            <h1>{name} 안녕!</h1>
            <h2>잘 작동하니?</h2>
        </Fragment>
    );
}

export default FunctionApp;
