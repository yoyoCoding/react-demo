import React, { Component } from 'react'
import axios from 'axios'
import fetchJsonp from 'fetch-jsonp'

class AxiosDemo extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            msg: 'Axios Component 获取服务器数据',
            list: []
         }
    }

    // 跨域请求 后台接口设置允许跨域
    getData = () => {
        console.log('getData')
        const url = 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20'
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
    }
    // 跨域请求 jsonp方式跨域 callback传给接口(接口自动加上callback了)
    getData2 = () => {
        const url = 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20'
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
    }

    render() {
        return (
            <div>
                <h3 className="heading">{this.state.msg}</h3>
                <button onClick={this.getData}>axios获取服务器api接口数据</button>
                <button onClick={this.getData2}>fetch-json获取服务器api接口数据</button>
                <ul>
                {
                    this.state.list.map((item, key) => {
                        return (
                            <div key={key}>
                                <li>{item.aid}: {item.title}</li>
                            </div>
                        )
                    })
                }
                </ul>
            </div>
        )
    }
}

export default AxiosDemo