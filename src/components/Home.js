import React, { Component } from 'react'
import '../assets/css/Home.css'

class Home extends Component {
    constructor(props) {
        // super指代父类的实例(即父类的this对象) 在使用this之前调用
        super(props) // props用于父子组件传值
        // 定义数据
        this.state = {
            name: 'yyy',
            href: 'www.baidu.com'
        }
    }

    render() {
        return (
            <div>
                <p className="title">我是home组件</p>
                <span style={{color: 'grey'}}>我是节点--{this.state.name}</span>
                <br/>
                <a href={this.state.href}>我是绑定href属性的超链接</a>
            </div>
        )
    }
}

export default  Home