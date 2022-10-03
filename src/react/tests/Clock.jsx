import React, { Component } from "react";

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
        };    
    }

    componentDidMount() {
        this.timer = setInterval(
            () => this.tick(),
            1000
        )
    }
    componentWillUnmount() {

    }

    tick() {
        this.setState({
            date: new Date(),
        })
    }

    render() {
        return (
            <div>
                <h1>Flotation device.</h1>
                <p>It is {this.state.date.toLocaleTimeString()}...</p>
            </div>
        )
    }
}

export default Clock;