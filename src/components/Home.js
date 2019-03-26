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
            href: 'www.baidu.com',
            inputMsg: '我是inputMsg',
            keyCode: '0'
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
    setDom = (ev) => {
        ev.target.style.color = 'red'
        let id = ev.target.getAttribute('data-id')
        console.log('id is: ' + id)
    }
    handleChange = (ev) => {
        // let value = ev.target.value
        let value = this.refs.username.value
        this.setState({
            inputMsg: value
        })
    }
    changeInput = () => {
        this.setState({
            inputMsg: 'change'
        })
    }
    handleKeyboard = (ev) => {
        this.setState({
            keyCode: ev.keyCode
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
                    <button onClick={this.setDom} data-id='123'>改变dom样式</button>
                </div>

                <hr/>

                <h3>表单事件</h3>
                <p>inputMsg的值为{this.state.inputMsg}</p>
                <div><input ref='username' type="text" value={this.state.inputMsg} onChange={this.handleChange} /></div>
                <button onClick={this.changeInput}>改变inputMsg为change, 同时改变input的value(数据双向绑定)</button>

                <h3>键盘事件</h3>
                <p>当前按键keyCode值: {this.state.keyCode}</p>
                <input type="text" onKeyUp={this.handleKeyboard}/>
                <p>键盘keyUp事件(按键弹起)，输出键盘keyCode值</p>
                
            </div>
        )
    }
}

export default  Home