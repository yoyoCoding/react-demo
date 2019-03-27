import React, { Component } from 'react'
import PropTypes from 'prop-types'

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
                <p>父组件传来的值为：{this.props.title} - 调用</p>
                <p>父组件传来的值必须为Number类型：{this.props.num}</p>
            </div>
        )
    }
}

Footer.defaultProps = {
    title: '默认标题',
    num: 0
}

Footer.propTypes = {
    num: PropTypes.number
}

export default Footer