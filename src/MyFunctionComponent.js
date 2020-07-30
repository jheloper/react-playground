import React from "react";
import PropTypes from "prop-types";

// 비구조화 할당 문법을 함수 파라미터 부분에 적용
const MyComponent = ({ name, children }) => {
    return (
        <div>
            Hi, my name is {name}.<br />
            children props is {children}.
        </div>
    );
};

// props 기본값 설정
MyComponent.defaultProps = {
    name: "Default name",
};

// propTypes로 props 검증
MyComponent.propTypes = {
    name: PropTypes.string
};

export default MyComponent;
