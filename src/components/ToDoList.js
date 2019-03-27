import React, { Component } from 'react'
// 引入自定义模块 缓存
import storage from '../models/storage'
import '../assets/css/ToDoList.css'

class ToDoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            msg: 'ToDoList演示',
            list: []
        }
    }

    handlePress = (ev) => {
        let keyCode = ev.keyCode
        let list = this.state.list
        if(keyCode === 13) {
            let value = ev.target.value
            ev.target.value = ''
            list.push({
                item: value,
                checked: false
            })
            this.setState({
                list: list
            })
        }
        storage.set('toDoList', list)
    }
    handleChange = (key) => {
        let list = this.state.list
        list[key].checked = !list[key].checked
        this.setState({
           list: list
        })
        storage.set('toDoList', list)
    }
    handleDelete = (key) => {
        let list = this.state.list
        list.splice(key, 1)
        this.setState({
            list: list
        })
        storage.set('toDoList', list)
    }

    // 声明周期函数 - 页面加载完毕
    componentDidMount() {
        this.setState({
            list: storage.get('toDoList') || []
        })
    }

    render() {
        return (
            <div>
                <h3 className="heading">{this.state.msg}</h3>
                <div className="item">
                    <input type="text" placeholder="添加ToDo(回车确定)" onKeyUp={this.handlePress}/>
                </div>

                <h4>正在进行<span className="tips"> (勾选标记为已完成)</span></h4>
                {
                    this.state.list.map((value, key) => {
                        if(value.checked === false) {
                            return (
                                <div key={key}>
                                    <div className="list-item">
                                        <input type="checkbox" onChange={this.handleChange.bind(this, key)} />
                                        <span className="tips">{value.item}</span>
                                        <span className="del" onClick={this.handleDelete.bind(this, key)}>-</span>
                                    </div>
                                </div>
                            )
                        }
                    })
                }

                <h4>已经完成</h4>
                {
                    this.state.list.map((value, key) => {
                        if (value.checked === true) {
                            return (
                                <div key={key}>
                                    <div className="list-item done">
                                        <input type="checkbox" checked onChange={this.handleChange.bind(this, key)} />
                                        <span className="tips">{value.item}</span>
                                        <span className="del" onClick={this.handleDelete.bind(this, key)}>-</span>
                                    </div>
                                </div>
                            )
                        }
                    })
                }

            </div>
        )
    }
}

export default ToDoList