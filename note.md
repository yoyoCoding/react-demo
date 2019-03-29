**src文件夹比较乱 整理**  
新增components(组件)和assets(静态资源)文件夹

**App.js为根组件**  
render()里面放模板 jsx语法(html与js的宏写格式)  
不建议将太多代码放到根组件 应该将子组件挂载到根组件上

**render()里面的return()下如果有多个节点需要使用一个根div节点包起来**
```javascript
return (
    <div>
        <p>我是节点1</p>
        <span>我是节点2</span>
    </div>
)
```

## 定义模板数据
子组件类中定义constructor构造函数
```javascript
class Home extends Component {
    constructor() {
        super()
        // 定义数据
        this.state = {
            name: 'yyy'
        }
    }
    render() {
        return (
            <div>引用数据：{this.state.name}</div>
        )
    }
}
```

## 绑定属性
直接{}引用

```html
<a href={this.state.link}>我是超链接</a>
<h3 className="mytitle">我是标题</h3>
<span style={{color: 'red'}}>行内样式绑定</span>
```

> **警告：**  
> 因为 JSX 的特性更接近 JavaScript 而不是 HTML , 所以 React DOM 使用 `camelCase` 小驼峰命名 来定义属性的名称，而不是使用 HTML 的属性名称 
>
> 例如，`class` 变成了 `className`，而 `tabindex` 则对应着 `tabIndex`， `for`对应`htmlFor`  
> 行内style样式应该写做： `<span style={styleObj}>`  

## 引入本地图片
* 方式一：import图片，在src属性绑定引入图片
* 方式二：es5语法require()引入

`import imgDemo from '/images/1.png'`

```html
<img src={imgDemo} />
<img src={require('/images/1.png')} />
```  

## 渲染数组
* 方式一：遍历数组 (遍历数组转换为数组模板)
* 方式二：直接渲染数组模板

> 注意在遍历数组时给dom指定key  

```javascript
class News extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            list: ['111', '222', '333'],
            list2: [
                <li key='1'>item1</li>,
                <li key='2'>item2</li>,
                <li key='3'>item3</li>
            ]
        }
    }
    render() {
        // 也可以直接在dom中循环渲染 {list.map()}
        let list = this.state.list.map((item, key) => {
            return <li key={key}>item{item}</li>
        })
        return (
            <div>
                <p>数组1</p>
                <ul>{list}</ul>

                <p>数组2</p>
                <ul>{this.state.list2}</ul>
            </div>
        )
    }
}
```  

## 解析html(直接渲染html标签)
`<div dangerouslySetInnerHTML={{__html: '<p>我是html标签</p>'}}></div>`  

## 事件方法
1. 与render()同级定义方法，末尾不需要加逗号(,)
绑定方法：`onClick={this.yourMethod}`

2. 方法中获取数据 (无法通过this.state.xx获取) 自定义方法中无法获取当前组件的this
* 方式一：调用方式时绑定this `onClick={this.getData.bind(this)}`
* 方式二： 在constructor()中改变this指向 `this.getData = this.getData.bind(this)`
* 方式三： 使用ej6的箭头函数定义方法，this会指向当前组件的this

3. 改变state的值  
`this.setState({msg: 'changeValue'})`  

4. 方法传参  
`onClick={this.setData.bind(this, 'params1', 'params2')}`  

5. 获取事件节点  
`event.target`  

#### 表单事件
> 实现数据双向绑定  
1. 监听表单的change事件
2. 在change事件中获取input的值 (`event.target.value`获取 or ref获取`this.refs.refName.value`)
3. 将获取到的value赋值给state的变量  
4. input的value绑定state的数据    

#### 键盘事件
onKeyUp、onKeyDown等
获取keyCode`event.keyCode`

#### 约束性和非约束性组件
* 非约束性组件：`<input type="text" defaultValue="a" />`  这个 `defaultValue` 其实就是原生DOM中的 `value` 属性。这样写出的来的组件，其value值就是用户输入的内容，React完全不管理输入的过程  

* 约束性组件： `<input value={this.state.username} type="text" onChange={this.handleUsername}  />` 这里的value属性不再是一个写死的值，他是 `this.state.username`, `this.state.username` 是由 `this.handleChange` 负责管理的。这个时候实际上 input 的 `value` 根本不是用户输入的内容。而是 `onChange` 事件触发之后，由于 `this.setState` 导致了一次重新渲染。不过React会优化这个渲染过程，看上去有点类似双向数据绑定


## 组件通信
#### 父子组件传值  
> 父子组件：组件的相互调用中，我们把调用者成为父组件，被调用者成为子组件  
* 父组件给子组件传值
    1. 调用子组件时定义属性 `<Header msg='首页'></Header>`
    2. 子组件获取属性值 `this.props.msg`  

> 父组件也可以把方法传给子组件调用。父： `<Header run={this.run}></Header>` 子： `<button onClick={this.props.run}>调用父组件的run方法</button>`  

* 父组件主动获取子组件数据
    1. 调用子组件时指定ref值 `<Header ref='header'></Header>`
    2. 通过 `this.refs.header` 获取整个子组件实例

> 父组件同样可以把整个父组件实例传给子组件。父： `<Header parent={this}></Header>` 子： `this.props.parent.state.msg`  

* 子组件给父组件传值   
    1. 父组件把实例传给子组件 `<Header parent={this}></Header>` 
    2. 父组件定义方法获取子组件数据 `getChildren(value) {console.log(value)}`
    3. 子组件调用父组件方法并将值传给父组件 `<button onClick={this.props.parent.getChildren.bind(this, this.state.msg)}>`  
> **Attention**  
> `this.refs.xxx` 获取组件实例只能在自定义方法和生命周期挂载完成后使用，直接在DOM(jsx)中使用会获取不到

#### 使用defaultPorps和propTypes
* defaultProps: 默认prop值(父组件不传prop值的情况下)
* propTypes: 验证父组件传值类型的合法性

```javascript
import PropTypes from 'prop-types'
class Footer extends Component {
    //...
}
Footer.defaultProps = {
    title: '默认标题',
    num: 0
}
// 注意大小写
Footer.propTypes = {
    num: PropTypes.number
}
```

## 请求数据
#### axios
axios的作者觉得jsonp不太友好，推荐使用CORS方式更为干净(后端运行跨域)
1. 安装 `npm install axios`
2. 引入 `import axios from 'axios'`
3. 使用
```javascript
axios.get(url)
.then(res => {
    console.log(res)
    this.setState({
        list: res.data.result
    })
})
.catch(err => {
    console.log(err)
})
```

#### fetch-jsonp
可通过jsonp跨域请求服务器资源
1. 安装 `npm install fetch-jsonp`
2. 引入 `import fetchJsonp from 'fetch-jsonp'`
3. 使用
```javascript
fetchJsonp(url)
.then(response => {
    return response.json()
})
.then(json => {
    console.log('parsed josn', json)
    this.setState({
        list: json.result
    })
})
.catch(err => {
    console.log('parsing failed', err)
})
```


## 生命周期函数
  
详情参考 `/src/component/Lifcycle.js`  

> **必须记住的生命周期函数**  
> *加载时：componentWillMount、render、componentDicMount(DOM操作)  
>  更新时：componentWillUpdate、render、componentDidUpdate  
> *销毁时：componentWillUnmount   


## 路由使用react-router
版本：4.x  
react-router可以让根组件动态地挂载不同的组件  

1. 安装 `npm install react-router-dom`
2. 引入 `import {BrowserRouter as Router, Route, Link} from 'react-router-dom'`
3. 使用  
```html
<Route exact path='/' component={Home} />
<Route path='/product' component={Product} />
```
`exact` 属性，严格匹配  
`<Router></Router>` 标签内需要有一个根节点div包住   

#### 路由的跳转
* 页面定义：`<Link to='/path'>页面</link>`  (j记得先引入)
* js跳转：本质上再次触发render()方法, 重新定义return内容
```javascript
...
import { Redirect } from 'react-router-dom'
class Demo_product extends Component {
    constructor(props) {
        super(props)
        this.state = {
            jumpFlag: false
        }
    }

    jump = () => {
        this.setState({
            jumpFlag: true
        })
    }

    render() {
        if(this.state.jumpFlag) {
            return <Redirect to={{ pathname: '/' }}></Redirect>
        }
        return (
            <div className="product-wrap">
                <div className="img-box">
                    ...
                    <div className="return" onClick={this.jump}>返回</div>
                    ...
                </div>
            </div>
        )
    }
}
...
```


#### 动态路由&传值
* get传值  
    1. `/news?id=123`  
    2. 获取get传值： this.props.location.search (可以使用node内置url模块解析获得具体传值) 

* 动态路由  
    1. `<Route path='/newsDetail/:id' component={NewsDetail} />`   
    2. 获得动态路由传值：this.props.match.params.id


#### 路由嵌套
无需在一级路由组件内return(<Router></Router>), 直接定义二级路由即可  
获取父级路由 `this.props.match.url`  

```javascript
import { Route, Link } from 'react-router-dom'
...
// 引入二级路由组件
import Main from './Nest_user/Main'
import Info from './Nest_user/Info'
...
render() {
    return (
        <div className="user">
            ...
            <div className="container">
                <div className="left-wrap">
                    <ul>
                        <li>
                            {/* <Link to='/user/main'>我的主页</Link> */}
                        </li>
                        <li>
                            <Link to='/user/info'>个人信息</Link>
                        </li>
                    </ul>
                </div>
                <div className="right-wrap">
                    <Route exact path='/user/' component={Main} />
                    <Route path='/user/main' component={Main} />
                    <Route path='/user/info' component={Info} />
                </div>
            </div>
        </div>
    )
}
```
