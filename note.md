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

### 表单事件
> 实现数据双向绑定  
1. 监听表单的change事件
2. 在change事件中获取input的值 (`event.target.value`获取 or ref获取`this.refs.refName.value`)
3. 将获取到的value赋值给state的变量  
4. input的value绑定state的数据    

### 键盘事件
onKeyUp、onKeyDown等
获取keyCode`event.keyCode`