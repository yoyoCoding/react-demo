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
            hobbies: [
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
    handleCheckbox = (ev, str) => {
        // let val = ev.target.value
        // this.setState({
        //     city: val
        // })
        console.log(ev.target.value)
        console.log('str:' + str)
    }
    handleSubmit = (ev) => {
        ev.preventDefault()
        console.log('name:' + this.state.name)
        console.log('sex:' + this.state.sex)
        console.log('city:' + this.state.city)
    }

    render() {
        return (
            <div>
                <h3 className='heading'>{this.state.msg}</h3>
                <form action="/" onSubmit={this.handleSubmit}>
                    <p>表单提交数据</p>
                    <p>
                        name: {this.state.name} ||  
                        sex: {this.state.sex} ||  
                        city: {this.state.city} ||  
                    </p>

                    <div className="item">
                        用户名：
                        <input type="text" value={this.state.name} onChange={this.handleChange} />
                    </div>

                    <div className="item">
                        性别：
                        <input type="radio" value="1" name="sex" checked={this.state.sex == 1} onChange={this.handleSex}/>男
                        <input type="radio" value="2" name="sex" checked={this.state.sex == 2} onChange={this.handleSex}/>女
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
                            this.state.hobbies.map((item, key) => {
                                return (
                                    <span>
                                        <input type="checkbox" value={item.name} key={key} checked={item.checked} onChange={this.handleCheckbox} /> {item.name}
                                    </span>
                                )
                            })
                        }
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