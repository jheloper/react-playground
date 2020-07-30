import React, { Component } from "react";

class Counter extends Component {
    // constructor(props) {
    //     super(props);
    //     // state 초기값 설정
    //     this.state = {
    //         number: 0,
    //         fixedNumber: 0,
    //     };
    // }

    state = {
        number: 0,
        fixedNumber: 0,
    };

    render() {
        const { number, fixedNumber } = this.state;
        return (
            <div>
                <h1>{number}</h1>
                <h2>Fixed number: {fixedNumber}</h2>
                <button
                    onClick={() => {
                        // this.setState를 사용하여 state 변경
                        this.setState({ number: number + 1 });
                    }}
                >
                    +1
                </button>
            </div>
        );
    }
}

export default Counter;
