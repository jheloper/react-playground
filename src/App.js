import React, {Component} from 'react';
import './App.css';

class App extends Component {
  render() {
    const text = 'Are you awesome?';
    const condition = true;
    const style = {
      backgroundColor: 'gray',
      border: '1px solid black',
      height: Math.round(Math.random() * 300) + 50,
      width: Math.round(Math.random() * 300) + 50,
      WebkitTransition: 'all',
      MozTransition: 'all',
      msTransition: 'all'
    }

    return (
      <div className="my-div">
        <h1>Hello React!</h1>
        <h2>{text}</h2>
        {condition ? 'True' : 'False'}
        {condition && 'Show me'}
        <div style={style}></div>
        <form>
          { /* this is comment in JSX */ }
          Your name:<br
          // this is comment in JSX element.
          /* also this. */
          />
          <input type="text" name="yourname"
          // JSX 내에서는 반드시 태그를 닫아야 함. input, br 요소 등등...
          />
        </form>
      </div>
    );
  }
}

export default App;
