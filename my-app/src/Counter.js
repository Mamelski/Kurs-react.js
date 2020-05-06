import React, { Component }  from 'react';

class Counter extends Component{
    constructor() {
        super();
        this.state = {counter: 0};
    }
    render() {
        return (
            <div>
                <button>+</button>
                <output>{this.state.counter}</output>
                <button>-</button>
            </div>
        );
    }
}