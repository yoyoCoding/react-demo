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
<span style={{color: 'red'}}>
```

> **警告：**
> 因为 JSX 的特性更接近 JavaScript 而不是 HTML , 所以 React DOM 使用 `camelCase` 小驼峰命名 来定义属性的名称，而不是使用 HTML 的属性名称

> 例如，`class` 变成了 `className`，而 `tabindex` 则对应着 `tabIndex`， `for`对应`htmlFor`

> 行内style样式应该写做： `<span style={styleObj}>`