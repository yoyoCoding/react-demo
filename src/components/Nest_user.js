import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import '../assets/css/nest.css'

// 引入二级路由组件
import Main from './Nest_user/Main'
import Info from './Nest_user/Info'

class Nest_user extends Component {
    constructor(props) {
        super(props)
        this.state = {
            msg: '我是用户模块 Nest_user'
        }
    }

    componentDidMount() {
        console.log(this.props.routes)
    }

    render() {
        return (
            <div className="user">
                <h3 className="heading">{this.state.msg}</h3>
                <div className="container">
                    <div className="left-wrap">
                        <ul>
                            <li>
                                {/* <Link to='/user/main'>我的主页</Link> */}
                                <Link to={`${this.props.match.url}/main`}>我的主页</Link>
                            </li>
                            <li>
                                <Link to='/user/info'>个人信息</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="right-wrap">
                        {/* <Route exact path='/user/' component={Main} />
                        <Route path='/user/main' component={Main} /> */}
                        {/* <Route path='/user/info' component={Info} /> */}
                        {/* <Route path={`${this.props.match.url}/info`} component={Info} /> */}
                        {
                            this.props.routes.map((route, key) => {
                                return <Route exact={route.exact} path={route.path} component={route.component} key={key}/>
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Nest_user