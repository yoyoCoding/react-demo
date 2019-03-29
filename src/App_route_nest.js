import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import './assets/css/App.css'

// 引入子组件
import Home from  './components/Nest_home'
import User from './components/Nest_user'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '我是App组件的title'
    }
  }

  // render模版 jsx
  render() {
    return (
      <Router>
        <div>
          <h3 className="heading">嵌套路由 Nest</h3>

          <header className="header">
            <Link to='/'>首页</Link>
            <Link to='/user'>用户中心</Link>
          </header>

          <Route exact path='/' component={Home} />
          <Route path='/user' component={User} />
        </div>
      </Router>
    )
  }
}

export default App
