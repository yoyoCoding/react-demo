import React, { Component } from 'react'
import '../../assets/css/nest.css'

class Info extends Component {
    constructor(props) {
        super(props)
        this.state = {
            msg: '我是<个人信息> Info'
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

export default Info