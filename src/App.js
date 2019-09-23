// rcc有状态组件(类)
// rfc无状态组件(function)

import React, { Component } from 'react'
import './App.css'
import Navbar from './compontens/layout/Navbar.js'
import UserItem from './compontens/users/UserItem'
import Users from './compontens/users/Users'

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar title="Github Finder"> </Navbar>
        <UserItem></UserItem>  
        <Users></Users>  
      </div>

      // <React.Fragment className="aaa">
      //   <h2>hello react</h2>
      //   <label htmlFor="male">ssss</label>
      // </React.Fragment>

    )
  }
}
