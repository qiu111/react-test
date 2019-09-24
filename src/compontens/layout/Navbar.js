// rce 有状态组件
import React, { Component } from 'react'

export class Navbar extends Component {
    static defaultProps = {
        title: 'aaa'
    };
    render() {
        return (
            <nav className="narbar bg-primary">
                <h1> {this.props.title} </h1>
            </nav>
        )
    }
}

export default Navbar