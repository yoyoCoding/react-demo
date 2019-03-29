import React, { Component } from 'react'

class NewsDetail extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            msg: '我是新闻详情页'
         }
    }

    componentDidMount() {
        console.log('传值的id是：' + this.props.match.params.id)
    }

    render() {
        return (
            <div>
                <h3 className="heading">{this.state.msg}</h3>
            </div>
        )
    }
}

export default NewsDetail