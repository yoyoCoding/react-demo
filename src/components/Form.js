import React, { Component } from 'react'
import '../assets/css/Form.css'

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            msg: '我是Form组件',
            name: 'yyy',
            sex: '1',
            city: '北京',
            citys: ['北京', '上海', '广州'],
            hobby: [
                {
                    name: '游泳',
                    checked: false
                },
                {
                    name: '健身',
                    checked: true
                },
                {
                    name: '弹钢琴',
                    checked: false
                }
            ],
            info: ''
        }
    }

    handleChange = (ev) => {
        let val = ev.target.value
        this.setState({
            name: val
        })
    }
    handleSex = (ev) => {
        let val = ev.target.value
        this.setState({
            sex: val
        })
    }
    handleSelect = (ev) => {
        let val = ev.target.value
        this.setState({
            city: val
        })
    }
    handleCheckbox = (key) => {
        let hobby = this.state.hobby
        hobby[key].checked = !hobby[key].checked
        this.setState({
            hobby: hobby
        })
    }
    handleInfo = (ev) => {
        let val = ev.target.value
        this.setState({
            info: val
        })
    }
    handleSubmit = (ev) => {
        ev.preventDefault()
        console.log('name:' + this.state.name)
        console.log('sex:' + this.state.sex)
        console.log('city:' + this.state.city)
        console.log('info:' + this.state.info)
    }

    render() {
        return (
            <div>
                <h3 className='heading'>{this.state.msg}</h3>
                <form action="/" onSubmit={this.handleSubmit}>
                    <p>表单提交数据</p>
                    <p>
                        name: {this.state.name} ||  
                        sex: {this.state.sex}
                        city: {this.state.city}  ||  
                        info: {this.state.info}
                    </p>

                    <div className="item">
                        用户名：
                        <input type="text" value={this.state.name} onChange={this.handleChange} />
                    </div>

                    <div className="item">
                        性别：
                        <input type="radio" value="1" name="sex" checked={this.state.sex === '1'} onChange={this.handleSex}/>男
                        <input type="radio" value="2" name="sex" checked={this.state.sex === '2'} onChange={this.handleSex}/>女
                    </div>

                    <div className="item">
                        城市：
                        <select value={this.state.city} onChange={this.handleSelect}>
                        {
                            this.state.citys.map((item, key) => {
                                return <option value={item} key={key}>{item}</option>
                            })
                        }
                        </select>
                    </div>
                    
                    <div className="item">
                        爱好：
                        {
                            this.state.hobby.map((item, key) => {
                                return (
                                    <span key={key}>
                                        <input type="checkbox" value={item.name} checked={item.checked} onChange={this.handleCheckbox.bind(this, key)} /> {item.name}
                                    </span>
                                )
                            })
                        }
                    </div>

                    <div className="item">
                        备注：
                        <textarea value={this.state.info} onChange={this.handleInfo}>说明信息</textarea>
                    </div>
                    
                    <div className="item">
                        <input type="submit"/>
                    </div>
                    
                </form>
            </div>
        )
    }
}

export default Form