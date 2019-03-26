import React, { Component } from 'react'
import '../assets/css/Home.css'
import imgDemo from '../assets/images/yeah.jpg'

class Home extends Component {
    constructor(props) {
        // super指代父类的实例(即父类的this对象) 在使用this之前调用
        super(props) // props用于父子组件传值

        // 定义数据
        this.state = {
            name: 'yyy',
            msg: '我是home组件',
            href: 'www.baidu.com'
        }

        // 改变自定义方法中的this指向
        this.getData2 = this.getData2.bind(this)
    }

    test() {
        alert('我是test方法')
    }
    getData() {
        console.log(this.state.name) 
    }
    getData2() {
        console.log(this.state.name)
    }
    getData3 = () => {
        console.log(this.state.name)
    }
    setData = (str) => {
        this.setState({
            msg: '我是home组件 -- 改变后的值' + str
        })
    }

    render() {
        return (
            <div>
                <p className="title">{this.state.msg}</p>
                <span style={{color: 'grey'}}>我是节点--{this.state.name}</span>
                <br/>
                <a href={this.state.href}>我是绑定href属性的超链接</a>
                <div>
                    <img src={imgDemo} alt="demo" />
                    <img src={require('../assets/images/yeah.jpg')} alt="demo" />
                </div>
                <div>
                    <button onClick={this.test}>test事件</button>
                    <button onClick={this.getData.bind(this)}>获取数据事件</button>
                    <button onClick={this.getData2}>获取数据事件2</button>
                    <button onClick={this.getData3}>获取数据事件3</button>
                    <br/>
                    <button onClick={this.setData.bind(this, 'changeValue')}>改变state的msg值</button>
                </div>
            </div>
        )
    }
}

export default  Home