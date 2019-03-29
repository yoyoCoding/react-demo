import React from 'react'
import { Link } from 'react-router-dom'
import url from 'url'

class News extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            msg: 'hello',
            list: [
                {
                    title: '我是新闻1',
                    id: '111'
                },
                {
                    title: '我是新闻2',
                    id: '222'
                },
                {
                    title: '我是新闻3',
                    id: '333'
                }
            ],
            list2: [
                <li key='1'>News1</li>,
                <li key='2'>News2</li>,
                <li key='3'>News3</li>
            ]
        }
    }

    componentDidMount() {
        console.log(this.props)
        console.log(url.parse(this.props.location.search, true))
        const params = url.parse(this.props.location.search, true).query
        console.log('get获取到的参数对象为:', params)
    }

    render() {
        let list = this.state.list.map((item, key) => {
            return <li key={key}><Link to={`/newsDetail/${item.id}`}>{item.title}</Link></li>
        })
        return (
            <div>
                <h3>我是News组件</h3>
                
                <p>数组1</p>
                <ul>{list}</ul>

                <p>数组2</p>
                <ul>{this.state.list2}</ul>
            </div>
        )
    }
}

export default News