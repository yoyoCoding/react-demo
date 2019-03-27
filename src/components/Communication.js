import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'

class Communication extends Component {
    constructor(props) {
        super(props)
        this.state = {
            msg: 'Communication component',
            headerMsg: ''
        }
    }

    componentDidMount() {
        this.setState({
            headerMsg: this.refs.header.state.headerMsg
        })
        console.log(this.refs)
    }

    run() {
        alert('我是父组件的run方法')
    }
    getChildren(value) {
        alert('获取到子组件Header传来的数据：' + value)
    }
    runFooter = () => {
        this.refs.footer.runFooter()
    }

    render() {
        return (
            <div>
                <h3 className="heading">{this.state.msg}</h3>
                <p>获取子组件的headerMsg数据值为：{this.state.headerMsg}</p>
                <button onClick={this.runFooter}>调用子组件Footer的run方法</button>
                <p>以下为子组件 Header</p>
                <hr/>

                <Header ref='header' name='首页' run={this.run} parent={this}></Header>

                <p>以下为子组件 Footer</p>
                <hr />
                <Footer ref='footer'></Footer>
            </div>
        )
    }
}

export default Communication