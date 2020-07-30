import React, { useState } from "react";

const Say = () => {
    // useState 함수로 함수형 컴포넌트에서도 state 지정 가능
    const [message, setMessage] = useState("");
    const onClickEnter = () => setMessage("Hello!");
    const onClickLeave = () => setMessage("Bye!");
    const [color, setColor] = useState("black");

    return (
        <div>
            <button onClick={onClickEnter}>Enter</button>
            <button onClick={onClickLeave}>Leave</button>
            <h1 style={{ color }}>{message}</h1>
            <button style={{ color: "red" }} onClick={() => setColor("red")}>
                Red
            </button>
            <button
                style={{ color: "green" }}
                onClick={() => setColor("green")}
            >
                Green
            </button>
            <button style={{ color: "blue" }} onClick={() => setColor("blue")}>
                Blue
            </button>
        </div>
    );
};

export default Say;
