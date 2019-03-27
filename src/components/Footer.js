import React, { Component } from 'react'

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            msg: 'Component Footer'
         }
    }

    runFooter() {
        alert('我是Footer组件的runFooter方法')
    }

    render() {
        return (
            <div>
                <h3 className="heading">{this.state.msg}</h3>
            </div>
        )
    }
}

export default Footer