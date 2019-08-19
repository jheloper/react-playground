import React, {Component, Fragment} from 'react';
import './App.css';

class App extends Component {
  render() {
    const text = '당신은 어썸한가요?';
    const condition = true;

    return (
      <Fragment>
        <h1>Hello React!</h1>
        <h2>{text}</h2>
        {condition ? '참' : '거짓'}
      </Fragment>
    );
  }
}

export default App;
