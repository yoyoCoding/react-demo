import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import './assets/css/App.css'

// 引入子组件
import Home from  './components/Demo_home'
import Product from './components/Demo_product'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      flag: true,
      title: '我是App组件的title'
    }
  }

  // render模版 jsx
  render() {
    return (
      <Router>
        <div>
          <h3 className="heading">React请求数据实现 无人点餐收银系统[商品列表 还是那个品详情]</h3>

          <header className="header">
            <Link to='/'>首页</Link>
            <Link to='/product'>产品</Link>
          </header>

          <Route exact path='/' component={Home} />
          <Route path='/product/:pid' component={Product} />
        </div>
      </Router>
    )
  }
}

export default App
