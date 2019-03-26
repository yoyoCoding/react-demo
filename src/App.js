import React, { Component } from 'react';
import './assets/css/App.css'

// 引入子组件
import Home from  './components/Home'
import News from './components/News'
import Form from './components/Form'

class App extends Component {
  // render模版 jsx
  render() {
    return (
      <div className="App">
      {/* 根组件 */}
        <header>
          <a
            className="App-link" href="javascript:;" target="_blank" rel="noopener noreferrer"
          >根组件App</a>
        </header>

        {/* 挂载子组件 */}
        {/* <Home></Home> */}
        {/* <News></News> */}
        <Form></Form>

      </div>
    );
  }
}

export default App;
