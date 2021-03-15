import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
    constructor(props) {
        super(props);
        console.log("Construct !!");
    }
    state = {
        count: 0,
    };
    plus = () => {
        this.setState(current => ({ count: current.count + 1 }));
    };
    minus = () => {
        this.setState(current => ({ count: current.count - 1 }));
    }
    componentDidMount() {
        console.log("Component Render !");
    }
    componentDidUpdate() {
        console.log("Update !!");
    }
    componentWillUnmount() {
        console.log("Good Bye !!");
    }
    render() {
        console.log("Render !!");
        return <div>
            <h1>The Number is {this.state.count}</h1>
            <button onClick={this.plus}>Plus</button>
            <button onClick={this.minus}>Minus</button>
        </div>
    }
}

export default App;