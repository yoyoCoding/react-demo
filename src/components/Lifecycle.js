import React, { Component } from 'react'

class Lifecycle extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            msg: 'Lifecycle component'
         }
    }
    render() {
        return (
            <div>
                <h3 className="heading">{this.state.msg}</h3>
            </div>
        )
    }
}

export default Lifecycle