import React, { Component } from 'react'

class Lifecycle extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            msg: 'Lifecycle component',
            name: 'test'
        }
        console.log('01构造函数constructor()')
    }

    componentWillMount() {
        console.log('02组件将要挂载componentWillMount()')
    }

    // DOM操作以及请求数据方法放在此生命周期函数内
    componentDidMount() {
        console.log('04组件挂载完毕componentDidMount()')
    }

    shouldComponentUpdate(nextProps, nextState) {
        // nextProps 将要更新的父组件传来的属性值
        // nextState 将要更新的state数据
        console.log('是否允许更新数据shouldComponentUpdate() update01')
        console.log('   nextProps: ', nextProps)
        console.log('   nextState: ', nextState)
        return true
    }

    componentWillUpdate() {
        console.log('数据将要更新componentWillUpdate() update02')
    }

    componentDidUpdate() {
        console.log('数据更新完毕componentDidUpdate() update03')
    }

    componentWillReceiveProps() {
        console.log('父组件传来的prop值将要发生改变')
    }

    // 用在页面返回时提醒数据保存
    componentWillUnmount() {
        console.log('组件将要销毁')
    }

    setData = () => {
        this.setState({
            name: 'test updated'
        })
    }

    render() {
        console.log('03数据渲染render()')
        return (
            <div>
                <h3 className="heading">{this.state.msg}</h3>
                <p>我是name数据-- {this.state.name}</p>
                <p>我是父组件传来的prop数据title: {this.props.title}</p>
                <button onClick={this.setData}>更新name数据</button>
            </div>
        )
    }
}

export default Lifecycle