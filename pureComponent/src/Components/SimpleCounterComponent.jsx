import React, { Component ,PureComponent } from 'react'

export default class SimpleCounterComponent extends Component {
    constructor() {
        super()
        this.state = {
            count : 0,
            toggle : true
        }
    }

    changeToggle = ()=>{
        this.setState({
            toggle : !this.state.toggle
        })
    }

    increaseCount = ()=>{
        if(this.state.toggle) {
            this.setState({
                count : this.state.count + 1
            })
        } else {
            this.setState({
                count : this.state.count
            })
        }
    }

    render() {
        console.log("This is a simple component.");
        return (
            <>
                <h1>Simple Counter</h1>
                <h1>Count : {this.state.count}</h1>
                <button onClick={this.changeToggle} style={{backgroundColor: `${this.state.toggle ? "green" : "red"}`}}>Toggle</button>
                <button onClick={this.increaseCount}>+</button>
            </>
        )
    }
}