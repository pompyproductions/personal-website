import React, { Component } from "react";

class Clock extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            clickCount: 0,
        };
        this.clickEvent = this.clickEvent.bind(this);
        this.hoverEvent = this.hoverEvent.bind(this);
    }

    // ---
    // MOUNT/DISMOUNT
    
    componentDidMount() {
        this.timer = setInterval(
            () => this.tick(),
            1000
        )
    }
    componentWillUnmount() {
        clearInterval(this.timer);
    }

    // ---
    // EVENT HANDLERS

    clickEvent(e) {
        this.setState(prevState => ({
            clickCount: prevState.clickCount + 1,
        }))
    }
    hoverEvent(e) {
        console.log("HOVER")
    }

    // ---
    // CLASS METHODS

    tick() {
        this.setState({
            date: new Date(),
        })
    }


    // ---
    // FINAL RENDER

    render() {
        return (
            <div onClick={this.clickEvent} onMouseEnter={this.hoverEvent}>
                <h1>Flotation device.</h1>
                <p>Clicked {this.state.clickCount} times.</p>
                <p>It is {this.state.date.toLocaleTimeString()}...</p>
            </div>
        )
    }
}

export default Clock;