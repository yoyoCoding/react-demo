import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import '../assets/css/demo.css'

class Demo_product extends Component {
    constructor(props) {
        super(props)
        this.state = {
            msg: '我是系统首页 Demo_product',
            details: {},
            jumpFlag: false
        }
    }

    componentDidMount() {
        const id = this.props.match.params.pid
        // console.log(id)
        this.getData(id)
    }

    getData = (id) => {
        const url = 'http://a.itying.com/api/productcontent?id=' + id
        axios.get(url)
            .then(res => {
                // console.log(res)
                this.setState({
                    details: res.data.result[0]
                })
            })
            .catch(err => {
                console.log('error', err)
            })
    }
    jump = () => {
        console.log('jump')
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
                {
                    this.state.details.img_url ? <img src={`http://a.itying.com/${this.state.details.img_url}`} alt="" /> : ''
                }
                    {/* <Link to='/' className="return">返回</Link> */}
                    <div className="return" onClick={this.jump}>返回</div>
                </div>
                <div className="info">
                    <p className="name">{this.state.details.title}</p>
                    <p className="price">￥{this.state.details.price}/份</p>
                </div>
                
                <div className="detail-wrap">
                    <h4 className="title">商品详情</h4>
                    {/* <div className="content">{this.state.details.content}</div> */}
                    <div className="content" dangerouslySetInnerHTML={{__html: this.state.details.content}}></div>
                </div>
            </div>
        )
    }
}

export default Demo_product