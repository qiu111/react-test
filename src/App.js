// rcc有状态组件(类)
// rfc无状态组件(function)

import React, { Component } from 'react'
import axios from 'axios'
import './App.css'
import Navbar from './compontens/layout/Navbar.js'
import UserItem from './compontens/users/UserItem'
import Users from './compontens/users/Users'
// import TestUser from './compontens/users/TestUser'

export default class App extends Component {
  state={
    users:[],
    loading:false
  }
  async componentDidMount(){
    //this.setState({loading:true})
    const res = await axios.get("https://api.github.com/users");
    //console.log(res.data);
    this.setState({users: res.data})
    
  }
  render() {
    return (
      <div>
        <Navbar title="Github Finder"> </Navbar>
        <UserItem></UserItem>
        <div className="container">
          <Users loading={this.state.loading} users={this.state.users} />
        </div>

        {/* <TestUser /> */}
      </div>

      // <React.Fragment className="aaa">
      //   <h2>hello react</h2>
      //   <label htmlFor="male">ssss</label>
      // </React.Fragment>

    )
  }
}
