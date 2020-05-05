import React, { Component }  from 'react';

class Counter extends Component{

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