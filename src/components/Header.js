import React, { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            msg: 'Header component',
            headerMsg: '我是Header组件的headerMsg',
            parentMsg: ''
         }
    }

    componentDidMount() {
        this.setState({
            parentMsg: this.props.parent.state.msg
        })
    }

    render() {
        return (
            <div>
                <h3 className="heading">{this.state.msg}</h3>
                <p>{this.props.name} - 调用</p>
                <p>获取父组件Communication的state数据：{this.state.parentMsg}</p>
                <button onClick={this.props.run}>调用父组件的run方法1</button>
                <button onClick={this.props.parent.run}>调用父组件的run方法2</button>
                <button onClick={this.props.parent.getChildren.bind(this, this.state.msg)}>给父组件Communication传值</button>
            </div>
        )
    }
}

export default Header