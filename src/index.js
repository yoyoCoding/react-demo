import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// 引入App.js组件
import App from './App';
// 加快react运行速度
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
