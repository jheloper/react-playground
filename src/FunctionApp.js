import React, { Fragment } from "react";
// import MyFunctionComponent from "./MyFunctionComponent";
// import MyClassComponent from "./MyClassComponent";
import Counter from "./Counter";
import Say from "./Say";

const App = () => {
    return (
        // <MyClassComponent name="React" favoriteNumber={1}>
        //     React
        // </MyClassComponent>
        <Fragment>
            <Counter />
            <Say />
        </Fragment>
    );
};

export default App;
