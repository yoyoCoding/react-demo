import React, { Component } from 'react'
import '../assets/css/nest.css'

class Nest_home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            msg: '我是主页 Nest_home'
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