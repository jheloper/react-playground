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
                        // this.setState({ number: number + 1 });

                        // setState에 객체 대신 함수를 인자로 전달
                        // this.setState((prevState, props) => {
                        //     return {
                        //         number: prevState.number + 1,
                        //     };
                        // });
                        // 위 코드와 아래 코드는 같은 기능이지만, 아래 코드는 함수에서 바로 객체를 반환한다는 의미.
                        // this.setState((prevState, props) => ({
                        //     number: prevState.number + 1
                        // }));

                        // setState 끝난 후 실행할 콜백 함수를 2번째 인자로 전달
                        this.setState(
                            {
                                number: number + 1,
                            },
                            () => {
                                console.log("Call setState.");
                                console.log(this.state);
                            }
                        );
                    }}
                >
                    +1
                </button>
            </div>
        );
    }
}

export default Counter;
