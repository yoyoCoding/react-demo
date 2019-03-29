import React, { Component } from 'react'
import '../assets/css/demo.css'

class Nest_home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            msg: ''
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

export default Nest_home