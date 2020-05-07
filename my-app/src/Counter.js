import React, { Component }  from 'react';

class Counter extends Component{
    constructor() {
        super();
        this.state = {counter: 0};
    }

    increment() {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.increment}>+</button>
                <output>{this.state.counter}</output>
                <button>-</button>
            </div>
        );
    }
}