import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import './assets/css/App.css'

// 引入子组件
import Home from  './components/Home'
import News from './components/News'
import NewsDetail from './components/NewsDetail'
import Form from './components/Form'
// import ToDoList from './components/ToDoList'
// import Communication from './components/Communication'
// import AxiosDemo from './components/AxiosDemo'
// import Lifecycle from './components/Lifecycle'

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
          </header>

          <Route exact path='/' component={Home} />
          <Route path='/news' component={News} />
          <Route path='/newsDetail/:id' component={NewsDetail} />
          <Route path='/form' component={Form} />
        </div>
      </Router>
    )
  }
}

export default App
