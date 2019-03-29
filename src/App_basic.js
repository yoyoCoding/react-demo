import React, { Component } from 'react';
import './assets/css/App.css'

// 引入子组件
// import Home from  './components/Home'
// import News from './components/News'
// import Form from './components/Form'
// import ToDoList from './components/ToDoList'
// import Communication from './components/Communication'
// import AxiosDemo from './components/AxiosDemo'
import Lifecycle from './components/Lifecycle'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      flag: true,
      title: '我是App组件的title'
    }
  }

  setFlag = () => {
    this.setState({
      flag: !this.state.flag
    })
  }
  changeTitle = () => {
    this.setState({
      title: '我是App组件的title changed'
    })
  }

  // render模版 jsx
  render() {
    return (
      <div className="App">
      {/* 根组件 */}
        <header>
          <a className="App-link" href="http://www.baidu.com" target="_blank" rel="noopener noreferrer">根组件App</a>
        </header>

        {/* 挂载子组件 */}
        {/* <Home></Home> */}
        {/* <News></News> */}
        {/* <Form></Form> */}
        {/* <ToDoList></ToDoList> */}
        {/* <Communication></Communication> */}
        {/* <AxiosDemo></AxiosDemo> */}

        {
          this.state.flag ? <Lifecycle title={this.state.title}></Lifecycle> : ''
        }

        <hr/>

        <button onClick={this.setFlag}>挂载or销毁组件</button>
        <button onClick={this.changeTitle}>改变传给Lifecycle组件的title值</button>

      </div>
    );
  }
}

export default App;
