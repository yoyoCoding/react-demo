import React, { Component } from 'react'
import '../../assets/css/nest.css'

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            msg: '我是<我的主页> Main'
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

export default Main