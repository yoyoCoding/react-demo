import React from 'react'

class News extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            msg: 'hello',
            list: ['111', '222', '333'],
            list2: [
                <li key='1'>item1</li>,
                <li key='2'>item2</li>,
                <li key='3'>item3</li>
            ]
        }
    }
    render() {
        let list = this.state.list.map((item, key) => {
            return <li key={key}>item{item}</li>
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