import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './assets/css/App.css'
// 引入自定义路由模块
import routes from './models/routers'


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
          <header className="header">
            <Link to='/'>首页</Link>
            <Link to='/news?title=test&id=123'>新闻</Link>
            <Link to='/form'>表单</Link>
            <Link to='/user'>用户</Link>
          </header>

          {/* 渲染路由 */}
          {
            routes.map((route, key) => {
              if(route.exact) {
                return <Route key={key} exact path={route.path} render={props => (
                  <route.component {...props} routes={route.routes} />
                )} />
              } else {
                return <Route key={key} path={route.path} render={props => (
                  <route.component {...props} routes={route.routes} />
                )} />
              }
            })
          }
        </div>
      </Router>
    )
  }
}

export default App
