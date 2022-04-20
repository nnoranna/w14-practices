import React, { Component } from 'react'

class ButtonWithClass extends Component {
    constructor() {
        super()
        this.state = {
            key1: "Click Class",
            key2: 0
        }
    }
    render() {
        return (
        <>
            <button onClick={() => this.setState({key1: "Don't you dare click me again"})}>{this.state.key1}</button>
            <button onClick={() => this.setState({key2: 1})}>{this.state.key2}</button>
        </>
        )
    }
}

export default ButtonWithClass
