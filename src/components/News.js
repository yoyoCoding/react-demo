import React from 'react'

class News extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            msg: 'hello'
        }
    }
    render() {
        return (
            <div>
                <h3>我是News组件</h3>
            </div>
        )
    }
}

export default News