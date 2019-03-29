import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import '../assets/css/demo.css'

class Demo_home extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            msg: '我是系统首页 Demo_home',
            list: [] // 二维数组
         }
    }

    componentDidMount() {
        this.getDataList()
    }

    getDataList = () => {
        const url = 'http://a.itying.com/api/productlist'
        axios.get(url)
        .then(res => {
            // console.log(res.data)
            this.setState({
                list: res.data.result
            })
        })
        .catch(err => {
            console.log('error', err)
        })
    }

    render() {
        return (
            <div className="home-wrap">
                <div className="list">
                {
                    this.state.list.map((item, key) =>{
                        return (
                            <div className="item" key={key}>
                                <h3 className="title">{item.title}</h3>
                                <ul>
                                {
                                    item.list.map((v, k) => {
                                        return (
                                            <li key={k}>
                                                <Link to={`/product/${v._id}`}>
                                                    <div className="img-box">
                                                        <img src={`http://a.itying.com/${v.img_url}`} alt="" />
                                                    </div>
                                                    <p className="name">{v.title}</p>
                                                    <p className="price">￥{v.price}</p>
                                                </Link>
                                            </li>
                                        )
                                    })
                                }
                                </ul>
                            </div>
                        )
                    })
                }
                </div>
            </div>
        )
    }
}

export default Demo_home