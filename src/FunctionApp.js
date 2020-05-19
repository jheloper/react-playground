import React, { Fragment } from "react";
import "./App.css";

function FunctionApp() {
    const name = "리액트";
    const name2 = undefined;
    return (
        <Fragment>
            Hello, <b>react</b>
            <h1>{name} 안녕!</h1>
            <h2>잘 작동하니?</h2>
            {name === "리액트" ? (
                <h1>리액트입니다.</h1>
            ) : (
                <h2>리액트가 아닙니다.</h2>
            )}
            {name === "리액트" && <h1>리액트입니다. AND 연산자 사용했을때!</h1>}
            {name2 || "값이 undefined입니다."}
        </Fragment>
    );
}

export default FunctionApp;
