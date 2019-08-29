import React, { Component } from 'react';
import ChildComponent from './ChildComponent';

class ParentComponent extends Component {

    constructor(props) {
        super(props);
        
        this.handleChange = this.handleChange.bind(this);
        this.changeState = this.changeState.bind(this);
        
        this.state = {
            testValue: "부모 컴포넌트"
        }
    }

    handleChange(event) {
        this.setState({
            testValue: event.target.value
        })
    }

    changeState(value) {
        this.setState({
            testValue: value
        });
    }

    render() {
        return (
            <div>
                <input value={this.state.testValue} onChange={this.handleChange} />
                <ChildComponent childValue={this.state.testValue} parentState={this.changeState} parent={this}></ChildComponent>
            </div>
        );
    }
}

export default ParentComponent;